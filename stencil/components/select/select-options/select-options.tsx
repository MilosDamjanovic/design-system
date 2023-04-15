import { Component, Element, Event, EventEmitter, h, Host, Method, Prop } from '@stencil/core';
import { NstComponentSize } from '../../../interfaces/variants';
import { OptionItem } from '../option-item';

@Component({
  tag: 'nst-select-options',
  styleUrl: 'select-options.scss'
})
export class NstSelectOptions {
  @Element() el: HTMLElement;

  /** Input label */
  @Prop() label: string;

  /** Input placeholder */
  @Prop() placeholder: string;

  /** Inline input variation */
  @Prop() inline_input: boolean;

  /** Input size */
  @Prop({ mutable: true }) size: NstComponentSize = 'medium';

  /** Is it required */
  @Prop() required: boolean;

  /** Enable search will add search bar */
  @Prop() searchable: boolean;

  /** Enable multiple selection */
  @Prop() multiple: boolean;

  /** Select none (clear) possibility */
  @Prop() select_none: boolean;

  /** Select all (check all) possibility */
  @Prop() select_all: boolean;

  /** Not breakable items, will take more space if needed than input itself */
  @Prop() not_breakable: boolean;

  /** Label for select all option */
  @Prop() select_all_label: string;

  /** Label for select none option */
  @Prop() select_none_label: string;

  /** Label for search bar */
  @Prop() search_label: string;

  /** Label if more then 1 option is selected */
  @Prop() multiple_selected_label: string;

  /** Options configurations */
  @Prop() options: OptionItem[] = [];

  /** Select element value */
  @Prop({ mutable: true }) value: string | number | string[];

  /** Emits on value change */
  @Event() dropdownValueChange: EventEmitter<any>;

  /** Emits on dropdown open change */
  @Event() dropdownOpenChange: EventEmitter<boolean>;

  /** Emits on search value change */
  @Event() dropdownSearchChange: EventEmitter<string>;

  private get hostClasses() {
    let classes = 'options-menu';
    if (this.size === 'small') {
      classes = `${classes} size-small`;
    }
    if (this.inline_input) {
      classes = `${classes} inline`;
    }
    return classes;
  }

  private toggleAll() {
    this.value = this.value ?? [];
    if ((this.value as string[]).length === this.options.length) {
      this.value = [];
    } else {
      this.value = this.options.filter(option => !(option.disabled ?? false)).map(option => option.value);
    }
    this.dropdownValueChange.emit(this.value);
    return this.value;
  }

  @Method()
  public async select(newOption: string): Promise<string | number | string[]> {
    if (newOption == null || newOption.length === 0) {
      return this.value;
    }
    if (this.multiple) {
      this.value = (this.value || []) as string[];
      const index = this.value.indexOf(newOption);
      if (index > -1) {
        this.value = [...this.value.filter(option => option !== newOption)];
      } else {
        this.value = [...this.value, newOption];
      }
    } else {
      this.value = newOption;
    }
    this.dropdownValueChange.emit(this.value);
    if (!this.multiple) {
      this.dropdownOpenChange.emit(false);
    }
    return this.value;
  }

  private async clear(): Promise<string | number | string[]> {
    if (this.multiple) {
      this.value = [];
    } else {
      this.value = null;
    }
    this.dropdownValueChange.emit(this.value);
    this.dropdownOpenChange.emit(false);
    return this.value;
  }

  render(): HTMLElement {
    const Items = () =>
      (this.options ?? []).map(option => (
        <nst-select-option
          option={option}
          multiple={this.multiple}
          not_breakable={this.not_breakable}
          disabled={option.disabled ?? false}
          checked={(Array.isArray(this.value) && this.value.indexOf(option.value) > -1) || this.value === option.value}
          onSelectOption={event => this.select(event.detail)}
        />
      ));

    const SelectAll = () =>
      this.multiple && this.select_all && !this.searchable ? (
        <nst-select-option
          bordered
          option={{
            label: this.select_all_label,
            value: null
          }}
          checked={
            ((this.value ?? []) as string[]).filter(selectedOption =>
              this.options.find(option => selectedOption === option.value)
            ).length === this.options.filter(option => !(option.disabled ?? false)).length
          }
          indeterminate={((this.value ?? []) as string[]).length > 0}
          multiple={this.multiple}
          onSelectOption={() => this.toggleAll()}
        />
      ) : null;

    const SelectNone = () =>
      this.select_none && !this.multiple ? (
        <nst-select-option
          bordered
          option={{
            label: this.select_none_label,
            value: null
          }}
          multiple={this.multiple}
          onSelectOption={() => this.clear()}
        />
      ) : null;

    const Search = () =>
      this.searchable ? (
        <div class="search-box">
          <span class="search-icon icon-left material-icons">search</span>
          <input
            type="text"
            class="search-input"
            placeholder={this.search_label}
            onKeyUp={event => this.dropdownSearchChange.emit((event.target as HTMLInputElement).value)}
          />
        </div>
      ) : null;

    const MobileHeader = () => (
      <div class="mobile-header">
        <span class="material-icons back-icon" onClick={() => this.dropdownOpenChange.emit(false)}>
          chevron_left
        </span>
        <span class="header-label">
          {this.label ?? this.placeholder} {this.required ? '*' : null}
        </span>
      </div>
    );

    return (
      <Host class={this.hostClasses}>
        <div class="options-scrollable-menu">
          <MobileHeader />
          <Search />
          <SelectAll />
          <SelectNone />
          <Items />
        </div>
      </Host>
    );
  }
}
