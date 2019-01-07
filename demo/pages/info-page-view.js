import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class InfoPageView extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <p>Info view</p>
    `;
  }
  static get properties() {
    return {
      steps: {
        type: Array,
        value: [],
      },
    };
  }
}

window.customElements.define('info-page-view', InfoPageView);
