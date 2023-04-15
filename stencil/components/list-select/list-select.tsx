import { Component, Element, Event, EventEmitter, h, Host, Listen, Prop, Watch } from '@stencil/core';
import { NstListSelectItem } from './item/list-select-item'

type ListSelectItemElement = Element & NstListSelectItem;

@Component({
  tag: 'nst-list-select',
})
export class NstListSelect {
  @Element() el: HTMLElement;

  /** List select name */
  @Prop() name: string;

  /** List select value */
  @Prop({ mutable: true }) value: string | number | string[];

  /** Is it disabled */
  @Prop() disabled: boolean;

  /** Emits on value change */
  @Event() selectedChanged: EventEmitter;

  @Listen('listSelectItemValueChange')
  onListSelectItemValueChange(event) {
    if (event.detail) {
      const items = this.el.querySelectorAll<ListSelectItemElement>('nst-list-select-item');
      for (let index = 0; index < items.length; index++) {
        const isSelected = items[index].value === event.detail;
        items[index].is_selected = isSelected;
        if (isSelected) {
          this.value = items[index].value;
          this.selectedChanged.emit(this.value);
        }
      }
    }
  }

  @Watch('value')
  watchValueHandler(newValue) {
    const items = this.el.querySelectorAll<ListSelectItemElement>('nst-list-select-item');
    for (let index = 0; index < items.length; index++) {
      items[index].is_selected = (newValue === items[index].value);
    }
  }

  componentWillLoad() {
    const items = this.el.querySelectorAll<ListSelectItemElement>('nst-list-select-item');
    for (let index = 0; index < items.length; index++) {
      items[index].name = this.name;
      items[index].disabled = items[index].disabled || this.disabled;
      items[index].slot = "nst-list-select-item";
    }
    this.watchValueHandler(this.value);
  }

  render() {
    return (
      <Host name={this.name}>
        <slot name="nst-list-select-item" />
      </Host>
    );
  }
}
