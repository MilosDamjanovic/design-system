import { Checkbox } from './checkbox';

export default {
  title: 'Components/Checkbox',
  argTypes: {
    checked: {
      control: {
        type: 'boolean'
      }
    },
    indeterminate: {
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    }
  }
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = args => Checkbox(args);

// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Unchecked = Template.bind({});
Unchecked.args = {
  label: '',
  checked: false,
  indeterminate: false,
  disabled: false
};

export const UncheckedWithText = Template.bind({});
UncheckedWithText.args = {
  label: 'Check me!',
  checked: false,
  indeterminate: false,
  disabled: false
};

export const Checked = Template.bind({});
Checked.args = {
  label: '',
  checked: true,
  indeterminate: false,
  disabled: false
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  label: '',
  checked: true,
  indeterminate: false,
  disabled: true
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  label: '',
  checked: false,
  indeterminate: true,
  disabled: false
};

export const IndeterminateDisabled = Template.bind({});
IndeterminateDisabled.args = {
  label: '',
  checked: false,
  indeterminate: true,
  disabled: true
};
