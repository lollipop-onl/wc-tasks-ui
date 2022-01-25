import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { baseCss } from 'style:base.css';

@customElement('onl-header')
export class OnlHeader extends LitElement {
  static styles = [
    baseCss,
    css`
      @keyframes progress {
        0% {
          transform: scale3d(0, 1, 1);
        }
        100% {
          transform: scale3d(1, 1, 1);
        }
      }

      .header {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: 64px;
        background: black;
      }

      .header::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 8px;
        background: red;
        animation: progress 300s;
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
