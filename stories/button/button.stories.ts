import { Button } from './button';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    status: {
      control: {
        type: 'select'
      },
      options: ['primary', 'secondary', 'tertiary', 'warning', 'danger']
    },
    appearance: {
      control: {
        type: 'select'
      },
      options: ['filled', 'outline', 'ghost']
    },
    size: {
      control: {
        type: 'select'
      },
      options: ['small', 'medium', 'large']
    },
    disabled: {
      control: { type: 'boolean' }
    },
    full_width: {
      control: { type: 'boolean' }
    },
    text: {
      control: { type: 'text' }
    },
    icon_left: {
      control: { type: 'text' }
    },
    icon_right: {
      control: { type: 'text' }
    },
    no_padding: {
      control: { type: 'boolean' }
    }
  }
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = args => Button(args);

// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
export const PrimaryBtn = Template.bind({});
PrimaryBtn.args = {
  status: 'primary',
  appearance: 'filled',
  text: 'Click me!'
};

export const SecondaryBtn = Template.bind({});
SecondaryBtn.args = {
  status: 'secondary',
  appearance: 'filled',
  text: 'Click me!'
};

export const TertiaryBtn = Template.bind({});
TertiaryBtn.args = {
  status: 'tertiary',
  appearance: 'filled',
  text: 'Click me!'
};

export const WarningBtn = Template.bind({});
WarningBtn.args = {
  status: 'warning',
  appearance: 'filled',
  text: 'Click me!'
};

export const DangerBtn = Template.bind({});
DangerBtn.args = {
  status: 'danger',
  appearance: 'filled',
  text: 'Click me!'
};

export const OutlineBtn = Template.bind({});
OutlineBtn.args = {
  appearance: 'outline',
  status: 'primary',
  text: 'Click me!'
};

export const PrimaryGhostBtn = Template.bind({});
PrimaryGhostBtn.args = {
  status: 'primary',
  appearance: 'ghost',
  text: 'Click me!'
};

export const PrimaryGhostBtnWithoutPadding = Template.bind({});
PrimaryGhostBtnWithoutPadding.args = {
  status: 'primary',
  appearance: 'ghost',
  text: 'Click me!',
  no_padding: true
};

export const PrimaryIconLeftBtn = Template.bind({});
PrimaryIconLeftBtn.args = {
  status: 'primary',
  appearance: 'filled',
  text: 'Click me!',
  icon_left: 'star'
};

export const PrimaryIconRightBtn = Template.bind({});
PrimaryIconRightBtn.args = {
  status: 'primary',
  appearance: 'filled',
  text: 'Click me!',
  icon_right: 'star'
};

export const PrimaryIconsBtn = Template.bind({});
PrimaryIconsBtn.args = {
  status: 'primary',
  appearance: 'filled',
  text: 'Click me!',
  icon_right: 'star',
  icon_left: 'star'
};

export const PrimaryDisabledBtn = Template.bind({});
PrimaryDisabledBtn.args = {
  status: 'primary',
  appearance: 'filled',
  text: 'Click me!',
  disabled: true
};

export const PrimaryMediumBtn = Template.bind({});
PrimaryMediumBtn.args = {
  status: 'primary',
  appearance: 'filled',
  text: 'Click me!',
  size: 'medium'
};

export const PrimarySmallBtn = Template.bind({});
PrimarySmallBtn.args = {
  status: 'primary',
  appearance: 'filled',
  text: 'Click me!',
  size: 'small'
};

export const PrimaryFullWidthBtn = Template.bind({});
PrimaryFullWidthBtn.args = {
  status: 'primary',
  appearance: 'filled',
  text: 'Click me!',
  full_width: true
};