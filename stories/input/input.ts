import { html } from 'lit-html';

export const Input = ({
  required,
  inline_input,
  error = false,
  size = 'medium',
  placeholder = 'Placeholder',
  message,
  type = 'text',
  label = 'Label',
  value,
  disabled = false,
  icon_left,
  icon_right,
  input_prefix,
  input_suffix,
  tooltip_label,
  tooltip_position = 'top',
}) => {
  return html`
    <nst-input 
      label=${label}
      size=${size}
      placeholder=${placeholder}
      input_prefix=${input_prefix}
      input_suffix=${input_suffix}
      message=${message}
      value=${value}
      disabled=${disabled}
      icon_left=${icon_left}
      icon_right=${icon_right}
      type=${type}
      error=${error}
      inline_input=${inline_input}
      required=${required}
      tooltip_label=${tooltip_label}
      tooltip_position=${tooltip_position}>
    </nst-input>
  `;
};
