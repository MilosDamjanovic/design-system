import { Alert, AlertWithSlot } from './alert';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Components/Alert',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    closeable: {
      control: {
        type: 'boolean'
      }
    },
    has_icon: {
      control: {
        type: 'boolean'
      }
    },
    alert_action_title: {
      control: {
        type: 'text'
      }
    },
    comment_break_line: {
      control: {
        type: 'boolean'
      }
    },
    appearance: {
      control: {
        type: 'select'
      },
      options: ['filled', 'outline']
    },
    status: {
      control: {
        type: 'select'
      },
      options: ['info', 'success', 'warning', 'danger', 'neutral']
    },
    alert_title: {
      control: { type: 'text' }
    },
    alert_description: {
      control: { type: 'text' }
    },
    expandable: {
      control: {
        type: 'boolean'
      }
    },
    expanded: {
      control: {
        type: 'boolean'
      }
    },
    show_all_label: {
      control: { type: 'text' }
    },
    hide_all_label: {
      control: { type: 'text' }
    }
  }
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = args => Alert(args);
const TemplateWithSlot = args => AlertWithSlot(args);

// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
export const InfoAlert = Template.bind({});
InfoAlert.args = {
  status: 'info',
  appearance: 'filled',
  alert_title: 'Title',
  alert_description: 'Description'
};

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  status: 'success',
  appearance: 'filled',
  alert_title: 'Title',
  alert_description: 'Description'
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
  status: 'warning',
  appearance: 'filled',
  alert_title: 'Title',
  alert_description: 'Description'
};

export const DangerAlert = Template.bind({});
DangerAlert.args = {
  status: 'danger',
  appearance: 'filled',
  alert_title: 'Title',
  alert_description: 'Description'
};

export const OutlineInfoAlert = Template.bind({});
OutlineInfoAlert.args = {
  status: 'info',
  appearance: 'outline',
  alert_title: 'Title',
  alert_description: 'Description'
};
export const OutlineInfoAlertWithDescriptionInNewLine = Template.bind({});
OutlineInfoAlertWithDescriptionInNewLine.args = {
  status: 'info',
  comment_break_line: true,
  appearance: 'outline',
  alert_title: 'Title',
  alert_description: 'Description'
};

export const OutlineNeutralAlertWithDescriptionInNewLine = Template.bind({});
OutlineNeutralAlertWithDescriptionInNewLine.args = {
  status: 'neutral',
  comment_break_line: true,
  appearance: 'outline',
  alert_title: 'Title',
  alert_description: 'Description'
};

export const OutlineSuccessAlert = Template.bind({});
OutlineSuccessAlert.args = {
  status: 'success',
  appearance: 'outline',
  alert_title: 'Title',
  alert_description: 'Description'
};

export const OutlineWarningAlert = Template.bind({});
OutlineWarningAlert.args = {
  status: 'warning',
  appearance: 'outline',
  alert_title: 'Title',
  alert_description: 'Description'
};

export const OutlineDangerAlert = Template.bind({});
OutlineDangerAlert.args = {
  status: 'danger',
  appearance: 'outline',
  alert_title: 'Title',
  alert_description: 'Description'
};

export const AlertWithContentInfo = TemplateWithSlot.bind({});
AlertWithContentInfo.args = {
  status: 'info',
  appearance: 'filled',
  alert_title: 'Title',
  expandable: true,
  expanded: false,
  closeable: false,
  show_all_label: 'Show all',
  hide_all_label: 'Hide all'
};

export const AlertWithContentWarning = TemplateWithSlot.bind({});
AlertWithContentWarning.args = {
  status: 'warning',
  appearance: 'filled',
  alert_title: 'Title',
  expandable: true,
  expanded: false,
  closeable: false,
  show_all_label: 'Show all',
  hide_all_label: 'Hide all'
};

export const AlertWithContentDanger = TemplateWithSlot.bind({});
AlertWithContentDanger.args = {
  status: 'danger',
  appearance: 'filled',
  alert_title: 'Title',
  expandable: true,
  expanded: false,
  closeable: false,
  show_all_label: 'Show all',
  hide_all_label: 'Hide all'
};

export const AlertWithActionTitle = Template.bind({});
AlertWithActionTitle.args = {
  status: 'info',
  appearance: 'filled',
  alert_title: 'Title',
  alert_description: 'Description',
  alert_action_title: 'Action'
};
