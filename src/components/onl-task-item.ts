import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { dayjs } from 'util:dayjs';
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
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 8px;
        color: #ccc;
        border-top: 1px solid #333;
      }

      .control {
        flex-shrink: 0;
        margin-left: 16px;
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
    const { title = '(タイトルなし)', due, notes } = this.task;

    return html`
      <div
        class="taskItem"
        aria-hidden="${this.completed}"
      >
        <div class="container">
          <div class="task">
            <div class="title">${title}</div>
            <div class="details">
              ${ due ? html`<div class="due">${dayjs().to(dayjs(due))}</div>` : null}
              ${ notes ? html`<div class="notes">${notes}</div>` : null }
            </div>
          </div>
          <div class="control">
            <button @click="${() => this.completeTask()}">DONE</button>
          </div>
        </div>
      </div>
    `;
  }
}
