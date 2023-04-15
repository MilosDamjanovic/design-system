import { html } from 'lit-html';

export const ProgressBar = ({ legendPosition, subtitle, progressBarItems, totalAmount }) => {
  return html`
    <div style="width: 327px">
       <nst-progress-bar
        legend-position=${legendPosition}
        subtitle=${subtitle}
        progress-bar-items=${progressBarItems}
        total-amount=${totalAmount}
      > </nst-progress-bar>
    </div>
  `;
};

export const ProgressBarNoSubtitle = ({ legendPosition, progressBarItems }) => {
  return html` <div style="width: 327px">
     <nst-progress-bar legend-position=${legendPosition} progress-bar-items=${progressBarItems}> </nst-progress-bar>
  </div>`;
};
