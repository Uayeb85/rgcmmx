<template>
    <div>      
	<div class="bannerFondo bg-red-700">
	</div>

      <div class="-mt-64 ">
        <div class="w-full text-center">
          <h2 class="font-bold text-5xl  text-white  sm:pb-4">
              Divisiones
          </h2>
        </div>
              
      <div class="flex justify-around flex-wrap">

          <div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
                <div class="px-4 py-2">
                    <h1 class="text-red-700 font-bold text-3xl uppercase">Productos</h1>
                </div>
                    <img class="h-56 w-full object-cover mt-2" src="https://res.cloudinary.com/uayeb/image/upload/v1599316762/assets/regucom-2020_kxk7lh.webp" alt="productos regucom">
                <div class="flex items-center justify-between px-4 py-4 bg-white">
                    <g-link to="/productos/">
                        <button class="px-3 py-1 bg-red-700 text-lg text-white  rounded hover:bg-white hover:text-red-700">Conoce más</button>
                    </g-link>
                </div>
          </div>

         <div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
                <div class="px-4 py-2">
                    <h1 class="text-red-700 font-bold text-3xl uppercase">Servicios</h1>
                </div>
                    <img class="h-56 w-full object-cover mt-2" src="https://res.cloudinary.com/uayeb/image/upload/v1599324704/assets/servicios-regucom_ept3pz.webp" alt="servicios regucom">
                <div class="flex items-center justify-between px-4 py-4 bg-white">
                    <g-link to="/servicios/">
                        <button class="px-3 py-1 bg-red-700 text-lg text-white  rounded hover:bg-white hover:text-red-700">Conoce más</button>
                    </g-link>
                </div>
          </div>

         <div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
                <div class="px-4 py-2">
                    <h1 class="text-red-700 font-bold text-3xl uppercase">Soluciones</h1>
                </div>
                    <img class="h-56 w-full object-cover mt-2" src="https://res.cloudinary.com/uayeb/image/upload/v1599324704/assets/soluciones-regucom_hpmo5n.webp" alt="soluciones regucom">
                <div class="flex items-center justify-between px-4 py-4 bg-white">
                    <g-link to="/soluciones/">
                        <button class="px-3 py-1 bg-red-700 text-lg text-white  rounded hover:bg-white hover:text-red-700">Conoce más</button>
                    </g-link>
                </div>
          </div>

      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'Divisones',
  props: {
  }
}
</script>

<style scoped>
.bannerFondo{
        height: 300px;
}
</style>
