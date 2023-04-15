import { html } from 'lit-html';

export const Textarea = ({
  inline_input,
  required,
  error = false,
  placeholder = 'Placeholder',
  message, label = 'Label',
  value,
  disabled = false,
  icon_left,
  tooltip_label,
  tooltip_position = 'top',
}) => {
  return html`
     <nst-textarea 
      label=${label}
      placeholder=${placeholder}
      message=${message}
      value=${value}
      inline_input=${inline_input}
      disabled=${disabled}
      icon_left=${icon_left}
      error=${error}
      required=${required}
      tooltip_label=${tooltip_label}
      tooltip_position=${tooltip_position}
     </nst-textarea>
  `;
};
