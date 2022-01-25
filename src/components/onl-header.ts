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
        border-bottom: 2px solid #444;
        background: black;
      }

      .header::after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 0;
        width: 100%;
        height: 2px;
        background: red;
        transform-origin: left top;
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
