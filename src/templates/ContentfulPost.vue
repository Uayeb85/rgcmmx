<template>
    <layout>

            <div class="pt-8 pb-8">
                <div class="w-full text-center">
                    <h2 class="font-bold text-5xl  text-red-700  sm:pb-8">
                        {{$page.post.title}}
                    </h2>
                </div>
                <div class="flex justify-center">
                    <g-image v-for="imagen in $page.post.imagenPortada" :src="imagen.secure_url" :key="imagen.id" class="p-10"/>
                </div>
            </div>

    </layout>
</template>

<page-query>
query Post ($path: String!) {
  post: contentfulPost (path: $path) {
    slug
    id
	title
    descripcion
    imagenPortada{
        secure_url
    }
  }
  
}
</page-query