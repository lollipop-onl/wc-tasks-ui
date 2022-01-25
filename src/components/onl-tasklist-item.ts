import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import * as Lockr from 'lockr';
import { baseCss } from 'style:base.css';
import type { TaskSection } from 'type:task';

@customElement('onl-tasklist-item')
export class OnlTasklistItem extends LitElement {
  static styles = [
    baseCss,
    css`
      summary {
        display: block;
        list-style: none;
      }

      .summary {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 8px;
        color: #ccc;
      }

      .summary > .title {
        overflow: hidden;
        font-size: 18px;
        font-weight: bold;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .summary > .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height: 42px;
        border: 1px solid #333;
        border-radius: 50%;
      }

      .summary.-empty {
        opacity: 0.8;
      }

      .summary.-empty > .title {
        font-weight: normal;
      }

      details[open] .icon.-opened,
      details:not([open]) .icon.-closed {
        display: none;
      }
    `
  ]

  @property({ type: String }) serviceUrl!: string;

  @property({ type: Object }) tasklist!: TaskSection;

  private getLockrKey(): string {
    return `isopen_tasklist_${this.tasklist.id}`;
  }

  private onToggle(e: Event) {
    if (e.target instanceof HTMLDetailsElement) {
      Lockr.set(this.getLockrKey(), e.target.open);
    }
  }

  render() {
    if (this.tasklist.items.length === 0) {
      return html`
        <div class="summary -empty">
          <div class="title">${this.tasklist.title}</div>
        </div>
      `
    }

    return html`
      <details
        .open=${Lockr.get(this.getLockrKey(), true)}
        @toggle=${this.onToggle}
      >
        <summary>
          <div class="summary">
            <div class="title">${this.tasklist.title}</div>
            <div class="icon -opened">-</div>
            <div class="icon -closed">+</div>
          </div>
        </summary>
        <div>
          ${this.tasklist.items.map((task) => (
            html`
              <onl-task-item
                .serviceUrl=${this.serviceUrl}
                .tasklistId=${this.tasklist.id}
                .task=${task}
              ></onl-task-item>
            `
          ))}
        </div>
      </details>
    `;
  }
}
