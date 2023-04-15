# nst-select



<!-- Auto Generated Below -->


## Properties

| Property                  | Attribute                 | Description                                                           | Type                             | Default     |
| ------------------------- | ------------------------- | --------------------------------------------------------------------- | -------------------------------- | ----------- |
| `custom_class`            | `custom_class`            | Custom class to be attahced to element                                | `string`                         | `undefined` |
| `disabled`                | `disabled`                | Disabled state                                                        | `boolean`                        | `undefined` |
| `error`                   | `error`                   | Error state                                                           | `boolean`                        | `undefined` |
| `inline_input`            | `inline_input`            | Inline input variation                                                | `boolean`                        | `undefined` |
| `label`                   | `label`                   | Input label                                                           | `string`                         | `undefined` |
| `message`                 | `message`                 | Input message bellow element                                          | `string`                         | `undefined` |
| `multiple`                | `multiple`                | Enable multiple selection                                             | `boolean`                        | `undefined` |
| `multiple_selected_label` | `multiple_selected_label` | Label if more then 1 option is selected                               | `string`                         | `undefined` |
| `name`                    | `name`                    | Form element name                                                     | `string`                         | `undefined` |
| `not_breakable`           | `not_breakable`           | Not breakable items, will take more space if needed than input itself | `boolean`                        | `undefined` |
| `open`                    | `open`                    | Is it open                                                            | `boolean`                        | `false`     |
| `options`                 | --                        | Options configurations                                                | `OptionItem[]`                   | `[]`        |
| `placeholder`             | `placeholder`             | Input placeholder                                                     | `string`                         | `undefined` |
| `required`                | `required`                | Is it required form element                                           | `boolean`                        | `undefined` |
| `search_label`            | `search_label`            | Label for search bar                                                  | `string`                         | `undefined` |
| `searchable`              | `searchable`              | Enable search will add search bar                                     | `boolean`                        | `undefined` |
| `select_all`              | `select_all`              | Select all (check all) possibility                                    | `boolean`                        | `undefined` |
| `select_all_label`        | `select_all_label`        | Label for select all option                                           | `string`                         | `undefined` |
| `select_none`             | `select_none`             | Select none (clear) possibility                                       | `boolean`                        | `undefined` |
| `select_none_label`       | `select_none_label`       | Label for select none option                                          | `string`                         | `undefined` |
| `size`                    | `size`                    | Select element size                                                   | `"large" \| "medium" \| "small"` | `'medium'`  |
| `tooltip_label`           | `tooltip_label`           | Info tooltip label                                                    | `string`                         | `undefined` |
| `tooltip_position`        | `tooltip_position`        | Info tooltip position                                                 | `string`                         | `'top'`     |
| `use_parent_width`        | `use_parent_width`        | Align element width with parent                                       | `boolean`                        | `undefined` |
| `value`                   | `value`                   | Element value                                                         | `number \| string \| string[]`   | `undefined` |


## Events

| Event          | Description            | Type                   |
| -------------- | ---------------------- | ---------------------- |
| `beforeClose`  | Emits before close     | `CustomEvent<boolean>` |
| `beforeOpen`   | Emits before open      | `CustomEvent<boolean>` |
| `closed`       | Emits on close         | `CustomEvent<boolean>` |
| `opened`       | Emits on open          | `CustomEvent<boolean>` |
| `searchChange` | Emits on search change | `CustomEvent<string>`  |
| `valueChange`  | Emits on value change  | `CustomEvent<any>`     |


## Methods

### `select(newOption: string) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `setOptions(options: OptionItem[]) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `toggle(open?: boolean) => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
