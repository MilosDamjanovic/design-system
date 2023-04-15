import { Component, Element, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { NstComponentStatus, NstComponentAppearance } from '../../interfaces/variants';

@Component({
  tag: 'nst-alert',
  styleUrl: 'alert.scss'
})
export class NstAlert {
  /** Title of alert */
  @Prop() alert_title: string;

  /** Description of alert */
  @Prop() alert_description: string;

  /** Alert status - indicator of icon and title */
  @Prop() status: NstComponentStatus = 'info';

  /** Alert appearance */
  @Prop() appearance: NstComponentAppearance = 'filled';

  /** Show icon or not */
  @Prop() has_icon: boolean = true;

  /** Show close action button or not */
  @Prop() closeable: boolean = true;

  /** Display show more button and make the class expandable */
  @Prop() expandable: boolean = false;

  /** Is expanded */
  @Prop({ mutable: true }) expanded: boolean = true;

  /** Label for show more button */
  @Prop() show_more_label: string = 'Show all';

  /** Label for show less button */
  @Prop() hide_more_label: string = 'Hide all';

  /** Add break line between title and description */
  @Prop() comment_break_line: boolean = false;

  /** Alert action title */
  @Prop() alert_action_title: string | undefined;

  /** Event for action click */
  @Event() alertActionClick: EventEmitter<void>;

  /** Event for dismiss click */
  @Event() dismissClick: EventEmitter<void>;

  @Element() el: HTMLElement;

  get icon(): string {
    switch (this.status) {
      case 'info':
        return 'info';
      case 'warning':
        return 'warning';
      case 'success':
        return 'check_circle';
      case 'danger':
        return 'dangerous';
      case 'neutral':
        return 'lightbulb_outline';
      default:
        break;
    }
  }

  dismiss() {
    this.dismissClick.emit();
    this.el.remove();
  }

  toggleExpanded(): void {
    this.expanded = !this.expanded;
  }

  get getExpandText(): string {
    return this.expanded ? this.hide_more_label : this.show_more_label;
  }

  render() {
    const ActionTitle = () =>
      this.alert_action_title ? (
        <a
          onClick={() => this.alertActionClick.emit()}
          class={this.comment_break_line ? 'alert-action-title break-line' : 'alert-action-title'}
        >
          {this.alert_action_title}
        </a>
      ) : null;

    const AlertBody = () => (
      <div class="alert-body">
        <div class={this.comment_break_line ? 'title-wrapper break-line' : 'title-wrapper'}>
          {this.alert_title ? <span class="alert-title">{this.alert_title}</span> : null}
          {this.alert_description ? <span class="alert-description">{this.alert_description}</span> : null}
          <ActionTitle />
        </div>
        <div class="alert-slot">
          <slot />
        </div>
      </div>
    );

    const CloseButton = () =>
      this.closeable ? (
        <span class="close-button">
          <span onClick={() => this.dismiss()} class="icon-close material-icons-outlined">
            close
          </span>
        </span>
      ) : null;

    const ExpandButton = () =>
      this.expandable ? (
        <span class="expand-button" onClick={() => this.toggleExpanded()}>
          <span class="expand-text">{this.getExpandText}</span>
          <span class="icon-expand material-icons">expand_less</span>
        </span>
      ) : null;

    const Icon = () =>
      this.has_icon ? (
        <span class="alert-icon-wrapper space-right">
          <span class="icon material-icons">{this.icon}</span>
        </span>
      ) : null;

    return (
      <Host class={`status-${this.status} appearance-${this.appearance} ${this.expanded ? 'expanded' : 'collapsed'}`}>
        <div class="alert-content">
          <Icon></Icon>
          <AlertBody></AlertBody>
        </div>
        <div class="alert-right">
          <ExpandButton></ExpandButton>
          <CloseButton></CloseButton>
        </div>
      </Host>
    );
  }
}
