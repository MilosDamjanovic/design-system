# nst-input



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute          | Description                              | Type                                                            | Default     |
| ------------------ | ------------------ | ---------------------------------------- | --------------------------------------------------------------- | ----------- |
| `clickable_icon`   | `clickable_icon`   | Icons are clickable                      | `boolean`                                                       | `undefined` |
| `custom_class`     | `custom_class`     | Custom class to be attached to the input | `string`                                                        | `undefined` |
| `disabled`         | `disabled`         | Disabled input                           | `boolean`                                                       | `undefined` |
| `error`            | `error`            | Input with error state                   | `boolean`                                                       | `undefined` |
| `icon_left`        | `icon_left`        | Input left icon name (material)          | `string`                                                        | `undefined` |
| `icon_right`       | `icon_right`       | Input right icon name (material)         | `string`                                                        | `undefined` |
| `inline_input`     | `inline_input`     | Inline input variations                  | `boolean`                                                       | `undefined` |
| `input_prefix`     | `input_prefix`     | Input prefix (text) up to 3 chars        | `string`                                                        | `undefined` |
| `input_suffix`     | `input_suffix`     | Input suffix (text) up to 3 chars        | `string`                                                        | `undefined` |
| `label`            | `label`            | Input label                              | `string`                                                        | `undefined` |
| `message`          | `message`          | Message bellow input                     | `string`                                                        | `undefined` |
| `name`             | `name`             | Form element name                        | `string`                                                        | `undefined` |
| `placeholder`      | `placeholder`      | Input placeholder                        | `string`                                                        | `undefined` |
| `readonly_input`   | `readonly_input`   | Is it read-only                          | `boolean`                                                       | `undefined` |
| `required`         | `required`         | Is it required                           | `boolean`                                                       | `undefined` |
| `size`             | `size`             | Input size                               | `"large" \| "medium" \| "small"`                                | `'medium'`  |
| `tooltip_label`    | `tooltip_label`    | Info tooltip label                       | `string`                                                        | `undefined` |
| `tooltip_position` | `tooltip_position` | Info tooltip position                    | `string`                                                        | `'top'`     |
| `type`             | `type`             | HTML Input type                          | `"email" \| "number" \| "password" \| "tel" \| "text" \| "url"` | `'text'`    |
| `value`            | `value`            | Input value                              | `string`                                                        | `undefined` |


## Events

| Event             | Description           | Type               |
| ----------------- | --------------------- | ------------------ |
| `changeInput`     | Emits on change       | `CustomEvent<any>` |
| `inputEventInput` | Emits on input        | `CustomEvent<any>` |
| `keydownInput`    | Emits on keydown      | `CustomEvent<any>` |
| `keypressInput`   | Emits on keypress     | `CustomEvent<any>` |
| `keyupInput`      | Emits on keyup        | `CustomEvent<any>` |
| `prefixClick`     | Emits on prefix click | `CustomEvent<any>` |
| `suffixClick`     | Emits on suffix click | `CustomEvent<any>` |


## Methods

### `setValue(value: string) => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
