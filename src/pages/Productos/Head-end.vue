<template>
    <layout>
        <div class="w-full text-center">
            <h2 class="font-bold text-5xl  text-red-700  sm:pb-8">
                        Head End
            </h2>
        </div>
        <div>

                <div class="container my-12 mx-auto px-4 md:px-12" >

                    <div class="flex flex-wrap -mx-1 lg:-mx-4">

                        <!-- Column -->
                        <div v-for="producto in $page.productos.edges" :key="producto.id" class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 pb-12">

                            <!-- Article -->
                            <article class="overflow-hidden rounded-lg shadow-lg ">
                                <g-link :to="`/productos/head-end/${producto.node.slug}`">
                                <g-image v-for="imagen in producto.node.image" :key="imagen.id" :src="imagen.secure_url" alt="Placeholder" class="block h-64 w-full object-cover"  />
                                </g-link>
                
                                <header class="flex items-center titulo-imagen  leading-tight p-2 md:p-4">
                                    <h2 class="text-3xl text-black">
                                        {{producto.node.title}}
                                    </h2>
                                </header>

                                <div class="flex items-center  leading-none p-2 md:p-4">
                                    <g-link :to="`/productos/head-end/${producto.node.slug}`">  
                                        <button class="px-4 py-3 bg-red-700 text-lg text-white  rounded hover:bg-white hover:text-red-700">
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
        </div>

    </layout>
</template>

<page-query>
query{
 productos: allContentfulCrc (sortBy: "date", order: ASC){
    edges{
      node{
        title
        slug
        image{
            secure_url
        }
      }
    }
  }
}
</page-query>


<script>
export default {
      metaInfo: {
        title: 'Head End - REGUCOM'
      },
}
</script>

<style scoped>

.titulo-imagen{
    height: 150px;
}


</style>