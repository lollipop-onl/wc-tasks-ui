import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('onl-tasks')
export class OnlTasks extends LitElement {
  static styles = css`
    p {
      color: white;
    }
  `;

  render() {
    return html`
      <p>Hello, world.</p>
    `;
  }
}
