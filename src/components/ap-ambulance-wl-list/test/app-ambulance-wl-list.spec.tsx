import { newSpecPage } from '@stencil/core/testing';
import { AppAmbulanceWlList } from '../app-ambulance-wl-list';

describe('app-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppAmbulanceWlList],
      html: `<app-ambulance-wl-list></app-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as AppAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
