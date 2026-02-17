import { newSpecPage } from '@stencil/core/testing';
import { ApAmbulanceWlList } from '../ap-ambulance-wl-list';

describe('ap-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ApAmbulanceWlList],
      html: `<ap-ambulance-wl-list></ap-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as ApAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
