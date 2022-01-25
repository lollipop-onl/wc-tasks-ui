import { LitElement, html, css } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { reloadWindow } from 'util:reload';
import { baseCss } from 'style:base.css';

@customElement('onl-tabbar')
export class OnlTabbar extends LitElement {
  static styles = [
    baseCss,
    css`
      @keyframes rotate {
        0% {
          transform: rotate3d(0, 0, 0, 0deg);
        }
        100% {
          transform: rotate3d(0, 0, 0, 1800deg);
        }
      }

      .tabbar {
        position: sticky;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        width: 100%;
        height: 64px;
        background: black;
      }

      .reload {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        font-size: 32px;
        color: var(--color-text);
        opacity: 0.7;
        border: 0;
        background: transparent;
        transition: opacity 0.2s ease;
      }

      .reload:hover,
      .reload:disabled {
        opacity: 1;
      }

      .reload:disabled {
        animation: rotate 3s cubic-bezier(0.16, 1, 0.3, 1);
      }
    `
  ]

  @property({ type: String }) serviceUrl!: string;

  @state() reloaded = false;

  private reload(): void {
    this.reloaded = true;

    reloadWindow(this.serviceUrl);
  }

  render() {
    return html`
      <div class="tabbar">
        <button class="reload" .disabled=${this.reloaded} @click=${this.reload}>
          ↻
        </button>
      </div>
    `
  }
}
