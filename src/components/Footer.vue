<template>
    <footer class="bg-red-700 text-white body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <g-link to="/" class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <g-image src="../img/regucom-blanco.png" style="width:90px" />
        <span class="ml-3 text-xl"> <g-image src="../img/nombre-regucom.png" /> </span>
      </g-link>
      <p class="mt-2 text-sm text-white text-center">Building the networks of the future</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-black tracking-widest text-sm mb-3">DIVISIONES</h2>
        <ul class="list-none mb-10">
          <li class="pb-2">
            <g-link to="/productos/" class="text-white hover:text-gray-500">Productos</g-link>
          </li>
          <li class="pb-2">
            <g-link to="/servicios/" class="text-white hover:text-gray-500">Servicios</g-link>
          </li>
          <li class="pb-2">
            <g-link to="/soluciones/" class="text-white hover:text-gray-500">Soluciones</g-link>
          </li>

        </ul>
      </div>
      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-black tracking-widest text-sm mb-3">LO MÁS BUSCADO</h2>
        <ul class="list-none mb-10">
          <li class="pb-2">
            <g-link to="/soluciones/ftth/" class="text-white hover:text-gray-500">FTTH</g-link>
          </li>
          <li class="pb-2">
            <g-link to="/soluciones/datawifi/" class="text-white hover:text-gray-500">WiFi Marketing</g-link>
          </li>
          <li class="pb-2">
            <g-link to="/soluciones/ott/" class="text-white hover:text-gray-500">Solución OTT</g-link>
          </li>
          <li>
            <g-link to="/soluciones/sistema-de-aprovisionamiento-olt/" class="text-white hover:text-gray-500">Sistema de gestión OLT</g-link>
          </li>
        </ul>
      </div>
      <div class="lg:w-1/3 md:w-1/2 w-full px-4" >
        <h2 class="title-font font-medium text-black tracking-widest text-sm mb-3">BLOG</h2>
        <ul class="list-none mb-10">
          <li v-for="post in $static.allContentfulPost.edges.slice(0,3)" :key="post.id" class="pb-4">
            <g-link :to="`/post/${post.node.slug}`" class="text-white hover:text-gray-500">- {{post.node.title}}</g-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="bg-white">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© {{getCurrentYear}} Regucom sa de cv —
        <g-link to="https://www.iamuayeb.com/" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">Diseñada por IAmUayeb</g-link>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <p class="text-gray-500">Hecha con</p>
        <a class="ml-3 text-gray-500">
          <svg fill="#c53030" viewBox="0 -28 512.00002 512" class="w-5 h-5">
              <path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"/>
          </svg>
        </a>
        <p class="text-gray-500 ml-3">en CDMX</p>
      </span>
    </div>
  </div>
</footer>
</template>

<static-query>
  query{
        allContentfulPost (sortBy: "date", order: DESC) {
    edges{
      node{
        slug
        title
    }
  }
}
  }
</static-query>

<script>
export default {
  name: 'Footer',
  computed:{
      getCurrentYear(){
          return new Date().getFullYear()
      }
  }
}
</script>