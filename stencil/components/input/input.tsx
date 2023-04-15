import { Component, h, Prop, Event, EventEmitter, Host, Method, State } from '@stencil/core';
import { NstComponentSize } from '../../interfaces/variants';

export type NstInputType = 'text' | 'number' | 'email' | 'password' | 'tel' | 'url';

@Component({
  tag: 'nst-input',
  styleUrl: 'input.scss'
})
export class NstInput {
  /** HTML Input type */
  @Prop() type: NstInputType = 'text';

  /** Input size */
  @Prop() size: NstComponentSize = 'medium';

  /** Inline input variations */
  @Prop() inline_input: boolean;

  /** Input label */
  @Prop() label: string;

  /** Input placeholder */
  @Prop() placeholder: string;

  /** Input left icon name (material) */
  @Prop() icon_left: string;

  /** Input right icon name (material) */
  @Prop() icon_right: string;

  /** Input prefix (text) up to 3 chars */
  @Prop() input_prefix: string;

  /** Input suffix (text) up to 3 chars */
  @Prop() input_suffix: string;

  /** Icons are clickable */
  @Prop() clickable_icon: boolean;

  /** Message bellow input */
  @Prop() message: string;

  /** Custom class to be attached to the input */
  @Prop() custom_class: string;

  /** Form element name */
  @Prop() name: string;

  /** Disabled input */
  @Prop() disabled: boolean;

  /** Input with error state */
  @Prop() error: boolean;

  /** Is it required */
  @Prop() required: boolean;

  /** Is it read-only */
  @Prop() readonly_input: boolean;

  /** Input value */
  @Prop({ mutable: true }) value: string;

  /** Info tooltip label */
  @Prop() tooltip_label: string;

  /** Info tooltip position */
  @Prop() tooltip_position: string = 'top';

  /** Emits on change */
  @Event() changeInput: EventEmitter;

  /** Emits on keyup */
  @Event() keyupInput: EventEmitter;

  /** Emits on keydown */
  @Event() keydownInput: EventEmitter;

  /** Emits on keypress */
  @Event() keypressInput: EventEmitter;

  /** Emits on input */
  @Event() inputEventInput: EventEmitter;

  /** Emits on prefix click */
  @Event() prefixClick: EventEmitter;

  /** Emits on suffix click */
  @Event() suffixClick: EventEmitter;

  @State() showPassword = false;

  componentWillLoad() {
    if (this.input_prefix) {
      this.icon_left = null;
    }
    if (this.input_suffix) {
      this.icon_right = null;
    }
  }

  get inputWrapClass(): string {
    let classList =
      'nst-input-wrapper nst-position-relative nst-d-flex nst-justify-content-between nst-align-items-center';
    if (this.icon_left || this.input_prefix) {
      classList += ' icon-left';
    }
    if (this.icon_right || this.input_suffix || this.type === 'password') {
      classList += ' icon-right';
    }
    if (this.input_prefix?.length > 2) {
      classList += ' with-long-prefix';
    }
    if (this.input_suffix?.length > 2) {
      classList += ' with-long-suffix';
    }
    return classList;
  }

  get hostClass(): string {
    let classList = 'nst-form-input';
    if (this.inline_input) {
      classList += ' inline';
    }
    if (this.size === 'small') {
      classList += ' size-small';
    }
    if (this.disabled) {
      classList += ' disabled';
    }
    return classList;
  }

  get inputClasses(): string {
    let classList = `form-input ${this.custom_class ?? ''}`;
    classList += ' ';
    if (this.error) {
      classList += ' error';
    }
    if (this.inline_input) {
      classList += ' inline';
    }
    if (this.size === 'small') {
      classList += ' size-small';
    }
    return classList;
  }

  keyup(event): void {
    this.value = event.target.value;
    this.keyupInput.emit(this.value);
  }

  keydown(): void {
    this.keydownInput.emit(this.value);
  }

  keypress(): void {
    this.keypressInput.emit(this.value);
  }

  input(event): void {
    this.value = event.target.value;
    this.inputEventInput.emit(this.value);
  }

  change(event): void {
    if (this.type === 'number') {
      this.value = event.target.value;
    }
    this.changeInput.emit(this.value);
  }

  @Method()
  async setValue(value: string) {
    this.value = value;
  }

  clickOnPrefix(event) {
    event.stopPropagation();
    this.prefixClick.emit(event);
  }

  clickOnSuffix(event) {
    this.suffixClick.emit(event);
    event.stopPropagation();
    if (this.type === 'password') {
      this.showPassword = !this.showPassword;
    }
  }

  render() {
    const Label = () =>
      this.label ? (
        <label htmlFor={this.name}>
          {this.label}
          {this.required ? <span class={this.error ? 'required-error required' : 'required'}>*</span> : null}
        </label>
      ) : null;

    const Message = () => <span class={this.error ? 'error message' : 'message'}>{this.message ?? ''}</span>;
    const clickable = this.clickable_icon ? 'clickable' : '';
    const IconLeft = () =>
      this.icon_left ? (
        <span class={`icon icon-left material-icons ${clickable}`} onClick={event => this.clickOnPrefix(event)}>
          {this.icon_left}
        </span>
      ) : null;

    let IconRight = () =>
      this.icon_right ? (
        <span class={`icon icon-right material-icons ${clickable}`} onClick={event => this.clickOnSuffix(event)}>
          {this.icon_right}
        </span>
      ) : null;

    if (this.type === 'password') {
      IconRight = () => (
        <span class="icon icon-right clickable material-icons" onClick={event => this.clickOnSuffix(event)}>
          {this.showPassword ? 'visibility' : 'visibility_off'}
        </span>
      );
    }

    const Prefix = () =>
      this.input_prefix ? (
        <span class="icon icon-left prefix" onClick={event => this.clickOnPrefix(event)}>
          {this.input_prefix.substring(0, 3)}
        </span>
      ) : null;

    const Suffix = () =>
      this.input_suffix ? (
        <span class="icon icon-right suffix" onClick={event => this.clickOnSuffix(event)}>
          {this.input_suffix.substring(0, 3)}
        </span>
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
    
    return (
      <Host class={this.hostClass} name={this.name}>
        <div class="nst-d-flex nst-align-items-center">
          <Label />
          <Tooltip />
        </div>
        <div class={this.inputWrapClass}>
          <IconLeft />
          <Prefix />
          <input
            class={this.inputClasses}
            disabled={this.disabled}
            type={this.showPassword ? 'text' : this.type}
            placeholder={this.placeholder}
            value={this.value}
            readOnly={this.readonly_input}
            onKeyUp={event => this.keyup(event)}
            onKeyPress={_ => this.keypress()}
            onKeyDown={_ => this.keydown()}
            onChange={event => this.change(event)}
            onInput={event => this.input(event)}
          />
          <IconRight />
          <Suffix />
        </div>
        <Message />
      </Host>
    );
  }
}
