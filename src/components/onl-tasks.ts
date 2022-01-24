import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { TaskSection } from 'type:task'

@customElement('onl-tasks')
export class OnlTasks extends LitElement {
  static styles = css`
    :host {
      color: white;
    }
  `;

  @property({ type: String }) serviceUrl!: string;

  @property({ type: Object }) tasks!: TaskSection[];

  @state() completedTasks: string[] = [];

  private async completeTask(tasklistId: string, taskId: string) {
    await fetch(this.serviceUrl, {
      method: 'POST',
      mode: 'no-cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'complete_task',
        tasklist: tasklistId,
        task: taskId,
      })
    });

    this.completedTasks.push(taskId);
  }

  public render() {
    return html`
      ${this.tasks.map(({ id: tasklistId, title, items }) => (
        html`
          <h1>${title}</h1>
          <ul>
            ${items.map((task) => (
              html`
                <li>
                  <onl-task-item
                    .serviceUrl="${this.serviceUrl}"
                    .tasklistId="${tasklistId}"
                    .task=${JSON.stringify(task)}
                  ></onl-task-item>
                </li>
              `
            ))}
          </ul>
        `
      ))}
      <p>Hello, world.</p>
    `;
  }
}
