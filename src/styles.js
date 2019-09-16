import { css } from 'lit-element';

export default css`
:host {
  display: flex;
  flex-direction: column;
}

.preformatted {
  white-space: pre-line;
}

h3,
:host ::slotted(h3) {
  font-size: var(--arc-font-headline-font-size);
  font-weight: var(--arc-font-headline-font-weight);
  letter-spacing: var(--arc-font-headline-letter-spacing);
  line-height: var(--arc-font-headline-line-height);
  color: var(--arc-license-section-title-color, var(--primary-color));
}

h4 {
  font-size: var(--arc-font-title-font-size);
  font-weight: var(--arc-font-title-font-weight);
  line-height: var(--arc-font-title-line-height);
}

.scrollable {
  overflow: auto;
  padding: 0 24px;
  flex: 1;
}
`;
