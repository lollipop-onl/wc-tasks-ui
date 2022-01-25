import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { baseCss } from 'style:base.css';

@customElement('onl-header')
export class OnlHeader extends LitElement {
  static styles = [
    baseCss,
    css`
      .header {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: 64px;
        background: black;
        border-bottom: 2px solid red;
      }
    `,
  ];

  render() {
    return html`
      <header class="header">

      </header>
    `
  }
}
