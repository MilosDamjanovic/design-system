import {Component, h, Prop, Host, Element, Listen, Event, EventEmitter, Watch} from '@stencil/core';
import { NstRadio } from './radio';

type RadioElement = Element & NstRadio;

@Component({
  tag: 'nst-radio-group',
  styleUrl: 'radio.scss'
})
export class NstRadioGroup {
  @Element() el: HTMLElement;

  /** Radio group name */
  @Prop() name: string;

  /** Radio group value */
  @Prop({ mutable: true }) value: string | number | string[];

  /** Radio group name */
  @Prop() disabled: boolean;

  /** Emits on value change */
  @Event() valueChanged: EventEmitter<string | number | string[]>;

  @Listen('radioValueChange')
  onRadioValueChange(event) {
    if (event.detail) {
      const radios = this.el.querySelectorAll<RadioElement>('nst-radio');
      for (let index = 0; index < radios.length; index++) {
        const isSelected = radios[index].value === event.detail;
        radios[index].checked = isSelected;
        if (isSelected) {
          this.value = radios[index].value;
          this.valueChanged.emit(this.value);
        }
      }
    }
  }

  @Watch('value')
  watchValueHandler(newValue) {
    const radios = this.el.querySelectorAll<RadioElement>('nst-radio');
    for (let index = 0; index < radios.length; index++) {
      radios[index].checked = (newValue === radios[index].value);
    }
  }

  componentWillLoad() {
    const radios = this.el.querySelectorAll<RadioElement>('nst-radio');
    for (let index = 0; index < radios.length; index++) {
      radios[index].name = this.name;
      radios[index].disabled = radios[index].disabled || this.disabled;
      radios[index].slot = "nst-radio";
    }
    this.watchValueHandler(this.value);
  }

  render() {
    return (
      <Host name={this.name}>
        <slot name="nst-radio" />
      </Host>
    );
  }
}
