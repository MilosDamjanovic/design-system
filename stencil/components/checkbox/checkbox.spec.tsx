import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { NstCheckbox } from './checkbox';

describe('Button component', () => {
  it('should render unchecked checkbox', async () => {
    const page = await newSpecPage({
      components: [NstCheckbox],
      template: () => (<nst-checkbox></nst-checkbox>),
    });
    expect(page.root).toEqualHtml(`
      <nst-checkbox>
        <label class="label">
          <input class="native-input visually-hidden" type="checkbox">
          <span class="custom-checkbox"></span>
          <span class="text"></span>
        </label>
      </nst-checkbox>
    `);
  });

  it('should render checked checkbox', async () => {
    const page = await newSpecPage({
      components: [NstCheckbox],
      template: () => (<nst-checkbox checked={true}></nst-checkbox>),
    });
    expect(page.root).toEqualHtml(`
      <nst-checkbox>
        <label class="label">
          <input checked="" class="native-input visually-hidden" type="checkbox">
          <span class="checked custom-checkbox">
            <span class="material-icons">
              done
            </span>
          </span>
          <span class="text"></span>
        </label>
      </nst-checkbox>
    `);
  });

  it('should render indeterminate checkbox', async () => {
    const page = await newSpecPage({
      components: [NstCheckbox],
      template: () => (<nst-checkbox indeterminate={true}></nst-checkbox>),
    });
    expect(page.root).toEqualHtml(`
      <nst-checkbox>
        <label class="label">
          <input indeterminate="" class="native-input visually-hidden" type="checkbox">
          <span class="custom-checkbox indeterminate">
            <span class="material-icons">
              remove
            </span>
          </span>
          <span class="text"></span>
        </label>
      </nst-checkbox>
    `);
  });

  it('should render checked disabled checkbox', async () => {
    const page = await newSpecPage({
      components: [NstCheckbox],
      template: () => (<nst-checkbox disabled={true} checked={true}></nst-checkbox>),
    });
    expect(page.root).toEqualHtml(`
      <nst-checkbox>
        <label class="label">
          <input checked="" class="native-input visually-hidden" disabled="" type="checkbox">
          <span class="checked custom-checkbox disabled">
            <span class="material-icons">
              done
            </span>
          </span>
          <span class="text"></span>
        </label>
      </nst-checkbox>
    `);
  });
})
