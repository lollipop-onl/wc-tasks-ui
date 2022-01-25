import { css } from 'lit';

export const baseCss = css`
  /* Minimal CSS Reset */
  :host {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Custom Properties */
  :host {
    --font-primary: 'M PLUS Rounded 1c', sans-serif;
  }

  /* Custom Reset CSS */
  :host {
    user-select: none;
  }

  :host, button, input, textarea {
    font-weight: 300;
    font-family: var(--font-primary);
  }
`
