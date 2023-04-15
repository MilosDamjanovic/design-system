import { html } from 'lit-html';

export const Radio = ({ value, disabled, disable_single }) => {
  return html`
      <nst-radio-group value=${value} disabled=${disabled}>
        <nst-radio value="option1">Option 1</nst-radio>
        <nst-radio value="option2">Option 2</nst-radio>
        <nst-radio value="option3" disabled=${disable_single}>Option 3</nst-radio>
      </nst-radio-group>
    `;
}
