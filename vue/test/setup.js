import Vue from 'vue'
import {applyPolyfills, defineCustomElements} from "acme-components-sample/loader";



Vue.config.ignoredElements = [/acme-\w*/];
applyPolyfills().then(() => {
  defineCustomElements();
});