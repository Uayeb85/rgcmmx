// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require ("~/css/main.css");
require("typeface-montserrat")

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {


  Vue.component('Layout', DefaultLayout)
}
