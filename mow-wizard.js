import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import '@polymer/iron-pages/iron-pages.js';

import {WizardHeader} from "../mow-wizard/wizard-header.js";

/**
 * `mow-wizard`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MowWizard extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <wizard-header id="wizardHeader" steps='[[steps]]' on-item-tap="itemTap"></wizard-header>
      <iron-pages selected="[[wizardPage]]">
        <content id="content"></content>
      </iron-pages>
    `;
  }
  static get properties() {
    return {
      steps: {
        type: Array,
        value: [],
      },
      wizardPage: {
        type: String,
        value: 0
      },
    };
  }
  addPage(page) {
    document.createElement(page);
    this.$.content.appendChild(child);
  } 
}

window.customElements.define('mow-wizard', MowWizard);
