<template>
  <div>
    <h1>Using &lt;acme-product-card&gt; web component in Vue (2.6)</h1>
    <div class="products">
      <acme-product-card v-for="product in products" :key="product.pid" :pid="product.pid" :price="product.price" :badge="product.badge"
                         :name="product.name" :desc="product.desc" :image-src="product.imageSrc" @addToCart="addedToCart">

      </acme-product-card>

    </div>
    <ul id="events">Vue parent component events:
      <li v-for="(item, index) in events" :key="index">
        &#x2192; {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
  import {PRODUCTS} from "./products-mock";

  export default {
    name: 'HelloWorld',
    data: () => {
      return {
        events: [],
        products: PRODUCTS
      }
    },
    props: {
      msg: String
    },
    methods: {
      addedToCart(e) {
        this.events.push(`Added product ${e.detail}`)
      }
    }
  }
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  .products {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  ul {
    list-style: none;
  }

</style>
