import { Component, h, Event, EventEmitter, Prop, Host, Element } from '@stencil/core';

@Component({
  tag: 'nst-list-select-item',
  styleUrl: 'list-select-item.scss',
})
export class NstListSelectItem {
  @Element() el: HTMLElement;

  /** Form element name */
  @Prop() name: string;

  /** Main title of item */
  @Prop() item_title: string;

  /** Description of item */
  @Prop() description: string;

  /** Is it active */
  @Prop({ mutable: true }) is_selected: boolean = false;

  /** List select item value */
  @Prop() value: string | number | string[];

  /** Disabled option */
  @Prop() disabled: boolean;

  /** If Item has checkbox */
  @Prop({ mutable: true }) has_checkbox: boolean = false;

  /** Emits on select */
  @Event() listSelectItemValueChange: EventEmitter;

  private hasChipSlot: boolean;
  private hasIconSlot: boolean;

  componentWillLoad() {
    this.hasChipSlot = !!this.el.querySelector('[slot="chip"]');
    this.hasIconSlot = !!this.el.querySelector('[slot="icon"]');

    if (this.hasChipSlot) {
      this.has_checkbox = false;
    }
  }

  toggleSelected (e, isSelected: boolean) {
    e.stopPropagation();
    if (!this.disabled) {
      this.is_selected = isSelected;
      this.listSelectItemValueChange.emit(this.value);
    }
  }

  get classes(): string {
    let classes = 'item-body nst-d-flex nst-justify-content-between';
    if (this.is_selected) {
      classes += ' selected';
    }
    if (this.disabled) {
      classes += ' disabled';
    }
    return classes;
  }

  get textClass(): string {
    let classes = 'text';

    if (!this.description && !this.has_checkbox && this.hasChipSlot) {
      classes += ' single-title';
    }

    if (this.hasIconSlot) {
      classes += ' has-icon';
    }

    return classes;
  }

  get checkboxClass(): string {
    let classes = 'checkbox';

    if (!this.description) {
      classes += ' single-title';
    }

    return classes;
  }

  render() {
    return <Host
        name={this.name}
        class={this.classes}
        tabIndex={this.disabled ? undefined : 0}
        onClick={(e) => this.toggleSelected(e, !this.is_selected)}
    >
      {
        this.hasIconSlot ?
          <div class="icon-wrapper">
            <slot name="icon" />
          </div>
          :
          null
      }
      <div class={this.textClass}>
        <div class="title">
          { this.item_title }
        </div>
        {
          this.description ?
            <div class="description">
              {this.description}
            </div>
            :
            null
        }
      </div>
      {
        this.has_checkbox ?
          <div class={this.checkboxClass}>
            <nst-checkbox
              checked={this.is_selected}
              onCheckedChange={ev => this.toggleSelected(ev, ev.detail)}
              disabled={this.disabled}
            />
          </div>
          :
          null
      }
      {
        this.hasChipSlot ?
          <div class="chip">
            <slot name="chip" />
          </div>
          :
          null
      }
    </Host>
  }
}
