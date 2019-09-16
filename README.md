[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/arc-license-dialog.svg)](https://www.npmjs.com/package/@advanced-rest-client/arc-license-dialog)

[![Build Status](https://travis-ci.org/advanced-rest-client/arc-license-dialog.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/arc-license-dialog)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/advanced-rest-client/arc-license-dialog)

# arc-license-dialog

A license information dialog for ARC.

If any instance of ARC uses additional libraries that its license should be included then it accepts children as a license.

## Example:

```html
<arc-license-dialog></arc-license-dialog>
```

## API components

This components is a part of [API components ecosystem](https://elements.advancedrestclient.com/)

## Usage

### Installation
```
npm install --save @advanced-rest-client/arc-license-dialog
```

### In a LitElement

```js
import { LitElement, html } from 'lit-element';
import '@advanced-rest-client/arc-license-dialog/arc-license-dialog.js';

class SampleElement extends LitElement {
  render() {
    return html`
    <arc-license-dialog></arc-license-dialog>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

## Development

```sh
git clone https://github.com/advanced-rest-client/arc-license-dialog
cd arc-license-dialog
npm install
```

### Running the tests

```sh
npm test
```

### Running the demo locally

```sh
npm start
```

## API components

This components is a part of [API components ecosystem](https://elements.advancedrestclient.com/)
