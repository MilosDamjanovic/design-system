import { Component, h, Prop, Event, Host, EventEmitter } from '@stencil/core';
import { NstComponentAppearance, NstComponentSize } from '../../interfaces/variants';

export type NstButtonStatus = 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';

@Component({
  tag: 'nst-button',
  styleUrl: 'button.scss'
})
export class NstButton {
  /** Button text */
  @Prop() text: string;

  /** Disabled state */
  @Prop() disabled: boolean;

  /** Button status, defines button colors */
  @Prop() status: NstButtonStatus = 'primary';

  /** Button appearance, defines button look */
  @Prop() appearance: NstComponentAppearance = 'filled';

  /** Size of the button */
  @Prop() size: NstComponentSize = 'medium';

  /** Name of left icon, use material icons */
  @Prop() icon_left: string;

  /** Name of right icon, use material icons */
  @Prop() icon_right: string;

  /** Custom class which will be attached to the classlist */
  @Prop() custom_class: string;

  /** Full width: 100% */
  @Prop() full_width: boolean;

  /** Emits on every click */
  @Event() btnClick: EventEmitter;

  /** Button name  */
  @Prop() name: string;

  /** Optional: remove padding for ghost button  */
  @Prop() no_padding: boolean;

  get hostClasses(): string {
    let classes = `appearance-${this.appearance} status-${this.status} size-${this.size}`;
    if (this.full_width) {
      classes += ' full-width';
    }
    if (this.no_padding) {
      classes += ' no-padding'
    }
    return classes;
  }

  clickedButton(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.btnClick.emit(event);
  }
  render() {
    const LeftIcon = () => (this.icon_left ? <span class="left-icon material-icons">{this.icon_left}</span> : null);
    const RightIcon = () => (this.icon_right ? <span class="right-icon material-icons">{this.icon_right}</span> : null);

    return (
      <Host class={this.hostClasses} name={this.name}>
        <button
          class={this.custom_class}
          disabled={this.disabled}
          type="button"
          onClick={event => this.clickedButton(event)}
        >
          <LeftIcon />
          {this.text ?? <slot />}
          <RightIcon />
        </button>
      </Host>
    );
  }
}
