import {newSpecPage} from '@stencil/core/testing';
import {AcmeProductCard} from '../acme-product-card';

describe('acme-product-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AcmeProductCard],
      html: `<acme-product-card pid="1" badge="badge" name="name" desc="desc" image-src="https://i.imgur.com/xdbHo4E.png" price="10"></acme-product-card>`,
    });

    expect(page.root).toEqualHtml(`
      <acme-product-card badge="badge" desc="desc" image-src="https://i.imgur.com/xdbHo4E.png" name="name" pid="1" price="10">
        <mock:shadow-root>
        <div class="card">
           <div class="badge">
             badge
           </div>
           <div class="tumb">
             <img alt="" src="https://i.imgur.com/xdbHo4E.png">
           </div>
           <div class="details">
             <h4>
               name
             </h4>
             <p>
               desc
             </p>
             <div class="bottom-details">
               <div class="price">
                 $10
               </div>
               <div class="actions">
                 <button>
                   Add to Cart
                 </button>
               </div>
             </div>
           </div>
         </div>
        </mock:shadow-root>
      </acme-product-card>
    `);
  });
});
