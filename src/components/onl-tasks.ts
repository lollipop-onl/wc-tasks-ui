import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('onl-tasks')
export class OnlTasks extends LitElement {
  render() {
    return html`
      <script src="https://cdn.tailwindcss.com"></script>
      <p class="text-white">Hello, world.</p>
    `;
  }
}
