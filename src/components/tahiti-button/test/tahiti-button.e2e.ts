import { newE2EPage } from '@stencil/core/testing';

describe('tahiti-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tahiti-button></tahiti-button>');

    const element = await page.find('tahiti-button');
    expect(element).toHaveClass('hydrated');
  });
});
