import { newE2EPage } from '@stencil/core/testing';

describe('app-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-ambulance-wl-app></app-ambulance-wl-app>');

    const element = await page.find('app-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
