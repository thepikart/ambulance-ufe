import { newE2EPage } from '@stencil/core/testing';

describe('app-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-ambulance-wl-list></app-ambulance-wl-list>');

    const element = await page.find('app-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
