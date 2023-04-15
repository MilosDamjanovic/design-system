import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { NstAlert } from './alert';

describe('Alert component', () => {
  it('should render alert component with correct title and description', async () => {
    const page = await newSpecPage({
      components: [NstAlert],
      template: () => <nst-alert alert_title="Title" alert_description="Description"></nst-alert>
    });
    expect(page.root).toEqualHtml(`
      <nst-alert class="appearance-filled expanded status-info">
        <div class="alert-content">
          <span class="alert-icon-wrapper space-right"><span class="icon material-icons">info</span></span>
          <div class="alert-body">
              <div class="title-wrapper"><span class="alert-title">Title</span><span class="alert-description">Description</span></div>
              <div class="alert-slot"></div>
          </div>
        </div>
        <div class="alert-right">
            <span class="close-button">
                <span class="icon-close material-icons-outlined">close</span>
            </span>
        </div>
      </nst-alert>
    `);
  });

  it('should render alert component with correct info status', async () => {
    const page = await newSpecPage({
      components: [NstAlert],
      template: () => <nst-alert status="info" alert_title="Title" alert_description="Description"></nst-alert>
    });
    expect(page.root).toEqualHtml(`
      <nst-alert class="appearance-filled expanded status-info">
        <div class="alert-content">
          <span class="alert-icon-wrapper space-right"><span class="icon material-icons">info</span></span>
          <div class="alert-body">
              <div class="title-wrapper"><span class="alert-title">Title</span><span class="alert-description">Description</span></div>
              <div class="alert-slot"></div>
          </div>
        </div>
        <div class="alert-right">
            <span class="close-button">
                <span class="icon-close material-icons-outlined">close</span>
            </span>
        </div>
      </nst-alert>
    `);
  });

  it('should render alert component with correct success status', async () => {
    const page = await newSpecPage({
      components: [NstAlert],
      template: () => <nst-alert status="success" alert_title="Title" alert_description="Description"></nst-alert>
    });
    expect(page.root).toEqualHtml(`
      <nst-alert class="appearance-filled expanded status-success">
        <div class="alert-content">
          <span class="alert-icon-wrapper space-right"><span class="icon material-icons">check_circle</span></span>
          <div class="alert-body">
              <div class="title-wrapper"><span class="alert-title">Title</span><span class="alert-description">Description</span></div>
              <div class="alert-slot"></div>
          </div>
        </div>
        <div class="alert-right">
            <span class="close-button">
                <span class="icon-close material-icons-outlined">close</span>
            </span>
        </div>
      </nst-alert>
    `);
  });

  it('should render alert component with correct warning status', async () => {
    const page = await newSpecPage({
      components: [NstAlert],
      template: () => <nst-alert status="warning" alert_title="Title" alert_description="Description"></nst-alert>
    });
    expect(page.root).toEqualHtml(`
      <nst-alert class="appearance-filled expanded status-warning">
        <div class="alert-content">
          <span class="alert-icon-wrapper space-right"><span class="icon material-icons">warning</span></span>
          <div class="alert-body">
              <div class="title-wrapper"><span class="alert-title">Title</span><span class="alert-description">Description</span></div>
              <div class="alert-slot"></div>
          </div>
        </div>
        <div class="alert-right">
            <span class="close-button">
                <span class="icon-close material-icons-outlined">close</span>
            </span>
        </div>
      </nst-alert>
    `);
  });

  it('should render alert component with correct danger status', async () => {
    const page = await newSpecPage({
      components: [NstAlert],
      template: () => <nst-alert status="danger" alert_title="Title" alert_description="Description"></nst-alert>
    });
    expect(page.root).toEqualHtml(`
      <nst-alert class="appearance-filled expanded status-danger">
        <div class="alert-content">
          <span class="alert-icon-wrapper space-right"><span class="icon material-icons">dangerous</span></span>
          <div class="alert-body">
              <div class="title-wrapper"><span class="alert-title">Title</span><span class="alert-description">Description</span></div>
              <div class="alert-slot"></div>
          </div>
        </div>
        <div class="alert-right">
            <span class="close-button">
                <span class="icon-close material-icons-outlined">close</span>
            </span>
        </div>
      </nst-alert>
    `);
  });

  it('should render alert component with correct neutral status and comment underneath the title', async () => {
    const page = await newSpecPage({
      components: [NstAlert],
      template: () => <nst-alert status="neutral" comment_break_line={true} alert_title="Title" alert_description="Description"></nst-alert>
    });
    expect(page.root).toEqualHtml(`
      <nst-alert class="appearance-filled expanded status-neutral">
        <div class="alert-content">
          <span class="alert-icon-wrapper space-right"><span class="icon material-icons">lightbulb_outline</span></span>
          <div class="alert-body">
              <div class="title-wrapper break-line"><span class="alert-title">Title</span>
                <span class="alert-description">Description</span>
              </div>
              <div class="alert-slot"></div>
          </div>
        </div>
        <div class="alert-right">
            <span class="close-button">
                <span class="icon-close material-icons-outlined">close</span>
            </span>
        </div>
      </nst-alert>
    `);
  });

  it('should render alert component with correct danger status and appearance', async () => {
    const page = await newSpecPage({
      components: [NstAlert],
      template: () => (
        <nst-alert appearance="outline" status="danger" alert_title="Title" alert_description="Description"></nst-alert>
      )
    });
    expect(page.root).toEqualHtml(`
      <nst-alert class="appearance-outline expanded status-danger">
        <div class="alert-content">
          <span class="alert-icon-wrapper space-right"><span class="icon material-icons">dangerous</span></span>
          <div class="alert-body">
              <div class="title-wrapper"><span class="alert-title">Title</span><span class="alert-description">Description</span></div>
              <div class="alert-slot"></div>
          </div>
        </div>
        <div class="alert-right">
            <span class="close-button">
                <span class="icon-close material-icons-outlined">close</span>
            </span>
        </div>
      </nst-alert>
    `);
  });
  it('should render alert component with Content', async () => {
    const page = await newSpecPage({
      components: [NstAlert],
      template: () => (
        <nst-alert alert_title="Title" expandable={true} closeable={false}>
          <h1>Hello World</h1>
        </nst-alert>
      )
    });
    expect(page.root).toEqualHtml(`
      <nst-alert class="appearance-filled expanded status-info">
        <div class="alert-content"><span class="alert-icon-wrapper space-right"><span
            class="icon material-icons">info</span></span>
            <div class="alert-body">
                <div class="title-wrapper"><span class="alert-title">Title</span></div>
                <div class="alert-slot">
                    <h1>Hello World</h1>
                </div>
            </div>
        </div>
        <div class="alert-right">
            <span class="expand-button"><span class="expand-text">Hide all</span>
            <span class="icon-expand material-icons">expand_less</span></span>
        </div>
      </nst-alert>
    `);
  });
});
