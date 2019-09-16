import { AnypointDialog } from '@anypoint-web-components/anypoint-dialog/src/AnypointDialog.js'
import dialogStyles from '@anypoint-web-components/anypoint-dialog/src/AnypointDialogInternalStyles.js'
import { html } from 'lit-element';
import '@anypoint-web-components/anypoint-button/anypoint-button.js';
import styles from './styles.js';
import content from './Lisenses.js';
/**
 * A license information dialog for ARC.
 *
 * If any instance of ARC uses additional libraries that its license should be
 * included then it accepts children as a license.
 *
 * ## Example
 *
 * ```html
 * <arc-license-dialog opened>
 *  <section>
 *    <h3>Additional license</h3>
 *    <p>Text of the license</p>
 *  </section>
 * </arc-license-dialog>
 * ```
 *
 * @customElement
 * @demo demo/index.html
 * @memberof UiElements
 */
export class ArcLicenseDialog extends AnypointDialog {
  static get styles() {
    return [
      dialogStyles,
      styles
    ];
  }

  static get properties() {
    return {
      /**
       * Enables compatibility with Anypoint platform
       */
      compatibility: { type: Boolean }
    };
  }

  render() {
    const { compatibility } = this;
    return html`
    <h2 class="title">Advanced REST Client license</h2>
    <div class="scrollable">
      ${content}
      <slot></slot>
    </div>
    <div class="buttons">
      <anypoint-button ?compatibility="${compatibility}" dialog-dismiss>Close</anypoint-button>
    </div>
    `;
  }
}
