<template>
            <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden" v-for="{node : post} in post" :key="post.id">
                    <div v-for="imagen in post.imagenPortada" :key="imagen.id">
                        <g-image :src="imagen.secure_url" />
                    </div>
                    <div class="p-6">
                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{post.title}}</h1>
                        <p class="leading-relaxed mb-3">{{post.descripcion}}.</p>
                        <div class="flex items-center flex-wrap ">
                        <g-link :to="`/post/${post.slug}`" class="text-red-700 inline-flex items-center md:mb-2 lg:mb-0">Artículo completo
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </g-link>
                        </div>
                    </div>
                </div> 
            </div>
          
</template>

<script> 
export default {
  name: 'BlogCard',
  props: {
      post:{}
  }
}
</script>

<style scoped>
.bannerFondo{
        height: 300px;
}
</style>
