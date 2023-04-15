import { Component, Element, Event, EventEmitter, h, Host, Listen, Method, Prop, State, Watch } from '@stencil/core';
import { createPopper, Instance } from '@popperjs/core';
import { OptionItem } from './option-item';
import { cleanHTML, clearTagsForHtml } from '../../helpers/sanitize-helper';
import { NstComponentSize } from '../../interfaces/variants';
import { NstSelectOptions } from './select-options/select-options';

const DROPDOWN_HOLDER_ID = 'nst-global-dropdown-holder';
@Component({
  tag: 'nst-select',
  styleUrl: 'select.scss'
})
export class NstSelect {
  @Element() el: HTMLElement;
  @State() popperInstance: Instance;

  /** Select element size */
  @Prop({ mutable: true }) size: NstComponentSize = 'medium';

  /** Inline input variation */
  @Prop() inline_input: boolean;

  /** Input label */
  @Prop() label: string;

  /** Input placeholder */
  @Prop() placeholder: string;

  /** Info tooltip label */
  @Prop() tooltip_label: string;

  /** Info tooltip position */
  @Prop() tooltip_position: string = 'top';

  /** Input message bellow element */
  @Prop() message: string;

  /** Custom class to be attahced to element */
  @Prop() custom_class: string;

  /** Form element name */
  @Prop() name: string;

  /** Disabled state */
  @Prop() disabled: boolean;

  /** Error state */
  @Prop() error: boolean;

  /** Is it required form element */
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

  /** Align element width with parent */
  @Prop() use_parent_width: boolean;

  /** Element value */
  @Prop({ mutable: true }) value: string | number | string[];

  /** Is it open */
  @Prop({ mutable: true }) open: boolean = false;

  /** Emits on open */
  @Event() opened: EventEmitter<boolean>;

  /** Emits on close */
  @Event() closed: EventEmitter<boolean>;

  /** Emits before open */
  @Event() beforeOpen: EventEmitter<boolean>;

  /** Emits before close */
  @Event() beforeClose: EventEmitter<boolean>;

  /** Emits on value change */
  @Event() valueChange: EventEmitter<any>;

  /** Emits on search change */
  @Event() searchChange: EventEmitter<string>;

  private listeners: { [key: string]: any } = {};
  private searchTerm = '';

  @Method()
  public async toggle(open?: boolean) {
    if (this.disabled) {
      this.open = false;
    }
    if (open != null) {
      this.open = open;
    } else {
      this.open = !this.open;
    }
    if (this.open) {
      this.showDropdown();
    } else {
      this.hideDropdown();
    }
  }

  @Method()
  public async select(newOption: string) {
    document.querySelector<any>('.options-menu').select(newOption);
  }

  @Method()
  public async setOptions(options: OptionItem[]) {
    this.options = options;
  }

  @Listen('click', { target: 'window' })
  handleOutsideClick(event) {
    if (this.open === false || window.matchMedia('only screen and (max-width: 767px)').matches) {
      return;
    }

    if (
      !this.el.querySelector('.nst-input-wrapper').contains(event.target) &&
      !document.querySelector('.options-menu').contains(event.target)
    ) {
      this.toggle(false);
    }
  }

  @Watch('options')
  updateOptions() {
    if (this.open) {
      let holder = document.querySelector<Element & NstSelectOptions>(`#${DROPDOWN_HOLDER_ID} nst-select-options`);
      holder.options = this.options;
    }
  }

  handleDropdownToggle(event: CustomEvent) {
    this.toggle(event.detail);
  }

  handleDropdownValueChange(event: CustomEvent) {
    this.value = event.detail;
    this.valueChange.emit(this.value);
  }

  handleDropdownSearchChange(event: CustomEvent) {
    this.searchTerm = event.detail;
    this.searchChange.emit(event.detail);
  }

  async componentDidLoad(): Promise<void> {
    this.createDropdownHolder();
    if (this.open) {
      this.toggle(this.open);
    }
  }

  disconnectedCallback() {
    if (this.open) {
      this.toggle(false);
    }
  }

