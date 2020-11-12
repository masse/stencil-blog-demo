import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getCardCount(): Promise<number> {
    return element(by.tagName('acme-product-card')).size as Promise<number>;
  }

}
