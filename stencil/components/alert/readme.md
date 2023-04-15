# nst-alert



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute            | Description                                            | Type                                                        | Default      |
| -------------------- | -------------------- | ------------------------------------------------------ | ----------------------------------------------------------- | ------------ |
| `alert_action_title` | `alert_action_title` | Alert action title                                     | `string`                                                    | `undefined`  |
| `alert_description`  | `alert_description`  | Description of alert                                   | `string`                                                    | `undefined`  |
| `alert_title`        | `alert_title`        | Title of alert                                         | `string`                                                    | `undefined`  |
| `appearance`         | `appearance`         | Alert appearance                                       | `"filled" \| "ghost" \| "outline"`                          | `'filled'`   |
| `closeable`          | `closeable`          | Show close action button or not                        | `boolean`                                                   | `true`       |
| `comment_break_line` | `comment_break_line` | Add break line between title and description           | `boolean`                                                   | `false`      |
| `expandable`         | `expandable`         | Display show more button and make the class expandable | `boolean`                                                   | `false`      |
| `expanded`           | `expanded`           | Is expanded                                            | `boolean`                                                   | `true`       |
| `has_icon`           | `has_icon`           | Show icon or not                                       | `boolean`                                                   | `true`       |
| `hide_more_label`    | `hide_more_label`    | Label for show less button                             | `string`                                                    | `'Hide all'` |
| `show_more_label`    | `show_more_label`    | Label for show more button                             | `string`                                                    | `'Show all'` |
| `status`             | `status`             | Alert status - indicator of icon and title             | `"danger" \| "info" \| "neutral" \| "success" \| "warning"` | `'info'`     |


## Events

| Event              | Description             | Type                |
| ------------------ | ----------------------- | ------------------- |
| `alertActionClick` | Event for action click  | `CustomEvent<void>` |
| `dismissClick`     | Event for dismiss click | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
