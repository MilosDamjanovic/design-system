import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import {  NstTextarea } from './textarea';

describe('Textarea component', () => {
  it('should render textarea component with correct placeholder, label, message and icon', async () => {
    const page = await newSpecPage({
      components: [ NstTextarea],
      template: () => (
         <nst-textarea placeholder="Placeholder" label="Label" icon_left="star" message="Message"> </nst-textarea>
      )
    });
    expect(page.root).toEqualHtml(`
       <nst-textarea class=" nst-form-input">
        <div class=" nst-align-items-center  nst-d-flex">
          <label>
            Label
          </label>
        </div>
        <div class="icon-left w-100  nst-align-items-center  nst-d-flex  nst-justify-content-between  nst-position-relative">
          <span class="icon icon-left material-icons">
            star
          </span>
          <textarea class="form-input" placeholder="Placeholder" rows="2"></textarea>
        </div>
        <span class="message">
          Message
        </span>
       </nst-textarea>
    `);
  });

  it('should render textarea component with correct disabled state', async () => {
    const page = await newSpecPage({
      components: [ NstTextarea],
      template: () => (
         <nst-textarea
          disabled={true}
          placeholder="Placeholder"
          label="Label"
          icon_left="star"
          message="Message"
        > </nst-textarea>
      )
    });
    expect(page.root).toEqualHtml(`
       <nst-textarea class="disabled  nst-form-input">
        <div class=" nst-align-items-center  nst-d-flex">
          <label>
            Label
          </label>
        </div>
        <div class="icon-left w-100  nst-align-items-center  nst-d-flex  nst-justify-content-between  nst-position-relative">
          <span class="icon icon-left material-icons">
            star
          </span>
          <textarea class="form-input" disabled="" placeholder="Placeholder" rows="2"></textarea>
        </div>
        <span class="message">
          Message
        </span>
       </nst-textarea>
    `);
  });

  it('should render inline textarea component', async () => {
    const page = await newSpecPage({
      components: [ NstTextarea],
      template: () => (
         <nst-textarea
          disabled={true}
          placeholder="Placeholder"
          label="Label"
          icon_left="star"
          message="Message"
        > </nst-textarea>
      )
    });
    expect(page.root).toEqualHtml(`
       <nst-textarea class="disabled  nst-form-input">
        <div class=" nst-align-items-center  nst-d-flex">
          <label>
            Label
          </label>
        </div>
        <div class="icon-left w-100  nst-align-items-center  nst-d-flex  nst-justify-content-between  nst-position-relative">
          <span class="icon icon-left material-icons">
            star
          </span>
          <textarea class="form-input" disabled="" placeholder="Placeholder" rows="2"></textarea>
        </div>
        <span class="message">
          Message
        </span>
       </nst-textarea>
    `);
  });
});
