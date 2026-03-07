import { newE2EPage } from '@stencil/core/testing';

describe('app-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-ambulance-wl-editor></app-ambulance-wl-editor>');

    const element = await page.find('app-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
