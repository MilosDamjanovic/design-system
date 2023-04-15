import {Component, h, Prop, Host, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'nst-radio',
  styleUrl: 'radio.scss'
})
export class NstRadio {
  /** Form element name */
  @Prop() name: string;

  /** Is it active */
  @Prop({ mutable: true }) checked: boolean;

  /** Radio value */
  @Prop() value: string | number | string[];

  /** Disabled option */
  @Prop() disabled: boolean;

  /** Emits on check */
  @Event() radioValueChange: EventEmitter;

  render() {
    return (
      <Host class={`${this.disabled ? 'disabled' : ''} ${this.checked ? 'checked' : ''}`}>
        <label>
          <input
            type="radio"
            class="native-input visually-hidden"
            name={this.name}
            value={this.value}
            checked={this.checked}
            disabled={this.disabled}
            onChange={() => this.radioValueChange.emit(this.value)}
            onClick={e => e.stopPropagation()}
          />
          <span class="outer-circle"></span>
          <span class="inner-circle"></span>
          <span class={`text ${this.disabled ? 'disabled' : ''}`}>
            <slot />
          </span>
        </label>
      </Host>
    );
  }
}
