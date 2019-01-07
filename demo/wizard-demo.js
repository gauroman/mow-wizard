import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class WizardDemo extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    display: block;
                }
            </style>
            <mow-wizard id="wizard">
                <info-view></info-view>
            </mow-wizard>
        `;
    }
    static get properties() {
        return {
        };
    }
    ready() {
        super.ready();

        this.$.wizard.steps = [{"label":"Step 1","content":"1"}, {"label":"Step 2","content":"2"}, {"label":"Step 3","content":"3"}];
    }  
}

window.customElements.define('wizard-demo', WizardDemo);
