import { newSpecPage } from '@stencil/core/testing';
import { h } from '@stencil/core';
import {  NstProgressBar } from './progress-bar';
import { LegendPosition } from './progress-bar.model';

describe('Progress Bar component', () => {
  const subtitle = JSON.stringify({
    left: 'Subinformation',
    right: 'Info'
  });
  const items = JSON.stringify([
    {
      color: '#C0DAC8',
      title: 'Title',
      value: '80 EUR',
      percentage: 80
    },
    {
      color: '#DDD8DB',
      title: 'Title',
      value: '20 EUR',
      percentage: 20
    }
  ]);

  const totalAmount = JSON.stringify({
    title: 'Total amount',
    value: '100 EUR'
  });
  it('should render progress-bar component with legend on the bottom', async () => {
    const page = await newSpecPage({
      components: [ NstProgressBar],
      template: () => (
         <nst-progress-bar
          legend-position={LegendPosition.bottom}
          progress-bar-items={items}
          subtitle={subtitle}
        > </nst-progress-bar>
      )
    });
    expect(page.root).toEqualHtml(`
     <nst-progress-bar legend-position='bottom' progress-bar-items='[{&quot;color&quot;:&quot;#C0DAC8&quot;,&quot;title&quot;:&quot;Title&quot;,&quot;value&quot;:&quot;80 EUR&quot;,&quot;percentage&quot;:80},{&quot;color&quot;:&quot;#DDD8DB&quot;,&quot;title&quot;:&quot;Title&quot;,&quot;value&quot;:&quot;20 EUR&quot;,&quot;percentage&quot;:20}]'>
      <mock:shadow-root>
        <div class='component'>
          <div class='progress-bar'>
            <div class='bar' style='background-color: #C0DAC8; left: 0%; width: 80%; border-top-left-radius: 8px; border-bottom-left-radius: 8px;'></div>
            <div class='bar' style='background-color: #DDD8DB; left: 80%; width: 20%; border-top-right-radius: 8px; border-bottom-right-radius: 8px;'></div>
          </div>
          <div>
            <div class='subtitle subtitle-bottom'>
              <span>
                Subinformation
              </span>
              <span>
                Info
              </span>
            </div>
            <div class='progress-bar-item-container'>
              <div>
                <div class='title-container'>
                  <span class='dot' style='background-color: #C0DAC8;'></span>
                  <span class='title'>
                    Title
                  </span>
                </div>
                <div class='value'>
                  80 EUR
                </div>
              </div>
              <div>
                <div class='title-container'>
                  <span class='dot' style='background-color: #DDD8DB;'></span>
                  <span class='title'>
                    Title
                  </span>
                </div>
                <div class='value'>
                  20 EUR
                </div>
              </div>
            </div>
          </div>
        </div>
      </mock:shadow-root>
     </nst-progress-bar>
`);
  });
  it('should render progress-bar component with legend on the top', async () => {
    const page = await newSpecPage({
      components: [ NstProgressBar],
      template: () => (
         <nst-progress-bar
          legend-position={LegendPosition.top}
          progress-bar-items={items}
          subtitle={subtitle}
        > </nst-progress-bar>
      )
    });
    expect(page.root)
      .toEqualHtml(` <nst-progress-bar legend-position='top' progress-bar-items='[{&quot;color&quot;:&quot;#C0DAC8&quot;,&quot;title&quot;:&quot;Title&quot;,&quot;value&quot;:&quot;80 EUR&quot;,&quot;percentage&quot;:80},{&quot;color&quot;:&quot;#DDD8DB&quot;,&quot;title&quot;:&quot;Title&quot;,&quot;value&quot;:&quot;20 EUR&quot;,&quot;percentage&quot;:20}]'>
      <mock:shadow-root>
        <div class='component'>
          <div>
            <div class='progress-bar-item-container'>
              <div>
                <div class='title-container'>
                  <span class='dot' style='background-color: #C0DAC8;'></span>
                  <span class='title'>
                    Title
                  </span>
                </div>
                <div class='value'>
                  80 EUR
                </div>
              </div>
              <div>
                <div class='title-container'>
                  <span class='dot' style='background-color: #DDD8DB;'></span>
                  <span class='title'>
                    Title
                  </span>
                </div>
                <div class='value'>
                  20 EUR
                </div>
              </div>
            </div>
            <div class='subtitle subtitle-top'>
              <span>
                Subinformation
              </span>
              <span>
                Info
              </span>
            </div>
          </div>
          <div class='progress-bar'>
            <div class='bar' style='background-color: #C0DAC8; left: 0%; width: 80%; border-top-left-radius: 8px; border-bottom-left-radius: 8px;'></div>
            <div class='bar' style='background-color: #DDD8DB; left: 80%; width: 20%; border-top-right-radius: 8px; border-bottom-right-radius: 8px;'></div>
          </div>
        </div>
      </mock:shadow-root>
     </nst-progress-bar>
`);
  });

  it('should render progress-bar component with total amount', async () => {
    const page = await newSpecPage({
      components: [ NstProgressBar],
      template: () => (
         <nst-progress-bar
          legend-position={LegendPosition.top}
          progress-bar-items={items}
          subtitle={subtitle}
          total-amount={totalAmount}
        > </nst-progress-bar>
      )
    });
    expect(page.root)
      .toEqualHtml(` <nst-progress-bar legend-position='top' progress-bar-items='[{&quot;color&quot;:&quot;#C0DAC8&quot;,&quot;title&quot;:&quot;Title&quot;,&quot;value&quot;:&quot;80 EUR&quot;,&quot;percentage&quot;:80},{&quot;color&quot;:&quot;#DDD8DB&quot;,&quot;title&quot;:&quot;Title&quot;,&quot;value&quot;:&quot;20 EUR&quot;,&quot;percentage&quot;:20}]' total-amount='{&quot;title&quot;:&quot;Total amount&quot;,&quot;value&quot;:&quot;100 EUR&quot;}'>
      <mock:shadow-root>
        <div class='component'>
          <div>
            <div class='progress-bar-item-container'>
              <div>
                <div class='title-container'>
                  <span class='total-amount-title'>
                     Total amount
                   </span>
                 </div>
                 <div class='total-amount-value'>
                   100 EUR
                 </div>
               </div>
               <div>
                 <div class='title-container'>
                  <span class='dot' style='background-color: #C0DAC8;'></span>
                  <span class='title'>
                    Title
                  </span>
                </div>
                <div class='value'>
                  80 EUR
                </div>
              </div>
              <div>
                <div class='title-container'>
                  <span class='dot' style='background-color: #DDD8DB;'></span>
                  <span class='title'>
                    Title
                  </span>
                </div>
                <div class='value'>
                  20 EUR
                </div>
              </div>
            </div>
            <div class='subtitle subtitle-top'>
              <span>
                Subinformation
              </span>
              <span>
                Info
              </span>
            </div>
          </div>
          <div class='progress-bar'>
            <div class='bar' style='background-color: #C0DAC8; left: 0%; width: 80%; border-top-left-radius: 8px; border-bottom-left-radius: 8px;'></div>
            <div class='bar' style='background-color: #DDD8DB; left: 80%; width: 20%; border-top-right-radius: 8px; border-bottom-right-radius: 8px;'></div>
          </div>
        </div>
      </mock:shadow-root>
     </nst-progress-bar>
`);
  });
});
