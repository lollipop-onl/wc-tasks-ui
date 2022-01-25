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

  constructor() {
    super();

    if ('AmbientLightSensor' in window) {
      const sensor = new (window as any).AmbientLightSensor();

      sensor.onreading = () => {
        this.illuminance = sensor.illuminance;
      };

      sensor.onerror = (event: any) => {
        alert(`${event.error.name}: ${event.error.message}`);
      };

      sensor.start();
    }

    setInterval(() => {
      reloadWindow(this.serviceUrl);
    }, 5 * 60 * 1000);
  }

  @property({ type: String }) serviceUrl!: string;

  @property({ type: Array }) tasks!: TaskSection[];

  @state() completedTasks: string[] = [];

  @state() illuminance: number | null = null;

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
      <onl-header></onl-header>
      <pre>${'AmbientLightSensor' in window}</pre>
      <button @click=${() => reloadWindow(this.serviceUrl)}>Reload</button>
      ${this.illuminance != null ? html`
        <p>Illuminance: ${this.illuminance}lx</p>
      ` : null}
      ${this.tasks.map(({ id: tasklistId, title, items }) => (
        html`
          <h1>${title}</h1>
          <ol>
            ${items.map((task) => (
              html`
                <li>
                  <onl-task-item
                    .serviceUrl=${this.serviceUrl}
                    .tasklistId=${tasklistId}
                    .task=${task}
                  ></onl-task-item>
                </li>
              `
            ))}
          </ol>
        `
      ))}
      <p>Hello, world.</p>
    `;
  }
}
