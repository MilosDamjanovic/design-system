import { Input } from './input';

export default {
  title: 'Components/Input',
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      options: ['small', 'medium']
    },
    type: {
      control: {
        type: 'select'
      },
      options: ['text', 'email', 'password', 'number']
    },
    required: {
      control: { type: 'boolean' }
    },
    inline_input: {
      control: { type: 'boolean' }
    },
    disabled: {
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
    icon_right: {
      control: { type: 'text' }
    },
    input_prefix: {
      control: { type: 'text' }
    },
    input_suffix: {
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

const Template = args => Input(args);

export const InlineInputDefault = Template.bind({});
InlineInputDefault.args = {
  placeholder: 'Placeholder',
  inline_input: true,
};

export const InlineDisabledInput = Template.bind({});
InlineDisabledInput.args = {
  disabled: true,
  placeholder: 'Placeholder',
  inline_input: true,
};

export const InlineErrorInput = Template.bind({});
InlineErrorInput.args = {
  placeholder: 'Placeholder',
  error: true,
  message: 'Error!',
  inline_input: true,
};

export const TextInputDefault = Template.bind({});
TextInputDefault.args = {
  placeholder: 'Placeholder',
  inline_input: false,
};

export const TextDisabledInput = Template.bind({});
TextDisabledInput.args = {
  disabled: true,
  placeholder: 'Placeholder',
  inline_input: false,
};

export const TextErrorInput = Template.bind({});
TextErrorInput.args = {
  placeholder: 'Placeholder',
  error: true,
  message: 'Error!',
  inline_input: false,
};

export const IconInput = Template.bind({});
IconInput.args = {
  placeholder: 'Placeholder',
  inline_input: false,
  icon_left: 'home',
  icon_right: 'home'
};

export const PrefixSuffixInput = Template.bind({});
PrefixSuffixInput.args = {
  placeholder: '',
  inline_input: false,
  input_prefix: 'km',
  input_suffix: 'km'
};

export const InlineInputDefaultWithTooltip = Template.bind({});
InlineInputDefaultWithTooltip.args = {
  placeholder: 'Placeholder',
  inline_input: true,
  tooltip_label: 'Tooltip',
  tooltip_position: 'bottom'
};