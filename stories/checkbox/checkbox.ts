import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({ label, checked, indeterminate, disabled }) => {
  return html`
    <nst-checkbox
      label="${label}"
      checked="${checked}"
      indeterminate="${indeterminate}"
      disabled="${disabled}">
    </nst-checkbox>
  `;
};
