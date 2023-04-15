import { Component, Element, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { OptionItem } from '../option-item';
import { cleanHTML } from '../../../helpers/sanitize-helper';

@Component({
  tag: 'nst-select-option',
  styleUrl: 'select-option.scss'
})
export class NstSelectOption {
  @Element() el: HTMLElement;

  /** Option configuration - all needed data to render one option */
  @Prop() option: OptionItem;

  /** Is multiple selection allowed */
  @Prop() multiple: boolean;

  /** Is it checked */
  @Prop() checked: boolean;

  /** Is indeterminate allowed for multiple checked */
  @Prop() indeterminate: boolean;

  /** Contains a border? Used for special options (e.g. select None) */
  @Prop() bordered: boolean;

  /** Not breakable items, will take more space if needed than input itself */
  @Prop() not_breakable: boolean;

  /** Disabled option */
  @Prop() disabled: boolean;

  /** Emits on select this option */
  @Event() selectOption: EventEmitter<string>;

  onKeyDown(event): void {
    if (this.option.disabled) {
      return;
    }
    if (event.key === 'Enter') {
      this.selectOption.emit(this.option?.value);
    }
  }

  onClick(): void {
    if (this.option.disabled) {
      return;
    }
    this.selectOption.emit(this.option?.value);
  }

  get hostClasses(): string {
    let classes = 'option-item';
    if (this.bordered) {
      classes += ' bordered';
    }
    if (this.option?.description) {
      classes += ' with-description';
    }
    if (this.checked) {
      classes += ' selected';
    }
    if (this.disabled) {
      classes += ' disabled';
    }
    return classes;
  }

  sanitizeHtml(html: string): string {
    return cleanHTML(html);
  }

  render(): HTMLElement {
    return (
      <Host
        class={this.hostClasses}
        onKeyDown={event => this.onKeyDown(event)}
        onClick={() => this.onClick()}
        tabindex={this.disabled ? undefined : 0}
        name={`option-${this.option.value}`}
      >
        <div class="option-item-left">
          {this.multiple ? (
            <nst-checkbox
              checked={this.checked}
              indeterminate={this.indeterminate}
              disabled={this.disabled}
              tabindex={this.disabled ? undefined : 0}
            />
          ) : null}
          <div class={this.not_breakable ? 'text-section not-breakable' : 'text-section'}>
            {this.option?.label ? (
              <div class="label" style={this.option.labelColor ? { color: this.option.labelColor } : {}}>
                {this.option.icon ? <span class="icon" innerHTML={this.option.icon}></span> : null}
                <div>{this.sanitizeHtml(this.option.label)}</div>
              </div>
            ) : null}
            {this.option?.description ? (
              <div class="description">{this.sanitizeHtml(this.option.description)}</div>
            ) : null}
          </div>
        </div>
        {this.option?.trailingIcon ? (
          <a
            tabindex={this.disabled ? undefined : 0}
            class="material-icons url"
            onKeyDown={event => {
              if (!this.disabled) {
                event.stopPropagation();
                event.key === 'Enter' && this.option.trailingIcon.onClick();
              }
            }}
            onClick={event => {
              if (!this.disabled) {
                event.stopPropagation();
                this.option.trailingIcon.onClick();
              }
            }}
          >
            {this.option.trailingIcon.name}
          </a>
        ) : null}
      </Host>
    );
  }
}
