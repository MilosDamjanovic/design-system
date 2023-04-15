import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { NstRadio } from "./radio";
import { NstRadioGroup } from "./radio-group";

describe('Radio button component', () => {
    it('should render unchecked radio button', async () => {
        const page = await newSpecPage({
            components: [NstRadio],
            template: () => (<nst-radio></nst-radio>),
        });
        expect(page.root).toEqualHtml(`
        <nst-radio class="">
      <label>
        <input class="native-input visually-hidden" type="radio">
        <span class="outer-circle"></span>
        <span class="inner-circle"></span>
        <span class=" text"></span>
      </label>
    </nst-radio>
    `);
    });

    it('should render radio button in radio group', async () => {
        const page = await newSpecPage({
            components: [NstRadio, NstRadioGroup],
            template: () => (<nst-radio-group><nst-radio></nst-radio></nst-radio-group>),
        });
        expect(page.root).toEqualHtml(`
        <nst-radio-group>
      <nst-radio class="checked " hidden="">
        <label>
          <input checked="" class="native-input visually-hidden" type="radio">
          <span class="outer-circle"></span>
          <span class="inner-circle"></span>
          <span class=" text"></span>
        </label>
      </nst-radio>
    </nst-radio-group>
    `);
    });

    it('should render disabled radio button group', async () => {
        const page = await newSpecPage({
            components: [NstRadio, NstRadioGroup],
            template: () => (<nst-radio-group disabled={true}><nst-radio></nst-radio></nst-radio-group>),
        });
        expect(page.root).toEqualHtml(`
        <nst-radio-group>
      <nst-radio class="checked disabled" hidden="">
        <label>
          <input checked="" class="native-input visually-hidden" disabled="" type="radio">
          <span class="outer-circle"></span>
          <span class="inner-circle"></span>
          <span class="disabled text"></span>
        </label>
      </nst-radio>
    </nst-radio-group>
    `);
    });

    it('should render single disabled radio button', async () => {
        const page = await newSpecPage({
            components: [NstRadio, NstRadioGroup],
            template: () => (<nst-radio-group><nst-radio disabled={true}></nst-radio></nst-radio-group>),
        });
        expect(page.root).toEqualHtml(`
        <nst-radio-group>
      <nst-radio class="checked disabled" hidden="">
        <label>
          <input checked="" class="native-input visually-hidden" disabled="" type="radio">
          <span class="outer-circle"></span>
          <span class="inner-circle"></span>
          <span class="disabled text"></span>
        </label>
      </nst-radio>
    </nst-radio-group>
    `);
    });

    it('should render radio buttons with correct name', async () => {
        const page = await newSpecPage({
            components: [NstRadio, NstRadioGroup],
            template: () => (<nst-radio-group name={'fancyname'}><nst-radio></nst-radio></nst-radio-group>),
        });
        expect(page.root).toEqualHtml(`
        <nst-radio-group name="fancyname">
      <nst-radio class="checked " hidden="">
        <label>
          <input checked="" name="fancyname" class="native-input visually-hidden" type="radio">
          <span class="outer-circle"></span>
          <span class="inner-circle"></span>
          <span class=" text"></span>
        </label>
      </nst-radio>
    </nst-radio-group>
    `);
    });

    it('should render radio buttons with correct button checked', async () => {
        const page = await newSpecPage({
            components: [NstRadio, NstRadioGroup],
            template: () => (<nst-radio-group name={'fancyname'} value={'option1'}>
                <nst-radio value={'option1'}></nst-radio>
                <nst-radio value={'option2'}></nst-radio>
            </nst-radio-group>),
        });
        expect(page.root).toEqualHtml(`
        <nst-radio-group name="fancyname">
      <nst-radio class="checked" hidden="">
        <label>
          <input checked="" class="native-input visually-hidden" name="fancyname" type="radio" value="option1">
          <span class="outer-circle"></span>
          <span class="inner-circle"></span>
          <span class=" text"></span>
        </label>
      </nst-radio>
      <nst-radio class="" hidden="">
        <label>
          <input class="native-input visually-hidden" name="fancyname" type="radio" value="option2">
          <span class="outer-circle"></span>
          <span class="inner-circle"></span>
          <span class=" text"></span>
        </label>
      </nst-radio>
    </nst-radio-group>
    `);
    });
})
