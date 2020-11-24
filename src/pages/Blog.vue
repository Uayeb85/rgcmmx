<template>
    <layout>
        <div class="w-full text-center">
            <h2 class="font-bold text-5xl  text-red-700  sm:pb-8">
                        Blog
            </h2>
        </div>
        <div class="flex justify-around flex-wrap">
            <BlogCard :post="$page.posts.edges" /> 
        </div>   
    </layout>
</template>

<page-query>
query{ 
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

<script>
import BlogCard from '~/components/BlogCard.vue'

export default {
      metaInfo: {
        title: 'Blog'
      },
      components:{
          BlogCard
      }
}
</script>