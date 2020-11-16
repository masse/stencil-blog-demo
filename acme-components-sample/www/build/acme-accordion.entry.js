import { r as registerInstance, h, e as Host } from './index-8d853c87.js';

const acmeAccordionCss = "@charset \"UTF-8\";:host{display:block}:host header{position:relative;cursor:pointer;padding:10px;background:#3393d4;color:#fff;border-bottom:2px solid #f2f2f2}:host header:after{position:absolute;content:\"▶\";right:10px;transition:transform 0.5s}:host header.open:after{transform:rotate(90deg)}:host header.open+section{max-height:600px;padding:10px}:host section{overflow:hidden;max-height:0;background:#eee;color:#333}";

const AcmeAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("header", { class: this.open ? 'open' : '', onClick: () => this.open = !this.open }, this.headerText), h("section", null, h("slot", null))));
  }
};
AcmeAccordion.style = acmeAccordionCss;

export { AcmeAccordion as acme_accordion };