  private get hostClass(): string {
    let classList = 'nst-select nst-form-input';
    if (this.inline_input) {
      classList += ' inline';
    }
    if (this.size === 'small') {
      classList += ' size-small';
    }
    if (this.disabled) {
      classList += ' disabled';
    }
    if (this.open) {
      classList += ' dropdown-open';
    }
    return classList;
  }

  private get inputWrapClass(): string {
    return 'nst-input-wrapper icon-right';
  }

  private get inputClasses(): string {
    let classList = `form-input ${this.custom_class ?? ''}`;
    if (this.error) {
      classList += ' error';
    }
    if (this.inline_input) {
      classList += ' inline';
    }
    if (this.size === 'small') {
      classList += ' size-small';
    }
    if (this.isEmpty) {
      classList += ' empty-input';
    }
    return classList;
  }

  private get optionsEl(): HTMLElement {
    return document.querySelector(`#${DROPDOWN_HOLDER_ID} nst-select-options`);
  }

  private createDropdownHolder() {
    const ionModals = document.querySelectorAll('ion-modal');
    let ionEl = ionModals.length ? ionModals[ionModals.length - 1] : null;
    if (ionEl == null && window.matchMedia('only screen and (max-width: 767px)').matches) {
      // ionEl = document.querySelector('ion-app');
    }
    let holder = (ionEl ?? document).querySelector(`#${DROPDOWN_HOLDER_ID}`);
    if (holder == null) {
      document.querySelector(`#${DROPDOWN_HOLDER_ID}`)?.remove();
      const div = document.createElement('div');
      div.id = DROPDOWN_HOLDER_ID;
      div.innerHTML = '<nst-select-options></nst-select-options>';
      (ionEl ?? document.body).appendChild(div);
    }
  }

  private assignAttributesToDropdown() {
    let holder = document.querySelector<Element & NstSelectOptions>(`#${DROPDOWN_HOLDER_ID} nst-select-options`);
    holder.placeholder = this.placeholder;
    holder.label = this.label;
    holder.required = this.required;
    holder.searchable = this.searchable;
    holder.multiple = this.multiple;
    holder.select_none = this.select_none;
    holder.select_all = this.select_all;
    holder.not_breakable = this.not_breakable;
    holder.select_all_label = this.select_all_label;
    holder.select_none_label = this.select_none_label;
    holder.search_label = this.search_label;
    holder.multiple_selected_label = this.multiple_selected_label;
    holder.options = this.options;
    holder.value = this.value;
    holder.inline_input = this.inline_input;
    holder.size = this.size;
  }

  private onKeyDown(event: KeyboardEvent): void {
    const openEvents = ['Down', 'ArrowDown', 'Up', 'ArrowUp'];
    if (openEvents.indexOf(event.key) > -1) {
      event.preventDefault();
      this.toggle();
    }
  }

  private showDropdown(): void {
    if (!this.popperInstance) {
      this.popperInstance = this.initPoperInstance();
    }
    this.beforeOpen.emit(true);
    this.assignAttributesToDropdown();
    this.optionsEl?.setAttribute('data-show', '');
    this.popperInstance?.setOptions(options => ({
      ...options,
      modifiers: [...options.modifiers, { name: 'eventListeners', enabled: true }]
    }));
    this.popperInstance?.update();
    this.opened.emit(true);
    if (this.searchable) {
      setTimeout(() => {
        document.querySelector<HTMLElement>('.search-box input')?.focus({
          preventScroll: true
        });
      });
    }
    document.body.classList.add('nst-select-open');
    this.addListeners();
  }

  private hideDropdown(): void {
    if (this.searchTerm.length > 0) {
      this.searchTerm = '';
      document.querySelector<HTMLInputElement>('nst-select-options .search-input').value = '';
      this.searchChange.emit(this.searchTerm);
    }
    document.body.classList.remove('nst-select-open');
    this.removeListeners();
    this.beforeClose.emit(true);
    this.optionsEl?.removeAttribute('data-show');
    this.popperInstance?.setOptions(options => ({
      ...options,
      modifiers: [...options.modifiers, { name: 'eventListeners', enabled: false }]
    }));
    this.popperInstance?.update();
    this.closed.emit(true);
  }

