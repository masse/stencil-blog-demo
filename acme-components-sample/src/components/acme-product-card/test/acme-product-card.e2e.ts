import { newE2EPage } from '@stencil/core/testing';

describe('acme-product-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<acme-product-card pid="1" badge="badge" name="name" desc="desc" image-src="/bag-1.png" price="10"></acme-product-card>');

    const element = await page.find('acme-product-card');
    expect(element).toHaveClass('hydrated');


    const image = await page.find('acme-product-card >>> img');
    expect(image.getAttribute('src')).toEqual('/bag-1.png');
  });
});
