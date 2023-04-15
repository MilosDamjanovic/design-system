import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import {  NstSlideToggle } from './slide-toggle';

describe('Toggle component', () => {
  it('should render toggle component', async () => {
    const page = await newSpecPage({
      components: [ NstSlideToggle],
      template: () =>  <nst-slide-toggle> </nst-slide-toggle>
    });
    expect(page.root).toEqualHtml(`
       <nst-slide-toggle class="size-medium">
        <label class="toggle-label">
          <input class="native-input visually-hidden" role="switch" type="checkbox">
          <div class="toggle">
            <span class="toggle-switcher"></span>
          </div>
          <span class="text"></span>
        </label>
       </nst-slide-toggle>
    `);
  });

  it('should render toggle component checked', async () => {
    const page = await newSpecPage({
      components: [ NstSlideToggle],
      template: () =>  <nst-slide-toggle checked={true}> </nst-slide-toggle>
    });
    expect(page.root).toEqualHtml(`
       <nst-slide-toggle class="size-medium">
        <label class="toggle-label">
          <input aria-checked="" checked="" class="native-input visually-hidden" role="switch" type="checkbox">
          <div class="checked toggle">
            <span class="toggle-switcher"></span>
          </div>
          <span class="text"></span>
        </label>
       </nst-slide-toggle>
    `);
  });

  it('should render toggle component with label as slot', async () => {
    const page = await newSpecPage({
      components: [ NstSlideToggle],
      template: () =>  <nst-slide-toggle label={'Label'}> </nst-slide-toggle>
    });
    expect(page.root).toEqualHtml(`
       <nst-slide-toggle class="size-medium">
        <label class="toggle-label">
          <input class="native-input visually-hidden" role="switch" type="checkbox">
          <div class="toggle">
            <span class="toggle-switcher"></span>
          </div>
          <span class="text">
            Label
          </span>
        </label>
       </nst-slide-toggle>
    `);
  });

  it('should render disabled toggle component with label as slot', async () => {
    const page = await newSpecPage({
      components: [ NstSlideToggle],
      template: () =>  <nst-slide-toggle disabled={true} label={'Label'}> </nst-slide-toggle>
    });
    expect(page.root).toEqualHtml(`
       <nst-slide-toggle class="size-medium">
        <label class="toggle-label">
          <input class="native-input visually-hidden" disabled="" role="switch" type="checkbox">
          <div class="toggle">
            <span class="toggle-switcher"></span>
          </div>
          <span class="text">
            Label
          </span>
        </label>
       </nst-slide-toggle>
    `);
  });

  it('should render toggle component with icon, heading and description', async () => {
    const page = await newSpecPage({
      components: [ NstSlideToggle],
      template: () =>  <nst-slide-toggle
        icon={'home'}
        heading={'Lorem ipsum'}
        description={'Lorem ipsum dolor sit amet'}
      > </nst-slide-toggle>
    });
    expect(page.root).toEqualHtml(`
       <nst-slide-toggle class="size-medium">
        <label class="toggle-label">
          <input class="native-input visually-hidden" role="switch" type="checkbox">
          <div class="description-wrap">
            <div class="icon">
              <span class="material-icons">home</span>
            </div>
            <div class="heading-description-wrap">
              <div class="heading">Lorem ipsum</div>
              <div class="description">Lorem ipsum dolor sit amet</div>
            </div>
          </div>
          <div class="toggle">
            <span class="toggle-switcher"></span>
          </div>
          <span class="text"></span>
        </label>
       </nst-slide-toggle>
    `);
  });
});
