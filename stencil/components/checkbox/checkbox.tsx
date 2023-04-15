import { Component, h, Prop, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'nst-checkbox',
  styleUrl: 'checkbox.scss'
})
export class NstCheckbox {
  /** Checkbox label (text) */
  @Prop() label: string;

  /** Checkbox label (text) */
  @Prop() name: string;

  /** Is it checked */
  @Prop({ mutable: true }) checked: boolean;

  /** Is it disabled */
  @Prop() disabled: boolean;

  /** Is it indeterminate */
  @Prop({ mutable: true }) indeterminate: boolean;

  /** Emit on checked change */
  @Event() checkedChange: EventEmitter<boolean>;

  updateValueAndIndeterminate(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;
    this.checkedChange.emit(this.checked);
    this.indeterminate = input.indeterminate;
  }

  private getCustomCheckboxClasslist(): string {
    let classlist = `custom-checkbox`;
    if (this.indeterminate) {
      classlist += ' indeterminate';
    }
    if (this.checked) {
      classlist += ' checked';
    }
    if (this.disabled) {
      classlist += ' disabled';
    }
    return classlist;
  }

  render() {
    return (
      <Host name={this.name}>
        <label class="label">
          <input
            type="checkbox"
            class="native-input visually-hidden"
            disabled={this.disabled}
            checked={this.checked}
            onChange={$event => this.updateValueAndIndeterminate($event)}
            onClick={$event => $event.stopPropagation()}
            indeterminate={this.indeterminate}
          />
          <span class={this.getCustomCheckboxClasslist()}>
            {this.indeterminate && !this.checked ? <span class="material-icons">remove</span> : null}
            {this.checked ? <span class="material-icons">done</span> : null}
          </span>
          <span class="text">{this.label}</span>
        </label>
      </Host>
    );
  }
}
