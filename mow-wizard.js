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
      <iron-pages id="pages" selected="[[wizardPage]]"></iron-pages>
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
    this.$.pages.appendChild(page);
  }
  getSelectedPage() {
    return this.$.pages.selected;
  }
  getIronPages() {
    return this.$.pages;
  }
  getWizardHeader() {
    return this.$.wizardHeader;
  }
}

window.customElements.define('mow-wizard', MowWizard);
