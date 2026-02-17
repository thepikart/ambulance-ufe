import { newE2EPage } from '@stencil/core/testing';

describe('ap-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ap-ambulance-wl-list></ap-ambulance-wl-list>');

    const element = await page.find('ap-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
