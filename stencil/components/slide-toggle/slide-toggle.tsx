import { Component, h, Host, Prop, Event, EventEmitter } from '@stencil/core';

export type  NstSlideToggleSize = 'medium' | 'large';

@Component({
  tag: 'nst-slide-toggle',
  styleUrl: 'slide-toggle.scss'
})
export class  NstSlideToggle {
  /** Is it on (checked)  */
  @Prop() checked: boolean;

  /** Name of the element  */
  @Prop() name: string;

  /** Element label  */
  @Prop() label: string;

  /** Is element disabled  */
  @Prop() disabled: boolean;

  /** Define size  */
  @Prop() size:  NstSlideToggleSize = 'medium';

  /** Icon name - material  */
  @Prop() icon: string;

  /** Slide element heading  */
  @Prop() heading: string;

  /** Slide element description  */
  @Prop() description: string;

  /** Emits on slide change  */
  @Event() checkedChange: EventEmitter<boolean>;

  get hostClass(): string {
    let classList = '';
    classList += `size-${this.size}`;
    return classList;
  }

  updateValue(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;
    this.checkedChange.emit(this.checked);
  }

  render() {
    const headingAndDescriptionClass = `heading-description-wrap ${!this.heading && !this.description ? 'hide' : ''}`;
    const Icon = () => (this.icon ? <span class="material-icons">{this.icon}</span> : null);
    const Description = () =>
      this.icon || this.heading || this.description ? (
        <div class="description-wrap">
          <div class="icon">
            <Icon />
          </div>
          <div class={headingAndDescriptionClass}>
            <div class="heading">{this.heading}</div>
            <div class="description">{this.description}</div>
          </div>
        </div>
      ) : null;

    return (
      <Host class={this.hostClass} name={this.name}>
        <label class="toggle-label">
          <input
            type="checkbox"
            class="native-input visually-hidden"
            role="switch"
            aria-checked={this.checked}
            disabled={this.disabled}
            checked={this.checked}
            onClick={e => e.stopPropagation()}
            onChange={e => this.updateValue(e)}
          />

          <Description />

          <div class={this.checked ? 'toggle checked' : 'toggle'}>
            <span class="toggle-switcher"></span>
          </div>
          <span class="text">{this.label}</span>
        </label>
      </Host>
    );
  }
}
