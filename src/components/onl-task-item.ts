import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { baseCss } from "style:base.css";
import type { TaskItem } from "type:task";

@customElement("onl-task-item")
export class OnlTaskItem extends LitElement {
  static styles = [
    baseCss,
    css`
      .taskItem {
        max-height: 100vh;
        padding: 16px 8px;
        color: #ccc;
        border-top: 1px solid #333;
        transition: max-height 0.5s ease;
      }

      .taskItem[data-done] {
        max-height: 0;
      }

      .taskItem > .details {
        display: flex;
        align-items: center;
      }

      .taskItem > .details > .notes {
        font-size: 12px;
        color: #aaa;
      }
    `,
  ];

  @property({ type: String }) serviceUrl!: string;

  @property({ type: String }) tasklistId!: string;

  @property({ type: Object }) task!: TaskItem;

  @state() completed = false;

  private async completeTask(): Promise<void> {
    await fetch(this.serviceUrl, {
      method: "POST",
      mode: "no-cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "complete_task",
        tasklist: this.tasklistId,
        task: this.task.id,
      }),
    });

    this.completed = true;
  }

  public render() {
    return html`
      <div
        class="taskItem"
        .ariaHidden=${this.completed.toString()}
      >
        <div class="title">${this.task.title}</div>
        <div class="details">
          <div class="due">${this.task.due}</div>
          ${ this.task.notes ? html`<div class="notes">${this.task.notes}</div>` : null }
        </div>
      </div>
      <p>${this.task.title}</p>
      ${this.task.notes ? html`<p>${this.task.notes}</p>` : null}
      ${this.completed ? html`<p>(Done)</p>` : null}
      <button @click="${() => this.completeTask()}">Complete</button>
    `;
  }
}
