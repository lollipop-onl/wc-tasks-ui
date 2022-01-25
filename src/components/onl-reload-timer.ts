import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { reloadWindow } from 'util:reload';
import { baseCss } from 'style:base.css';

const RELOAD_INTERVAL_MINUTES = 3;

@customElement('onl-reload-timer')
export class OnlReloadTimer extends LitElement {
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

      .progressBar {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: 20px;
        border-bottom: 2px solid #222;
        background: black;
      }

      .progressBar::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background: #eab308;
        transform-origin: left top;
        animation: progress ${RELOAD_INTERVAL_MINUTES * 60}s linear;
      }
    `,
  ];

  @property({ type: String }) serviceUrl!: string;

  constructor() {
    super();
  }

  public connectedCallback() {
    super.connectedCallback();

    setTimeout(() => {
      console.log('fired reload timer!');

      reloadWindow(this.serviceUrl);
    }, RELOAD_INTERVAL_MINUTES * 60 * 1000);
  }

  render() {
    return html`
      <div class="progressBar"></div>
    `
  }
}
