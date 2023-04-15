import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { NstSelectOption } from './select-option';

describe('Select option component', () => {
  it('should render select option component with correct value, label and description', async () => {
    const page = await newSpecPage({
      components: [NstSelectOption],
      template: () => (
        <nst-select-option option={{ value: '1', label: 'Label', description: 'Description' }}></nst-select-option>
      )
    });
    expect(page.root).toEqualHtml(`
    <nst-select-option class="option-item with-description" name="option-1" tabindex="0">
      <div class="option-item-left">
        <div class="text-section">
          <div class="label">
            <div>Label</div>
          </div>
          <div class="description">
            Description
          </div>
        </div>
      </div>
    </nst-select-option>`);
  });

  it('should render select option component with additional link', async () => {
    const page = await newSpecPage({
      components: [NstSelectOption],
      template: () => (
        <nst-select-option
          option={{
            value: '1',
            label: 'Label',
            description: 'Description',
            trailingIcon: { name: 'open_in_new', onClick: () => {} }
          }}
        ></nst-select-option>
      )
    });
    expect(page.root).toEqualHtml(`
    <nst-select-option class="option-item with-description" name="option-1" tabindex="0">
      <div class="option-item-left">
        <div class="text-section">
          <div class="label">
            <div>Label</div>
          </div>
          <div class="description">
            Description
          </div>
        </div>
      </div>
      <a class="material-icons url" tabindex="0">
        open_in_new
      </a>
    </nst-select-option>`);
  });

  it('should render multiple select option component', async () => {
    const page = await newSpecPage({
      components: [NstSelectOption],
      template: () => (
        <nst-select-option
          option={{ value: '1', label: 'Label', description: 'Description' }}
          multiple
          checked
        ></nst-select-option>
      )
    });
    expect(page.root).toEqualHtml(`
    <nst-select-option class="option-item selected with-description" name="option-1" tabindex="0">
      <div class="option-item-left">
        <nst-checkbox tabindex="0" checked></nst-checkbox>
        <div class="text-section">
          <div class="label">
            <div>Label</div>
          </div>
          <div class="description">
            Description
          </div>
        </div>
      </div>
    </nst-select-option>`);
  });
});
