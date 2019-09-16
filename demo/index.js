import { html } from 'lit-html';
import { ArcDemoPage } from '@advanced-rest-client/arc-demo-helper/ArcDemoPage.js';
import '@anypoint-web-components/anypoint-button/anypoint-button.js';
import '@advanced-rest-client/arc-demo-helper/arc-interactive-demo.js';
import '../arc-license-dialog.js';

class DemoPage extends ArcDemoPage {
  constructor() {
    super();
    this.initObservableProperties([
      'compatibility'
    ]);
    this._componentName = 'arc-license-dialog';
    this.demoStates = ['Material design', 'Anypoint'];

    this._demoStateHandler = this._demoStateHandler.bind(this);
    this._toggleMainOption = this._toggleMainOption.bind(this);
    this._open = this._open.bind(this);
  }

  _toggleMainOption(e) {
    const { name, checked } = e.target;
    this[name] = checked;
  }

  _demoStateHandler(e) {
    const state = e.detail.value;
    this.compatibility = state === 1;
  }

  _open() {
    document.querySelector('arc-license-dialog').opened = true;
  }

  _demoTemplate() {
    const {
      demoStates,
      darkThemeActive,
      compatibility
    } = this;
    return html`
      <section class="documentation-section">
        <h3>Interactive demo</h3>

        <arc-interactive-demo
          .states="${demoStates}"
          @state-chanegd="${this._demoStateHandler}"
          ?dark="${darkThemeActive}"
        >
          <anypoint-button slot="content" @click="${this._open}">Open dialog</anypoint-button>
        </arc-interactive-demo>

        <arc-license-dialog
          ?compatibility="${compatibility}"
          slot="content"
        ></arc-license-dialog>
      </section>
    `;
  }

  contentTemplate() {
    return html`
      <h2>ARC license dialog</h2>
      ${this._demoTemplate()}
    `;
  }
}

const instance = new DemoPage();
instance.render();
window._demo = instance;
