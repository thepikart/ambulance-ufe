import { newSpecPage } from '@stencil/core/testing';
import { AppAmbulanceWlApp } from '../app-ambulance-wl-app';

describe('app-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [AppAmbulanceWlApp],
      html: `<app-ambulance-wl-app base-path="/"></app-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("app-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [AppAmbulanceWlApp],
      html: `<app-ambulance-wl-app base-path="/ambulance-wl/"></app-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("app-ambulance-wl-list");
  });
});