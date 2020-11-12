import {AppPage} from './app.po';
import {browser, by, element, logging} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the 2 cards', async () => {
    page.navigateTo();
    const cards = await browser.findElements(by.tagName('acme-product-card'));
    expect(cards.length).toEqual(2);
    expect(cards[0].getAttribute('badge')).toEqual('Just in!');

  });

  it('should handle addToCard click', async () => {
    page.navigateTo();

    // Click Add to cart button on first card
    element.all((by.shadowDomCss('button'))).then(buttons => buttons[0].click());

    // App component should have received custom event and added a event log item
    expect(element.all(by.css('#events > li')).first().getText()).toContain('Added product 12333');

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
