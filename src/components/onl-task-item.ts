import { LitElement, html, css } from "lit";
import { customElement, property, state } from 'lit/decorators.js';
import type { TaskItem } from 'type:task'

@customElement('onl-task-item')
export class OnlTaskItem extends LitElement {
  @property({ type: String }) serviceUrl!: string;

  @property({ type: String }) tasklistId!: string;

  @property({ type: Object }) task!: TaskItem;

  @state() completed = false;

  private async completeTask(): Promise<void> {
    await fetch(this.serviceUrl, {
      method: 'POST',
      mode: 'no-cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        action: 'complete_task',
        tasklist: this.tasklistId,
        task: this.task.id,
      })
    })

    this.completed = true;
  }

  public render() {
    return html`
      <p>${this.task.title}</p>
      ${this.completed && html`<p>(Done)</p>`}
      <button @click="${() => this.completeTask()}">Complete</button>
    `
  }
}
