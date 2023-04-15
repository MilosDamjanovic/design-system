import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { NstListSelectItem } from './item/list-select-item';
import { NstListSelect } from './list-select';

describe('List Select Component', () => {
  it('should render unselected item', async () => {
    const page = await newSpecPage({
      components: [NstListSelectItem],
      template: () => (<nst-list-select-item item_title="Primary text"></nst-list-select-item>),
    });
    expect(page.root).toEqualHtml(`
      <nst-list-select-item class="item-body nst-d-flex nst-justify-content-between" tabindex="0">
        <div class="text">
          <div class="title">Primary text</div>
        </div>
      </nst-list-select-item>
    `);
  });
  it('should render list select item in list select', async () => {
    const page = await newSpecPage({
      components: [NstListSelectItem, NstListSelect],
      template: () => (<nst-list-select><nst-list-select-item item_title="Primary text"></nst-list-select-item></nst-list-select>),
    });
    expect(page.root).toEqualHtml(`
      <nst-list-select>
        <nst-list-select-item class="item-body selected nst-d-flex nst-justify-content-between" hidden="" tabindex="0">
          <div class="text">
            <div class="title">Primary text</div>
          </div>
        </nst-list-select-item>
      </nst-list-select>
    `);
  });
  it('should render list select item with checkbox', async () => {
    const page = await newSpecPage({
      components: [NstListSelectItem],
      template: () => (<nst-list-select-item item_title="Primary text" has_checkbox></nst-list-select-item>),
    });
    expect(page.root).toEqualHtml(`
      <nst-list-select-item class="item-body nst-d-flex nst-justify-content-between" tabindex="0">
        <div class="text">
          <div class="title">Primary text</div>
        </div>
        <div class="checkbox single-title">
          <nst-checkbox></nst-checkbox>
        </div>
      </nst-list-select-item>
    `);
  });
  it('should render list select item with chip', async () => {
    const page = await newSpecPage({
      components: [NstListSelectItem],
      template: () => (
        <nst-list-select-item item_title="Primary text">
          <nst-chip
              slot="chip"
              text="Active"
          ></nst-chip>
        </nst-list-select-item>
      ),
    });
    expect(page.root).toEqualHtml(`
      <nst-list-select-item class="item-body nst-d-flex nst-justify-content-between" tabindex="0">
        <div class="text single-title">
          <div class="title">Primary text</div>
        </div>
        <div class="chip">
          <nst-chip slot="chip" text="Active"></nst-chip>
        </div>
      </nst-list-select-item>
    `);
  });
  it('should render disabled list select', async () => {
    const page = await newSpecPage({
      components: [NstListSelectItem, NstListSelect],
      template: () => (<nst-list-select disabled={true}><nst-list-select-item item_title="Primary text"></nst-list-select-item></nst-list-select>),
    });
    expect(page.root).toEqualHtml(`
      <nst-list-select>
        <nst-list-select-item class="item-body disabled selected nst-d-flex nst-justify-content-between" hidden="">
          <div class="text">
            <div class="title">Primary text</div>
          </div>
        </nst-list-select-item>
      </nst-list-select>
    `);
  });
  it('should render single disabled list select item', async () => {
    const page = await newSpecPage({
      components: [NstListSelectItem, NstListSelect],
      template: () => (<nst-list-select><nst-list-select-item item_title="Primary text" disabled={true}></nst-list-select-item></nst-list-select>),
    });
    expect(page.root).toEqualHtml(`
      <nst-list-select>
        <nst-list-select-item class="item-body disabled selected nst-d-flex nst-justify-content-between" hidden="">
          <div class="text">
            <div class="title">Primary text</div>
          </div>
        </nst-list-select-item>
      </nst-list-select>
    `);
  });
  it('should render list select with correct list select item selected', async () => {
    const page = await newSpecPage({
      components: [NstListSelectItem, NstListSelect],
      template: () => (<nst-list-select name={'jackSparrow'} value={'option1'}>
        <nst-list-select-item item_title="Primary text" value={'option1'}></nst-list-select-item>
        <nst-list-select-item item_title="Primary text" value={'option2'}></nst-list-select-item>
      </nst-list-select>),
    });
    expect(page.root).toEqualHtml(`
      <nst-list-select name="jackSparrow">
        <nst-list-select-item class="item-body selected nst-d-flex nst-justify-content-between" hidden="" name="jackSparrow" tabindex="0">
          <div class="text">
            <div class="title">Primary text</div>
          </div>
        </nst-list-select-item>
        <nst-list-select-item class="item-body nst-d-flex nst-justify-content-between" hidden="" name="jackSparrow" tabindex="0">
          <div class="text">
            <div class="title">Primary text</div>
          </div>
        </nst-list-select-item>
      </nst-list-select>
    `);
  });
})
