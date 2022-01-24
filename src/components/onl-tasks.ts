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
    :host {
      color: white;
    }
  `;

  @property({ type: String }) serviceUrl!: string;

  @property({ type: Object }) tasks!: TaskItem[];

  private async completeTask(tasklistId: string, taskId: string) {
    await fetch(this.serviceUrl, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({
        action: 'complete_task',
        tasklist: tasklistId,
        task: taskId,
      })
    })
  }

  public render() {
    return html`
      ${this.tasks.map(({ id: tasklistId, title, items }) => (
        html`
          <h1>${title}</h1>
          <ul>
            ${items.map(({ id: taskId, title }) => (
              html`
                <li>
                  ${title}
                  <form action="${this.serviceUrl}" method="POST">
                    <input type="hidden" name="action" value="complete_task" />
                    <input type="hidden" name="tasklist" value="${tasklistId}" />
                    <input type="hidden" name="task" value="${taskId}" />
                    <button>Complete Task</button>
                  </form>
                  <button onclick="${this.completeTask}">Complete Task (fetch)</button>
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
