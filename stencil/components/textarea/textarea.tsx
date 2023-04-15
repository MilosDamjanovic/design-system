import { Component, h, Prop, Event, EventEmitter, Host } from '@stencil/core';

export type  NstTextareaSize = 'small' | 'medium';

@Component({
  tag: 'nst-textarea',
  styleUrl: 'textarea.scss'
})
export class  NstTextarea {
  /** Form element size  */
  @Prop() size:  NstTextareaSize = 'medium';

  /** Form element label  */
  @Prop() label: string;

  /** Form element placeholder  */
  @Prop() placeholder: string;

  /** Form element value  */
  @Prop() value: string;

  /** Left icon name (material icons)  */
  @Prop() icon_left: string;

  /** Form element message - bellow input  */
  @Prop() message: string;

  /** Custom class to be attached to the form element  */
  @Prop() custom_class: string;

  /** Form element name */
  @Prop() name: string;

  /** Info tooltip label */
  @Prop() tooltip_label: string;

  /** Info tooltip position */
  @Prop() tooltip_position: string = 'top';

  /** Form element disabled state */
  @Prop() disabled: boolean;

  /** Inline input variation  */
  @Prop() inline_input: boolean;

  /** Form element has error state */
  @Prop() error: boolean;

  /** Form element is required */
  @Prop() required: boolean;

  /** Textarea rows attribute */
  @Prop() rows: number = 2;

  /** Emits on change */
  @Event() changeInput: EventEmitter;

  /** Emits on keyup */
  @Event() keyupInput: EventEmitter;

  /** Emits on keydown */
  @Event() keydownInput: EventEmitter;

  /** Emits on keypress */
  @Event() keypressInput: EventEmitter;

  get inputWrapClass(): string {
    let classList = 'w-100  nst-position-relative  nst-d-flex  nst-justify-content-between  nst-align-items-center';
    if (this.icon_left) {
      classList += ' icon-left';
    }
    if (this.inline_input) {
      classList += ' inline';
    }
    return classList;
  }

  get hostClass(): string {
    let classList = ' nst-form-input';
    if (this.size === 'small') {
      classList += ' size-small';
    }
    if (this.disabled) {
      classList += ' disabled';
    }
    if (this.inline_input) {
      classList += ' inline-textarea';
    }
    return classList;
  }

  get inputClasses(): string {
    let classList = 'form-input';

    if (this.custom_class) {
      classList += ` ${this.custom_class}`;
    }
    if (this.error) {
      classList += ' error';
    }
    if (this.inline_input) {
      classList += ' inline';
    }
    if (this.size === 'small') {
      classList += ' textarea-small';
    }
    return classList;
  }

  onInput(event): void {
    this.value = event.target.value;
    this.changeInput.emit(this.value);
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

    const IconLeft = () =>
      this.icon_left ? <span class="icon icon-left material-icons">{this.icon_left}</span> : null;

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
        <div class=" nst-d-flex  nst-align-items-center">
          <Label />
          <Tooltip />
        </div>
        <div class={this.inputWrapClass}>
          <IconLeft />
          <textarea
            rows={this.rows}
            class={this.inputClasses}
            name={this.name}
            disabled={this.disabled}
            placeholder={this.placeholder}
            value={this.value}
            onKeyUp={_ => this.keyupInput.emit(this.value)}
            onKeyPress={_ => this.keypressInput.emit(this.value)}
            onKeyDown={_ => this.keydownInput.emit(this.value)}
            onInput={event => this.onInput(event)}
          ></textarea>
        </div>
        <Message />
      </Host>
    );
  }
}
