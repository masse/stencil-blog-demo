import {Component, Event, EventEmitter, h, Host, Prop} from '@stencil/core';

@Component({
  tag: 'acme-product-card',
  styleUrl: 'acme-product-card.scss',
  shadow: true,
})
export class AcmeProductCard {
  @Prop() pid: string;
  @Prop() name: string;
  @Prop() desc: string;
  @Prop() imageSrc: string;
  @Prop() price: number;
  @Prop() badge: string;
  @Event() addToCart: EventEmitter<string>;

  render() {
    const {pid, name, desc, imageSrc, price, badge, addToCart} = this;
    return (
        <Host>
          <div class="card">
            {badge && <div class="badge">{badge}</div>}
            <div class="tumb">
              <img src={imageSrc} alt=""></img>
            </div>
            <div class="details">
              <h4>{name}</h4>
              <p>{desc}</p>
              <div class="bottom-details">
                <div class="price">${price}</div>
                <div class="actions">
                  <button onClick={() => addToCart.emit(pid)}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </Host>
    );
  }

}
