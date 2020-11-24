<template>
    <layout>
        <div class="w-full text-center">
            <h2 class="font-bold text-5xl  text-red-700  sm:pb-8">
                        Soluciones
            </h2>
        </div>
        <section>
            <div v-for="solucion in $page.soluciones.edges" :key="solucion.id" class="px-16 py-8 sm:px-24 sm:py-12  bg-white">
            
            <!-- Carousel Body -->
            <div  class="relative w-64 md:w-11/12 rounded-lg block md:flex items-center shadow-xl" style="min-height: 19rem;">
            <div class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg" style="min-height: 19rem;">
                <img v-for="imagen in solucion.node.imagen" :key="imagen.id" class="absolute inset-0 w-full h-full object-cover object-center" :src="imagen.secure_url" alt="">
            </div>
            <div class="w-full md:w-3/5 h-full flex items-center rounded-lg">
                <div class="p-12 md:pr-24 md:pl-16 md:py-12">
                    <h2 class="text-red-700 font-semibold text-2xl pb-3">{{solucion.node.title}}</h2>
                <p class="text-gray-600 text-left sm:text-justify"><span class="text-red-700">{{solucion.node.nombreCorto}}</span> {{solucion.node.descripcion}}.</p>
                <g-link class="flex items-baseline mt-3 text-red-700 hover:text-black focus:text-black" :to="`/soluciones/${solucion.node.slug}`"> 
                    <span>Conoce más</span>
                    <span class="text-xs ml-1">&#x279c;</span>
                </g-link> 
                </div>
                <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
            </div>
            </div>
             
        
        </div>
        </section> 

    </layout>
</template>

<page-query>
query{
 soluciones: allContentfulSoluciones (sortBy: "date", order: ASC){
    edges{
      node{
        id
        slug
        title
        nombreCorto
        ruta
        descripcion
        imagen{
          secure_url
        }
      }
    }
  }
}

</page-query>