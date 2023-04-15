import { html } from 'lit-html';

export const ListSelect = ({
  item_title,
  description,
  disable_single,
  value,
  has_checkbox,
  disabled
}) => {
  return html`
    <nst-list-select value=${value} disabled=${disabled}>
      <nst-list-select-item
        slot="nst-list-select-item"
        item_title="${item_title}"
        description="${description}"
        value="option1"
      >
        <nst-chip
            slot="chip"
            text="Active"
            dark="true"
            color="info"
            small="true"
        >
        </nst-chip>
      </nst-list-select-item>
        
      <nst-list-select-item
        slot="nst-list-select-item"
        item_title="${item_title}"
        description="${description}"
        has_checkbox="${has_checkbox}"
        value="option2"
      >
        <span slot="icon" class="icon material-icons">home</span>
      </nst-list-select-item>
      
      <nst-list-select-item
        slot="nst-list-select-item"
        item_title="${item_title}"
        description="${description}"
        has_checkbox="${has_checkbox}"
        value="option3"
        disabled=${disable_single}
      >
      </nst-list-select-item>
    </nst-list-select>
  `;
};
