import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { baseCss } from 'style:base.css';
import type { TaskSection } from 'type:task';

@customElement('onl-tasklist-item')
export class OnlTasklistItem extends LitElement {
  static styles = [
    baseCss,
  ]

  @property({ type: String }) serviceUrl!: string;

  @property({ type: Object }) tasklist!: TaskSection;

  render() {
    return html`
      <details>
        <summary>${this.tasklist.title} (${this.tasklist.items.length})</summary>
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
