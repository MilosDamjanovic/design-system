import { html } from 'lit-html';
import { useEffect } from '@storybook/client-api';

export const Select = ({
  inline_input,
  size = 'medium',
  label = 'Label',
  placeholder = 'Placeholder',
  tooltip_label,
  tooltip_position,
  message,
  disabled = false,
  error = false,
  required,
  searchable = false,
  multiple = false,
  select_none = false,
  select_all = false,
  url = false,
  label_with_icon = false,
  description = false,
  not_breakable = false
}) => {
  const id = (Math.random() + 1).toString(36).substring(7);
  useEffect(() => {
    setTimeout(() => {
      let selectEl = document.getElementById(id) as any;
      if (selectEl == null) {
        return;
      }
      selectEl.value = [];
      let options = [
        { value: '1', label: 'Label1' },
        { value: '2', label: 'Label2' },
        { value: '3', label: 'Label3' },
        { value: '4', label: 'Label4' },
        { value: '5', label: 'Label5' },
        { value: '6', label: 'Label6' },
        { value: '7', label: 'Label7', disabled: true },
        { value: '8', label: 'Really looooon looong looong lloooooong loooooong loooooong loooooong name ' }
      ];
      if (description) {
        options = options.map((option, index) => ({ ...option, description: `Description ${index + 1}` }));
      }
      if (label_with_icon) {
        options = options.map(option => ({
          ...option,
          label: option.label,
          icon: '<span class="material-icons">account_circle</span>'
        }));
      }
      if (url) {
        options = options.map(option => ({
          ...option,
          trailingIcon: {
            name: 'open_in_new',
            onClick: () => {
              console.warn(option.label);
            }
          }
        }));
      }
      selectEl.options = options;
    }, 250);
  });
  return html`
    <nst-select 
      id=${id}
      inline_input=${inline_input}
      size=${size}
      label=${label}
      placeholder=${placeholder}
      message=${message}
      disabled=${disabled}
      error=${error}
      required=${required}
      searchable=${searchable}
      multiple=${multiple}
      select_none=${select_none}
      select_all=${select_all}
      not_breakable=${not_breakable}
      tooltip_label=${tooltip_label}
      tooltip_position=${tooltip_position}
      select_all_label="Select all"
      select_none_label="(Clear selection)"
      search_label="Search"
      multiple_selected_label="Multiple selected"
    </nst-select>
  `;
};
