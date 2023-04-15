import { LegendPosition } from '../../stencil/components/progess-bar/progress-bar.model';
import { ProgressBar, ProgressBarNoSubtitle } from './progress-bar';

export default {
  title: 'Components/Progress Bar',
  argTypes: {
    subtitle: {
      control: {
        type: 'object'
      }
    },
    progressBarItems: {
      control: {
        type: 'object'
      }
    },
    legendPosition: {
      control: 'radio',
      options: [LegendPosition.top, LegendPosition.bottom]
    }
  }
};

const Template = args => ProgressBar(args);

export const Primary = Template.bind({});
Primary.args = {
  subtitle: JSON.stringify({
    left: 'Subinformation',
    right: 'Info'
  }),
  progressBarItems: JSON.stringify([
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
  ]),
  legendPosition: LegendPosition.bottom
};

const TemplateNoSubtitle = args => ProgressBarNoSubtitle(args);

export const NoSubtitle = TemplateNoSubtitle.bind({});
NoSubtitle.args = {
  progressBarItems: JSON.stringify([
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
  ]),
  legendPosition: LegendPosition.top
};

export const LegendAboveBar = Template.bind({});
LegendAboveBar.args = {
  subtitle: JSON.stringify({
    left: 'Subinformation',
    right: 'Info'
  }),
  progressBarItems: JSON.stringify([
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
  ]),
  legendPosition: LegendPosition.top
};

export const ThreeElementsInProgressBar = Template.bind({});
ThreeElementsInProgressBar.args = {
  subtitle: JSON.stringify({
    left: 'Subinformation',
    right: 'Info'
  }),
  progressBarItems: JSON.stringify([
    {
      color: '#679ABE',
      title: 'Title',
      value: '60 EUR',
      percentage: 60
    },
    {
      color: '#EFA455',
      title: 'Title',
      value: '10 EUR',
      percentage: 10
    },
    {
      color: '#DDD8DB',
      title: 'Title',
      value: '30 EUR',
      percentage: 30
    }
  ]),
  legendPosition: LegendPosition.bottom
};

export const FourElementsInProgressBar = Template.bind({});
FourElementsInProgressBar.args = {
  subtitle: JSON.stringify({
    left: 'Subinformation',
    right: 'Info'
  }),
  progressBarItems: JSON.stringify([
    {
      color: '#679ABE',
      title: 'Title',
      value: '40 EUR',
      percentage: 40
    },
    {
      color: '#EFA455',
      title: 'Title',
      value: '20 EUR',
      percentage: 20
    },
    {
      color: '#FF745A',
      title: 'Title',
      value: '20 EUR',
      percentage: 20
    },
    {
      color: '#DDD8DB',
      title: 'Title',
      value: '20 EUR',
      percentage: 20
    }
  ]),
  legendPosition: LegendPosition.bottom
};

export const TotalAmount = Template.bind({});
TotalAmount.args = {
  subtitle: JSON.stringify({
    left: 'Subinformation',
    right: 'Info'
  }),
  progressBarItems: JSON.stringify([
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
  ]),
  legendPosition: LegendPosition.bottom,
  totalAmount: JSON.stringify({
    title: 'Total amount',
    value: '100 EUR'
  })
};
