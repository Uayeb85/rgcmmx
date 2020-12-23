<template>
    <layout>
      <div>
        <section class="text-gray-700 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
              <g-link to="/productos/activos-opticos/" >
                 <button class="flex  text-white bg-black border-0 py-2 px-6 mb-8 focus:outline-none hover:bg-red-700 rounded">Regresar</button>
              </g-link>     

            <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img v-for="img in $page.producto.image" :key="img.id"  :src="img.secure_url" alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded carousel-layout">
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <div class="flex">
                    <h2 v-for="categoria in $page.producto.categoria" :key="categoria.id" class="text-sm title-font text-gray-500 tracking-widest mr-3">
                       <g-link :to="`/productos/${categoria.slug}`"> {{categoria.title}} </g-link> 
                    </h2>
                </div>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{$page.producto.title}}</h1>
                <p class="leading-relaxed">{{$page.producto.fichaTecnica.description}}</p>
                    <div class="flex mt-8 justify-between botones">
                        <g-link :to="$page.producto.fichaTecnica.file.url"> <button class="flex boton  text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded">Ficha Técnica</button> </g-link>
                         <a href="mailto:gustars@regucom.com.mx">
                        <button class="flex  text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded">Contacta a un asesor</button>
                        </a>
                    </div>
                        
            </div>
            </div>
        </div>
        </section>

                   <!-- PRODUCTOS RELACIONADOS -->

        <div class="w-full text-center">
            <h2 class="font-bold text-4xl  text-red-700  sm:pb-8">
                        Productos Relacionados
            </h2>
        </div>
        <div class="container my-1 mx-auto md:px-12">

            <div class="flex flex-wrap -mx-1 lg:-mx-4">

                <!-- Column -->
                <div v-for="relacion in $page.producto.relacion" :key="relacion.id"  class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 pb-12">

                    <!-- Article -->
                    <article class="overflow-hidden rounded-lg shadow-lg">
                        <g-link :to="relacion.path" >
                          <g-image v-for="img in relacion.image" :key="img.id" :src="img.secure_url" alt="Placeholder" class="block  object-cover  w-full h-full md:h-64  "  />
                        </g-link>
        
                        <header class="flex titulo-imagen items-center  leading-tight p-2 md:p-4">
                            <h2 class="text-3xl text-black">
                              {{relacion.title}}
                            </h2>
                        </header>

                        <div class="flex items-center  leading-none p-2 md:p-4">
                            <g-link :to="relacion.path">
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
query Producto ($path: String!) {
  producto: contentfulActopticos(path: $path){
        slug
        image{
          secure_url
        }
        categoria{
          title
          slug
        }
        title
        fichaTecnica{
          description
          file{
            url
          }
        }
        relacion{
          title
          image{
            secure_url
          }
          path
        }

  }
  
}
</page-query>

<script>

</script>

<style scoped>
@media only screen and (min-width: 0px)  and (max-width: 768px) {
.carousel-layout {
  height: 350px;
  width: 350px;
}
.botones{
  display: flex;
  flex-direction: column;
}

.boton{
  margin-bottom: 15px;
}

.titulo-imagen{
    height: 150px;
}


}
@media only screen and (min-width: 769px)  and (max-width: 2900px) {
  .carousel-layout {
  height: auto;
  width: 400px;
}

.titulo-imagen{
    height: 150px;
}


}
</style>