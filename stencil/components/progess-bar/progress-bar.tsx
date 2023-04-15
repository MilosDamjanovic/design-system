import { Component, h, Host, Prop, Watch } from '@stencil/core';
import { LegendPosition, ProgressBarItems, Subtitle, TotalAmount } from './progress-bar.model';

interface InternalProgressBarItems {
  color: string;
  title: string;
  value: string;
  percentage: number;
  left: number;
  borderLeft?: string;
  borderRight?: string;
}

@Component({
  tag: 'nst-progress-bar',
  styleUrl: 'progress-bar.scss',
  shadow: true
})
export class  NstProgressBar {
  private _progressBarItems: InternalProgressBarItems[] = [];
  private _subtitle: Subtitle;
  private _totalAmount: TotalAmount;

  /**
   * Position when the legend should be placed
   */
  @Prop() legendPosition: LegendPosition = LegendPosition.bottom;

  /**
   * Items which should be displayed in the progress-bar and in the legend, the values should sum up to 100%
   */
    // as we can't pass object to stencil web components, we need to parse them as string, see:
    // https://medium.com/@scottmgerstl/passing-an-object-or-array-to-stencil-dd62b7d92641
  @Prop() progressBarItems: ProgressBarItems[] | string;
  /**
   * Subtitles for the progress-bar
   */
  @Prop() subtitle?: Subtitle | string;

  /**
   * Total amount: Summary of all data in the progress bar
   */
  @Prop() totalAmount?: TotalAmount | string;

  @Watch('progressBarItems')
  progressBarItemsWatcher(newValue: ProgressBarItems[] | string) {
    if (typeof newValue === 'string') {
      this._progressBarItems = this.convertToInternalProgressBarItems(JSON.parse(newValue));
    } else {
      this._progressBarItems = this.convertToInternalProgressBarItems(newValue);
    }

  }

  @Watch('subtitle')
  subtitleItemsWatcher(newValue: Subtitle | string) {
    if (typeof newValue === 'string') {
      this._subtitle = JSON.parse(newValue);
    } else {
      this._subtitle = newValue;
    }
  }

  @Watch('totalAmount')
  totalAmountWatcher(newValue: TotalAmount | string) {
    if (typeof newValue === 'string') {
      this._totalAmount = JSON.parse(newValue);
    } else {
      this._totalAmount = newValue;
    }
  }

  componentWillLoad() {
    this.progressBarItemsWatcher(this.progressBarItems);
    this.subtitleItemsWatcher(this.subtitle);
    this.totalAmountWatcher(this.totalAmount);
  }

  convertToInternalProgressBarItems(progressBarItems: ProgressBarItems[]) {
    const internalProgressBarItems: InternalProgressBarItems[] = [];
    let sumOfPercentages = 0;
    for (let i = 0; i < progressBarItems.length; i++) {
      if (i == 0) {
        internalProgressBarItems.push({ ...progressBarItems[i], borderLeft: '8px', left: sumOfPercentages });
      } else if (i == progressBarItems.length - 1) {
        internalProgressBarItems.push({ ...progressBarItems[i], borderRight: '8px', left: sumOfPercentages });
      } else {
        internalProgressBarItems.push({ ...progressBarItems[i], left: sumOfPercentages });
      }
      sumOfPercentages = sumOfPercentages + progressBarItems[i].percentage;
    }

    return internalProgressBarItems;
  }

  render() {
    const Legend = () => (
      <div class='progress-bar-item-container'>
        {this._totalAmount && (
          <div>
            <div class='title-container'>
              <span class='total-amount-title'>{this._totalAmount.title} </span>
            </div>
            <div class='total-amount-value'>{this._totalAmount.value}</div>
          </div>
        )}
        {this._progressBarItems.map(item => (
          <div>
            <div class='title-container'>
              <span class='dot' style={{ 'background-color': item.color }}></span>
              <span class='title'>{item.title} </span>
            </div>
            <div class='value'>{item.value}</div>
          </div>
        ))}

      </div>
    );

    return (
      <Host>
        <div class='component'>
          {this.legendPosition == LegendPosition.top && (
            <div>
              <Legend></Legend>
              {this._subtitle && (
                <div class='subtitle subtitle-top'>
                  <span> {this._subtitle.left}</span>
                  <span> {this._subtitle.right}</span>
                </div>
              )}
            </div>
          )}
          <div class='progress-bar'>
            {this._progressBarItems.map(item => (
              <div
                class='bar'
                style={{
                  'background-color': item.color,
                  'left': item.left + '%',
                  'width': item.percentage + '%',
                  'border-top-left-radius': item.borderLeft,
                  'border-bottom-left-radius': item.borderLeft,
                  'border-top-right-radius': item.borderRight,
                  'border-bottom-right-radius': item.borderRight
                }}
              ></div>
            ))}
          </div>
          {this.legendPosition == LegendPosition.bottom && (
            <div>
              {this._subtitle && (
                <div class='subtitle subtitle-bottom'>
                  <span> {this._subtitle.left}</span>
                  <span> {this._subtitle.right}</span>
                </div>
              )}
              <Legend></Legend>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
