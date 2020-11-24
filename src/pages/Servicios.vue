<template>
    <layout>
        <div class="w-full text-center">
            <h2 class="font-bold text-5xl  text-red-700  sm:pb-8">
                        Servicios
            </h2>
        </div>
        
                <!-- Container -->
        <div v-for="servicio in $page.servicios.edges" :key="servicio.id" class="container mt-16 mx-auto p-4 md:p-0">
          
          <!-- Card wrapper -->
          <div class="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
            
            <!-- Card image -->
            <div v-for="imagen in servicio.node.imagen" :key="imagen.id" class="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative imagen-back" :style="{ backgroundImage: 'url(' + imagen.secure_url + ')' }">
            </div>
            <!-- ./Card image -->
            
            <!-- Card body -->
            <div class="bg-white w-full md:w-2/3">
              <!-- Card body - outer wrapper -->
              <div class="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                <!-- Card body - inner wrapper -->
                <div class="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                  <!-- Card title and subtitle -->
                  <div class="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left pb-3">
                    <h3 class="text-red-700 font-bold">{{servicio.node.title}}</h3>
                  </div>
                  <!-- ./Card title and subtitle -->
                  
                  <!-- Card description -->
                  <div class="w-full lg:w-3/5 lg:px-3">
                      <ul v-for="tarea in servicio.node.servicios.regucom.servicios" :key="tarea.id" >
                        <li>{{tarea.Tarea}}</li>
                      </ul>
                  </div>
                  <!-- ./Card description -->
                  
                  <!-- Call to action button -->
                  <div class="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                    <button class="px-2 py-2 bg-red-700 text-lg text-white  rounded hover:bg-white hover:text-red-700">Contáctanos</button>
                  </div>

                  <!-- ./Call to action button -->
                </div>
                <!-- ./Card body - inner wrapper -->
              </div>
              <!-- ./Card body - outer wrapper -->
            </div>
            <!-- ./Card body -->
          </div>
          <!-- ./Card wrapper -->
        </div>
        <!-- ./Container -->
    </layout>
</template>


<page-query>
query{
 servicios: allContentfulServicios{
    edges{
      node{
        title
        slug
        imagen{
          secure_url
        }
        servicios{
          regucom{
            servicios{
              Tarea
            }
          }
        }
      }
    }
  }
}
</page-query>


