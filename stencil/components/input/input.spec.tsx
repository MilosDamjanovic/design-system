import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { NstInput } from './input';

describe('Input component', () => {
  it('should render input component with correct placeholder, label, message and icons', async () => {
    const page = await newSpecPage({
      components: [NstInput],
      template: () => (
        <nst-input
          placeholder="Placeholder"
          label="Label"
          icon_left="star"
          icon_right="star"
          message="Message"
        ></nst-input>
      )
    });
    expect(page.root).toEqualHtml(`
      <nst-input class="nst-form-input">
        <div class="nst-align-items-center nst-d-flex">
          <label>
            Label
          </label>
        </div>
        <div class="icon-left icon-right nst-align-items-center nst-d-flex nst-input-wrapper nst-justify-content-between nst-position-relative">
          <span class="icon icon-left material-icons">
            star
          </span>
          <input class="form-input" placeholder="Placeholder" type="text">
          <span class="icon icon-right material-icons">
            star
          </span>
        </div>
        <span class="message">
          Message
        </span>
      </nst-input>
    `);
  });

  it('should render input component with correct error state', async () => {
    const page = await newSpecPage({
      components: [NstInput],
      template: () => (
        <nst-input
          error={true}
          placeholder="Placeholder"
          label="Label"
          icon_left="star"
          icon_right="star"
          message="Error Message"
        ></nst-input>
      )
    });
    expect(page.root).toEqualHtml(`
      <nst-input class="nst-form-input">
        <div class="nst-align-items-center nst-d-flex">
          <label>
            Label
          </label>
        </div>
        <div class="icon-left icon-right nst-align-items-center nst-d-flex nst-input-wrapper nst-justify-content-between nst-position-relative">
          <span class="icon icon-left material-icons">
            star
          </span>
          <input class="error form-input" placeholder="Placeholder" type="text">
          <span class="icon icon-right material-icons">
            star
          </span>
        </div>
        <span class="error message">
          Error Message
        </span>
      </nst-input>
    `);
  });

  it('should render input component with correct disabled state', async () => {
    const page = await newSpecPage({
      components: [NstInput],
      template: () => (
        <nst-input
          error={true}
          placeholder="Placeholder"
          label="Label"
          icon_left="star"
          icon_right="star"
          message="Error Message"
        ></nst-input>
      )
    });
    expect(page.root).toEqualHtml(`
      <nst-input class="nst-form-input">
        <div class="nst-align-items-center nst-d-flex">
          <label>
            Label
          </label>
        </div>
        <div class="icon-left icon-right nst-align-items-center nst-d-flex nst-input-wrapper nst-justify-content-between nst-position-relative">
          <span class="icon icon-left material-icons">
            star
          </span>
          <input class="error form-input" placeholder="Placeholder" type="text">
          <span class="icon icon-right material-icons">
            star
          </span>
        </div>
        <span class="error message">
          Error Message
        </span>
      </nst-input>
    `);
  });

  it('should render input component with correct inline state', async () => {
    const page = await newSpecPage({
      components: [NstInput],
      template: () => (
        <nst-input
          inline_input={true}
          error={true}
          placeholder="Placeholder"
          label="Label"
          icon_left="star"
          icon_right="star"
          message="Error Message"
        ></nst-input>
      )
    });
    expect(page.root).toEqualHtml(`
      <nst-input class="inline nst-form-input">
        <div class="nst-align-items-center nst-d-flex">
          <label>
            Label
          </label>
        </div>
        <div class="icon-left icon-right nst-align-items-center nst-d-flex nst-input-wrapper nst-justify-content-between nst-position-relative">
          <span class="icon icon-left material-icons">
            star
          </span>
          <input class="error form-input inline" placeholder="Placeholder" type="text">
          <span class="icon icon-right material-icons">
            star
          </span>
        </div>
        <span class="error message">
          Error Message
        </span>
      </nst-input>
    `);
  });
});
