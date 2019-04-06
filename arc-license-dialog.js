/**
@license
Copyright 2016 The Advanced REST client authors <arc@mulesoft.com>
Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
*/
import {PolymerElement} from '../../@polymer/polymer/polymer-element.js';
import '../../@polymer/paper-dialog/paper-dialog.js';
import '../../@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js';
import '../../@polymer/paper-button/paper-button.js';
import './arc-license-content.js';
import {html} from '../../@polymer/polymer/lib/utils/html-tag.js';
/**
 * A license information dialog for ARC.
 *
 * If any instance of ARC uses additional libraries that its license should be
 * included then it accepts children as a license.
 *
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
 * ## Styling
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--arc-license-dialog` | Mixin applied to this elment | `{}`
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 * @memberof UiElements
 */
class ArcLicenseDialog extends PolymerElement {
  static get template() {
    return html`
    <style>
    :host {
      display: block;
      @apply --arc-license-dialog;
    }
    </style>
    <paper-dialog opened="{{opened}}">
      <h2>Licensing</h2>
      <paper-dialog-scrollable>
        <arc-license-content>
          <slot></slot>
        </arc-license-content>
      </paper-dialog-scrollable>
      <div class="buttons">
        <paper-button dialog-dismiss="">Close</paper-button>
      </div>
    </paper-dialog>`;
  }

  static get properties() {
    return {
      // Set to open the dialog
      opened: Boolean
    };
  }
}
window.customElements.define('arc-license-dialog', ArcLicenseDialog);
