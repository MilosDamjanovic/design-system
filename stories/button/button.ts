import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ full_width = false, icon_left, icon_right, text = 'Click me!', status, disabled = false, appearance, size = 'large', no_padding = false }) => {
  return html`
    <nst-button 
      text=${text}
      status=${status}
      appearance=${appearance}
      disabled=${disabled}
      size=${size}
      icon_left=${icon_left}
      icon_right=${icon_right}
      full_width=${full_width}
      no_padding=${no_padding}>
    </nst-button>
  `;
};
