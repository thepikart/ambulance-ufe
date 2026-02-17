import { newSpecPage } from '@stencil/core/testing';
import { ApAmbulanceWlList } from '../ap-ambulance-wl-list';

describe('ap-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ApAmbulanceWlList],
      html: `<ap-ambulance-wl-list></ap-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <ap-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ap-ambulance-wl-list>
    `);
  });
});
