import { ListSelect } from './list-select';

export default {
  title: 'Components/List Select',
  argTypes: {
    item_title: {
      control: { type: 'text' }
    },
    description: {
      control: { type: 'text' }
    },
    has_checkbox: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
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

const Template = args => ListSelect(args);

export const ListSelectDefault = Template.bind({});
ListSelectDefault.args = {
  item_title: 'Primary Text',
  description: 'This is a description',
  has_checkbox: false,
  disabled: false,
  disable_single: false
};

export const ListSelectWithCheckbox = Template.bind({});
ListSelectWithCheckbox.args = {
  item_title: 'Primary Text',
  description: 'This is a description',
  has_checkbox: true,
  disable_single: false,
  disabled: false,
  value: 'option1'
};

export const ListSelectDisabled = Template.bind({});
ListSelectDisabled.args = {
  item_title: 'Primary Text',
  description: 'This is a description',
  has_checkbox: true,
  disabled: true,
  disable_single: false,
  value: 'option2'
};

export const ListSelectDisabledOneWithCheckbox = Template.bind({});
ListSelectDisabledOneWithCheckbox.args = {
  item_title: 'Primary Text',
  description: 'This is a description',
  disabled: false,
  has_checkbox: true,
  disable_single: true,
  value: 'option3'
};

