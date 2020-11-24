<template>
  <Layout>
    <Inicio />
    <Divisiones />

    <section class="pt-8 pb-8">
        <div class="w-full text-center">
          <h2 class="font-bold text-5xl  text-red-700  sm:pb-8">
              Partners
          </h2>
      </div>
        <div class="flex justify-around flex-wrap items-center">
           <Marcas v-for="edge in $page.marcas.edges" :key="edge.node.id" :marca="edge.node"  class="ml-4 mr-4 pb-8"/>
       </div>
    </section>
    <section>
        <div>      
          <div class="bannerFondo bg-red-700">
          </div>
          <div class="-mt-64 ">
              <div class="w-full text-center">
                <h2 class="font-bold text-5xl  text-white  sm:pb-4">
                    Blog
                </h2>
              </div>  
              <div class="flex justify-around flex-wrap">
                <BlogCard :post="$page.posts.edges.slice(0,3)" /> 
              </div>        
          </div> 
       </div>
    </section>



  </Layout>
</template>

<script>
import Inicio from '~/components/Inicio.vue'
import Divisiones from '~/components/Divisiones.vue'
import Marcas from '~/components/Marcas.vue'
import BlogCard from '~/components/BlogCard.vue'


export default {
  metaInfo: {
    title: 'Regucom'
  },
  components:{
    Inicio,
    Divisiones,
    Marcas,
    BlogCard,
  }
}
</script>

<page-query>
query{
  marcas: allContentfulPartners(sortBy: "title" , order: ASC){
    edges{
      node{
        title
        id
        cloudinaryImage{
          secure_url
        }
      }
    }
  }
  
  posts: allContentfulPost (sortBy: "date", order: DESC) {
    edges{
      node{
        slug
        title
        descripcion
        imagenPortada{
          secure_url
        }
      }
    }
  }

}
</page-query>

<style scoped>
.bannerFondo{
        height: 300px;
}
</style>