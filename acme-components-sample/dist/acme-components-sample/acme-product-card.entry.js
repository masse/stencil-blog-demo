import { r as registerInstance, f as createEvent, h, e as Host } from './index-8d853c87.js';

const acmeProductCardCss = ":host{display:block;all:initial;font-family:Helvetica, Arial, sans-serif}:host .card{width:380px;position:relative;box-shadow:0 5px 7px #c7c7c7;margin:50px auto;background:#fafafa}:host .card .badge{position:absolute;left:0;top:20px;text-transform:uppercase;font-size:13px;font-weight:700;background:red;color:#fff;padding:3px 10px}:host .card .tumb{display:flex;align-items:center;justify-content:center;height:300px;padding:10px;background:#f0f0f0}:host .card .tumb img{max-width:100%;max-height:100%}:host .card .details{padding:30px}:host .card .details h4{font-weight:500;display:block;margin-bottom:18px;text-transform:uppercase;color:#363636}:host .card .details p{font-size:15px;line-height:22px;margin-bottom:18px;color:#999}:host .card .bottom-details{overflow:hidden;border-top:1px solid #eee;padding-top:20px}:host .card .bottom-details>div{float:left;width:50%}:host .card .price{font-size:18px;color:#fbb72c;font-weight:600}:host .card .actions{text-align:right}:host .card .actions button{box-shadow:0 3px 11px 1px #ffffff;background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);background-color:#f9f9f9;border-radius:24px;border:1px solid #dcdcdc;display:inline-block;cursor:pointer;color:#666666;outline:none;font-size:17px;font-weight:bold;padding:10px 24px;text-decoration:none;margin-bottom:1px}:host .card .actions button:hover{background:linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);background-color:#e9e9e9;border-color:#acacac}:host .card .actions button:active{position:relative;top:1px}";

const AcmeProductCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.addToCart = createEvent(this, "addToCart", 7);
  }
  render() {
    const { pid, name, desc, imageSrc, price, badge, addToCart } = this;
    return (h(Host, null, h("div", { class: "card" }, badge && h("div", { class: "badge" }, badge), h("div", { class: "tumb" }, h("img", { src: imageSrc, alt: "" })), h("div", { class: "details" }, h("h4", null, name), h("p", null, desc), h("div", { class: "bottom-details" }, h("div", { class: "price" }, "$", price), h("div", { class: "actions" }, h("button", { onClick: () => addToCart.emit(pid) }, "Add to Cart")))))));
  }
};
AcmeProductCard.style = acmeProductCardCss;

export { AcmeProductCard as acme_product_card };
