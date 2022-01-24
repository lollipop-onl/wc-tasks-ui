import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

type SubTaskItem = {
  id: string;
  title: string;
  due: string;
}

type TaskItem = {
  id: string;
  title: string;
  items: SubTaskItem[];
}

@customElement('onl-tasks')
export class OnlTasks extends LitElement {
  static styles = css`
    p {
      color: white;
    }
  `;

  @property({ type: String }) serviceUrl!: string;

  @property({ type: Object }) tasks!: TaskItem[];

  render() {
    return html`
      ${this.tasks.map(({ title, items }) => (
        html`
          <h1>${title}</h1>
          <ul>
            ${items.map(({ title }) => (
              html`
                <li>${title}</li>
              `
            ))}
          </ul>
        `
      ))}
      <p>Hello, world.</p>
    `;
  }
}
