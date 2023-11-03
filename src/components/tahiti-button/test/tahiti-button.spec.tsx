import { newSpecPage } from '@stencil/core/testing';
import { TahitiButton } from '../tahiti-button';

describe('tahiti-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TahitiButton],
      html: `<tahiti-button></tahiti-button>`,
    });
    expect(page.root).toEqualHtml(`
      <tahiti-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tahiti-button>
    `);
  });
});
