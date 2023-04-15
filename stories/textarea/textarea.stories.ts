import { Textarea } from './textarea';

export default {
  title: 'Components/Textarea',
  argTypes: {
    required: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    inline_input: {
      control: { type: 'boolean' }
    },
    error: {
      control: { type: 'boolean' }
    },
    placeholder: {
      control: { type: 'text' }
    },
    label: {
      control: { type: 'text' }
    },
    value: {
      control: { type: 'text' }
    },
    message: {
      control: { type: 'text' }
    },
    icon_left: {
      control: { type: 'text' }
    },
    tooltip_label: {
      control: { type: 'text' }
    },
    tooltip_position: {
      control: {
        type: 'select'
      },
      options: ['top', 'bottom', 'left', 'right']
    },
  }
};

const Template = args => Textarea(args);

export const TextareaDefault = Template.bind({});
TextareaDefault.args = {
  placeholder: 'Placeholder',
  inline_input: false,
};

export const DisabledTextarea = Template.bind({});
DisabledTextarea.args = {
  disabled: true,
  placeholder: 'Placeholder',
};

export const ErrorTextarea = Template.bind({});
ErrorTextarea.args = {
  placeholder: 'Placeholder',
  error: true,
  message: 'Error!',
};

export const IconTextarea = Template.bind({});
IconTextarea.args = {
  placeholder: 'Placeholder',
  icon_left: 'home'
};

export const TextareaDefaultWithTooltip = Template.bind({});
TextareaDefaultWithTooltip.args = {
  placeholder: 'Placeholder',
  inline_input: false,
  tooltip_label: 'Tooltip',
  tooltip_position: 'bottom'
};