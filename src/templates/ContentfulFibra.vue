<template>
    <layout>
        <h2>{{$page.fibras.title}}</h2>
        <g-image v-for="imagen in $page.fibras.galeria" :src="imagen.file.url" :key="imagen.id" class="galeria"/>
        <div>
          <p> <span class="marca-text"> MARCA</span>  {{$page.fibras.brand.companyName}}</p>
          <h3>Caracteristicas: {{$page.fibras.descripcion}}</h3>
          <p>Calificacion: {{$page.fibras.raiting}} / 5</p>
          <a :href="$page.fibras.fichaTecnica.file.url"> <p>Ficha Tecnica</p> </a>
          <g-image v-for="photo in $page.fibras.photo " :src="photo.secure_url" :key="photo.id" class="imagen" />

          <iframe width="560" height="315" :src="$page.fibras.videolink" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </layout>
</template> 

<page-query>
query Fibras ($path: String!) {
  fibras: contentfulFibra (path: $path) {
    slug
    id
	title
    nombreCorto
    descripcion
    videolink
    raiting
    brand{
      companyName
    }
    galeria{
      id
      file{
        url
      }
    }
    fichaTecnica{
      file{
        url
      }
    }
    photo{
      secure_url
    }
  }
  
}
</page-query>
