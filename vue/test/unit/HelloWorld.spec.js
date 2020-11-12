import {shallowMount} from "@vue/test-utils";
import HelloWorld from "../../src/components/HelloWorld";
import {PRODUCTS} from "../../src/components/products-mock";


describe('HelloWorld', () => {
  const wrapper = shallowMount(HelloWorld, {
    propsData: {
      msg: "Hi",
    }
  });
  it('renders 2 acme-product-cards', async () => {

    const firstCard = await wrapper.findAll(`acme-product-card`).at(0)

    expect(firstCard.element.getAttribute("pid")).toContain(PRODUCTS[0].pid)

  })
})