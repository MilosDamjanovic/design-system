import { Radio } from './radio';

export default {
  title: 'Components/Radio',
  argTypes: {
    disabled: {
      control: {
        type: 'boolean'
      },
    },
    disable_single: {
      control: {
        type: 'boolean'
      },
    },
    value: {
      control: {
        type: 'select'
      },
      options: ['option1', 'option2', 'option3']
    }
  }
};

const Template = args => Radio(args);

export const EmptyRadioGroup = Template.bind({});
EmptyRadioGroup.args = {
  disabled: false,
  disable_single: false
};

export const RadioGroup = Template.bind({});
RadioGroup.args = {
  disabled: false,
  disable_single: false,
  value: 'option1'
};

export const DisabledRadioGroup = Template.bind({});
DisabledRadioGroup.args = {
  disabled: true,
  disable_single: false,
  value: 'option2'
};

export const DisabledOneRadio = Template.bind({});
DisabledOneRadio.args = {
  disabled: false,
  disable_single: true,
  value: 'option3'
};
