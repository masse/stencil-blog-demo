import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {PRODUCTS} from './mock-products';

describe('AppComponent', () => {
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-stencil'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-stencil');
  });

  it('should render the 2 acme-product-card web components', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const cards = compiled.querySelectorAll('acme-product-card');
    expect(cards.length).toEqual(2);
    expect(cards[0].getAttribute('badge')).toEqual(PRODUCTS[0].badge);
    expect(cards[0].getAttribute('price')).toEqual(PRODUCTS[0].price);

  });

  it('should handle acme-product-card dispatched addToCard event', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    const {events} = fixture.componentInstance;

    expect(events.length).toEqual(0);

    // Dispatch custom event from the first of the two acme-product-cards
    const card = await compiled.querySelectorAll('acme-product-card')[0];
    card.dispatchEvent(new CustomEvent('addToCart', {detail: '111'}));

    expect(events.length).toEqual(1);
    expect(events[0]).toContain('111');

  });
});
