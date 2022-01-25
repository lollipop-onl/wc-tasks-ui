import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { reloadWindow } from 'util:reload';
import type { TaskSection } from 'type:task'
import { baseCss } from 'style:base.css';

@customElement('onl-tasks')
export class OnlTasks extends LitElement {
  static styles = [
    baseCss,
    css`
      :host {
        color: #ccc;
      }
    `,
  ];

  @property({ type: String }) serviceUrl!: string;

  @property({ type: Array }) tasks!: TaskSection[];

  @state() completedTasks: string[] = [];

  public render() {
    return html`
      <onl-reload-timer
        .serviceUrl=${this.serviceUrl}
      ></onl-reload-timer>
      <button @click=${() => reloadWindow(this.serviceUrl)}>Reload</button>
      ${this.tasks.map((tasklist) => (
        html`
          <onl-tasklist-item
            .serviceUrl=${this.serviceUrl}
            .tasklist=${tasklist}
          ></onl-tasklist-item>
        `
      ))}
    `;
  }
}
