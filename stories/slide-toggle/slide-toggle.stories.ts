import { SlideToggle } from './slide-toggle';

export default {
  title: 'Components/Slide toggle',
  argTypes: {
    checked: {
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    size: {
      control: {
        type: 'select'
      },
      options: ['medium', 'large']
    },
    icon: {
      control: {
        type: 'text'
      }
    },
    heading: {
      control: {
        type: 'text'
      }
    },
    description: {
      control: {
        type: 'text'
      }
    }
  }
};

const Template = args => SlideToggle(args);

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
  disabled: false
};

export const UncheckedWithLabel = Template.bind({});
UncheckedWithLabel.args = {
  label: 'Label',
  checked: false,
  disabled: false
};

export const UncheckedDisabled = Template.bind({});
UncheckedDisabled.args = {
  checked: false,
  disabled: true
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  disabled: false
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  checked: true,
  disabled: true
};

export const CheckedWithLabel = Template.bind({});
CheckedWithLabel.args = {
  checked: true,
  disabled: true,
  label: 'Toggle me!'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  checked: false,
  disabled: false
};

export const WithIconHeadingAndDescription = Template.bind({});
WithIconHeadingAndDescription.args = {
  checked: false,
  disabled: false,
  icon: 'home',
  heading: 'Lorem ipsum',
  description: 'Ut enim ad minim veniam, quis nostrud exercitation',
};
