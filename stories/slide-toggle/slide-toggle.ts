import { html } from 'lit-html';

export const SlideToggle = ({ checked, disabled, label, size, icon, heading, description }) => {
  return html`
     <nst-slide-toggle
      checked="${checked}"
      size="${size}"
      disabled="${disabled}"
      label="${label}"
      icon="${icon}"
      heading="${heading}"
      description="${description}">
     </nst-slide-toggle>
  `;
};
