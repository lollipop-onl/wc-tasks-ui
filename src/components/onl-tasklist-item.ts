import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { baseCss } from 'style:base.css';
import type { TaskSection } from 'type:task';

@customElement('onl-tasklist-item')
export class OnlTasklistItem extends LitElement {
  static styles = [
    baseCss,
    css`
      summary::marker {
        display: none;
      }

      .summary {
        display: flex;
        align-items: center;
        padding: 8px 16px;
      }

      .summary > .title {
        overflow: hidden;
        font-size: 18px;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .summary > .count {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        width: 32px;
        height: 32px;
        margin-left: 8px;
        color: #ccc;
        font-size: 20px;
        border: 1px solid #333;
        border-radius: 50%;
      }
    `
  ]

  @property({ type: String }) serviceUrl!: string;

  @property({ type: Object }) tasklist!: TaskSection;

  render() {
    return html`
      <details>
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