import { EventEmitter } from '../../stencil-public-runtime';
export declare class AcmeProductCard {
  pid: string;
  name: string;
  desc: string;
  imageSrc: string;
  price: number;
  badge: string;
  addToCart: EventEmitter<string>;
  render(): any;
}
