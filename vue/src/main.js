import Vue from 'vue'
import App from './App.vue'
import {applyPolyfills, defineCustomElements} from "acme-components-sample/loader";

Vue.config.productionTip = false
Vue.config.ignoredElements = [/acme-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  render: h => h(App),
}).$mount('#app')
