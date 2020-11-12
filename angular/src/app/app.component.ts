import { Component } from '@angular/core';
import {PRODUCTS} from './mock-products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-stencil';
  products = PRODUCTS;
  events: string[] = [];

  onAddToCart(event): void {
    this.events.push(`Added product ${event.detail}`);
  }
}
