import {LitElement, html, customElement, property, css} from 'lit-element';

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: 1px solid gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  @property()
  name = 'world';

  render() {
    return html` <p>Hello ${this.name}</p> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
