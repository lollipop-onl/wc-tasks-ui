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
        overflow: hidden;
        transition: max-height 0.5s ease, opacity 0.5s ease;
      }

      .taskItem[aria-hidden=true] {
        max-height: 0;
        opacity: 0.4;
      }

      .container {
        padding: 16px 8px;
        color: #ccc;
        border-top: 1px solid #333;
      }

      .details {
        display: flex;
        align-items: center;
      }

      .notes {
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
        aria-hidden="${this.completed}"
      >
        <div class="container">
          <div class="title">${this.task.title}</div>
          <div class="details">
            ${ this.task.due ? html`<div class="due">${this.task.due}</div>` : null}
            ${ this.task.notes ? html`<div class="notes">${this.task.notes}</div>` : null }
          </div>
        </div>
      </div>
      <button @click="${() => this.completeTask()}">Complete</button>
    `;
  }
}
