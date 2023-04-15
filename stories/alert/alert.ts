import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const Alert = ({
  alert_title,
  alert_description,
  alert_action_title,
  appearance,
  status,
  closeable,
  has_icon,
  expanded,
  comment_break_line = false
}) => {
  return html`
    <nst-alert
      alert_title=${alert_title}
      alert_description=${alert_description}
      alert_action_title=${alert_action_title}
      appearance=${appearance}
      status=${status}
      closeable=${closeable}
      has_icon=${has_icon}
      comment_break_line=${comment_break_line}
      expanded=${expanded}
    >
    </nst-alert>
  `;
};

export const AlertWithSlot = ({
  alert_title,
  alert_description,
  alert_action_title,
  appearance,
  status,
  closeable,
  has_icon,
  expandable,
  expanded,
  show_all_label,
  hide_all_label,
  comment_break_line
}) => {
  return html`
    <nst-alert
      alert_title=${alert_title}
      alert_description=${alert_description}
      appearance=${appearance}
      status=${status}
      closeable=${closeable}
      has_icon=${has_icon}
      expandable=${expandable}
      expanded=${expanded}
      comment_break_line=${comment_break_line}
      alert_action_title=${alert_action_title}
      show_all_label=${show_all_label}
      hide_all_label=${hide_all_label}
    >
      <h3>This is a Slot</h3>
      <p>So you can actually add content inside the Alert</p>
    </nst-alert>
  `;
};
