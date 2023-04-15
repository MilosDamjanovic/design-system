import { Select } from './select';

export default {
  title: 'Components/Select',
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      options: ['small', 'medium']
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
    tooltip_label: {
      control: { type: 'text' }
    },
    tooltip_position: {
      control: {
        type: 'select'
      },
      options: ['top', 'bottom', 'left', 'right']
    },
    value: {
      control: { type: 'text' }
    },
    message: {
      control: { type: 'text' }
    },
    searchable: {
      control: { type: 'boolean' }
    },
    multiple: {
      control: { type: 'boolean' }
    },
    select_none: {
      control: { type: 'boolean' }
    },
    url: {
      control: { type: 'boolean' }
    },
    description: {
      control: { type: 'boolean' }
    },
    not_breakable: {
      control: { type: 'boolean' }
    }
  }
};

const Template = args => Select(args);

export const InlineSelectDefault = Template.bind({});
InlineSelectDefault.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  inline_input: true
};

export const InlineSelectDisabled = Template.bind({});
InlineSelectDisabled.args = {
  disabled: true,
  placeholder: 'Placeholder',
  label: 'Label',
  inline_input: true
};

export const InlineSelectError = Template.bind({});
InlineSelectError.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  error: true,
  message: 'Error!',
  inline_input: true
};

export const SelectDefault = Template.bind({});
SelectDefault.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  inline_input: false
};

export const SelectDisabled = Template.bind({});
SelectDisabled.args = {
  disabled: true,
  placeholder: 'Placeholder',
  label: 'Label',
  inline_input: false
};

export const SelectSmall = Template.bind({});
SelectSmall.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  size: 'small',
  inline_input: false
};

export const SelectError = Template.bind({});
SelectError.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  error: true,
  message: 'Error!',
  inline_input: false
};

export const SelectWithUrl = Template.bind({});
SelectWithUrl.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  inline_input: false,
  url: true
};

export const SelectWithDescription = Template.bind({});
SelectWithDescription.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  inline_input: false,
  description: true
};

export const SelectWithSelectNone = Template.bind({});
SelectWithSelectNone.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  inline_input: false,
  select_none: true
};

export const SelectWithSearch = Template.bind({});
SelectWithSearch.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  inline_input: false,
  searchable: true
};

export const SelectWithFullWidth = Template.bind({});
SelectWithFullWidth.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  inline_input: false,
  not_breakable: true
};

export const SelectWithIconItems = Template.bind({});
SelectWithIconItems.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  inline_input: false,
  label_with_icon: true
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  inline_input: false,
  multiple: true
};

export const MultiSelectWithSelectAll = Template.bind({});
MultiSelectWithSelectAll.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  inline_input: false,
  select_all: true,
  multiple: true
};

export const MultiSelectWithDescriptionAndLink = Template.bind({});
MultiSelectWithDescriptionAndLink.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  inline_input: false,
  multiple: true,
  description: true,
  select_all: true,
  url: true
};

export const MultiSelectWithSearch = Template.bind({});
MultiSelectWithSearch.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  inline_input: false,
  select_all: true,
  multiple: true,
  searchable: true
};

export const InlineSelectDefaultWithTooltip = Template.bind({});
InlineSelectDefaultWithTooltip.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  inline_input: true,
  tooltip_label: 'Test123',
  tooltip_position: 'bottom'
};