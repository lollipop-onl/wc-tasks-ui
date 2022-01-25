import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import Lockr from 'lockr';
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
        padding: 8px 16px;
      }

      .summary > .title {
        overflow: hidden;
        font-size: 18px;
        font-weight: bold;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .summary > .count {
        flex-shrink: 0;
        min-width: 3em;
        box-sizing: border-box;
        padding: 4px 8px;
        margin-left: 16px;
        color: #ccc;
        line-height: 1;
        text-align: center;
        border: 1px solid #555;
        border-radius: 4px;
      }

      .summary.-empty {
        opacity: 0.8;
      }

      .summary.-empty > .title {
        font-weight: normal;
      }
    `
  ]

  @property({ type: String }) serviceUrl!: string;

  @property({ type: Object }) tasklist!: TaskSection;

  @state() isOpened = false;

  private get lockrKey(): string {
    return `isopen_tasklist_${this.tasklist.id}`;
  }

  constructor() {
    super()

    this.isOpened = Lockr.get(this.lockrKey, false);
  }

  private onToggle(e: Event) {
    if (e.target instanceof HTMLDetailsElement) {
      Lockr.set(this.lockrKey, e.target.open);
    }
  }

  render() {
    if (this.tasklist.items.length === 0) {
      return html`
        <div class="summary -empty">
          <div class="title">${this.tasklist.title}</div>
          <div class="count">${this.tasklist.items.length}</div>
        </div>
      `
    }

    return html`
      <details .open=${this.isOpened} @toggle=${this.onToggle}>
        <summary>
          <div class="summary">
            <div class="title">${this.tasklist.title}</div>
            <div class="count">${this.tasklist.items.length}</div>
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