  private addListeners() {
    const listenersMap = {
      dropdownOpenChange: this.handleDropdownToggle,
      dropdownValueChange: this.handleDropdownValueChange,
      dropdownSearchChange: this.handleDropdownSearchChange
    };
    for (const prop in listenersMap) {
      const fn = listenersMap[prop].bind(this);
      document.addEventListener(prop, fn);
      this.listeners[prop] = fn;
    }
  }

  private removeListeners() {
    for (const prop in this.listeners) {
      document.removeEventListener(prop, this.listeners[prop]);
    }
  }

  private async onInputClick() {
    for (let index = 0; index < document.querySelectorAll('nst-select').length; index++) {
      const selectEl = document.querySelectorAll('nst-select')[index] as unknown as NstSelect & HTMLElement;
      if (selectEl.open && selectEl != this.el) {
        await selectEl.toggle(false);
      }
    }

    this.toggle(!this.open);
  }

  private initPoperInstance(): Instance {
    const sameWidthCals = ({ state }) => {
      if (window.matchMedia('only screen and (max-width: 767px)').matches) {
        return;
      }

      const calculatedWidth = this.use_parent_width
        ? `${this.el.parentElement.offsetWidth}px`
        : `${state.rects.reference.width}px`;
      if (this.not_breakable) {
        state.styles.popper.width = 'unset';
        state.styles.popper.minWidth = calculatedWidth;
      } else {
        state.styles.popper.width = calculatedWidth;
      }
    };
    return createPopper(this.el.querySelector('.nst-input-wrapper'), this.optionsEl, {
      placement: 'bottom-start',
      modifiers: [
        {
          name: 'sameWidth',
          enabled: true,
          fn: sameWidthCals,
          phase: 'beforeWrite',
          requires: ['computeStyles']
        },
        {
          name: 'offset',
          options: {
            offset: [0, 12]
          }
        }
      ]
    });
  }

  private get valueFormatted(): string {
    if (this.options == null) {
      return '';
    }
    if (Array.isArray(this.value) && this.value.length > 1) {
      // Multiple selected
      return `${this.multiple_selected_label} (${this.value.length})`;
    }
    const value = Array.isArray(this.value) ? this.value[0] : this.value;
    const results = this.options.filter(option => option.value === value);
    if (results.length === 0) {
      return '';
    }

    // remove potantaly dangerous script injection
    const safeLabel = cleanHTML(results[0].label);

    // clear possible html code injection (bold, italic...)
    const sanitizedLabel = clearTagsForHtml(safeLabel);

    const labelWithIcon = `<div class="label-with-icon">
                            <span class="icon-wrapper">${results[0].icon}</span>
                            <span class="label-wrapper">${sanitizedLabel}</span>
                          </div>`;
    return results[0].selectedLabel ?? (results[0].icon ? labelWithIcon : sanitizedLabel);
  }

  private get isEmpty(): boolean {
    return this.value == null || this.value === '' || (Array.isArray(this.value) && this.value.length === 0);
  }

  get sanitizeHtml(): string {
    return this.isEmpty ? this.placeholder : this.valueFormatted;
  }

  render(): HTMLElement {
    const Label = () =>
      this.label ? (
        <label htmlFor={this.name}>
          {this.label}
          {this.required ? <span class={this.error ? 'required-error required' : 'required'}>*</span> : null}
        </label>
      ) : null;

    const Tooltip = () =>
      this.tooltip_label ? (
        <div
          class="tooltip-icon"
          data-tooltip={this.tooltip_label}
          data-tooltip-position={this.tooltip_position}>
          <span class="material-icons">info</span>
        </div>
      ) : null;

    const Message = () => <span class={this.error ? 'error message' : 'message'}>{this.message ?? ''}</span>;

    const DDIcon = () => <span class="icon icon-right material-icons dropdown-icon">expand_more</span>;

    return (
      <Host class={this.hostClass} name={this.name}>
        <div class="nst-d-flex nst-align-items-center">
          <Label />
          <Tooltip />
        </div>
        <div class={this.inputWrapClass}>
          <div
            onClick={_ => this.onInputClick()}
            onKeyDown={event => this.onKeyDown(event)}
            tabIndex={this.disabled ? undefined : 0}
            class={this.inputClasses}
            innerHTML={this.sanitizeHtml}
          ></div>
          <DDIcon />
        </div>
        <Message />
      </Host>
    );
  }
}
