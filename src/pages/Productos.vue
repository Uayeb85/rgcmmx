<template>
    <layout>
        <div class="w-full text-center">
            <h2 class="font-bold text-5xl  text-red-700  sm:pb-8">
                        Productos
            </h2> 
        </div>
        <div class="container my-12 mx-auto px-4 md:px-12">

            <div class="flex flex-wrap -mx-1 lg:-mx-4">

                <!-- Column -->
                <div v-for="producto in $page.allContentfulProductos.edges" :key="producto.id" class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 pb-12">

                    <!-- Article -->
                    <article class="overflow-hidden rounded-lg shadow-lg">
                        <g-link :to="`/productos/${producto.node.slug}`">
                          <g-image v-for="imagen in producto.node.imagen" :key="imagen.id" alt="Placeholder" class="block h-64 w-full" :src="imagen.secure_url" />
                        </g-link>
        
                        <header class="flex items-center  leading-tight p-2 md:p-4">
                            <h2 class="text-3xl text-black">
                              {{producto.node.title}}
                            </h2>
                        </header>

                        <div class="flex items-center  leading-none p-2 md:p-4">
                            <g-link :to="`/productos/${producto.node.slug}`">
                                <button class="px-4 py-1 bg-red-700 text-lg text-white  rounded hover:bg-white hover:text-red-700">
                                  Conoce más
                                </button>
                            </g-link>
                        </div>

                    </article>
                    <!-- END Article -->

                </div>
                <!-- END Column -->

            </div>
        </div>

    </layout>
</template> 


<page-query>
query{
  allContentfulProductos (sortBy: "date", order: ASC){
    edges{
      node{
        title
        slug
        ruta
        imagen{
          secure_url
        }
      }
    }
  }
}
</page-query>

<style scoped>



</style>