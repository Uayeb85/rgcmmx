<template>
    <div class="bg-cover bg-center  h-auto text-white  object-fill" style="background-image: url(https://res.cloudinary.com/uayeb/image/upload/v1599323846/assets/regucom-inicio_wvjaxa.webp)">
       <div class="flex flex-col justify-center md:w-1/2 hero">
          <p class="font-bold text-sm uppercase lg:text-2xl">Building  The Networks Of The Future</p>
          <p class="text-3xl font-bold lg:text-4xl">Soluciones integrales</p>
          <p class="text-2xl mb-10 leading-none lg:text-3xl">para ISP, Telecom y Operadores de cable</p>
          <a href="#" class="bg-red-700 py-4 boton text-white font-bold uppercase text-xs rounded hover:bg-white hover:text-black lg:text-xl lg:text-center">Contacta a un especialista</a>
        </div>  
    </div>
</template>

<script>
export default {
  name: 'Inicio',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


@media only screen and (min-width: 0px)  and (max-width: 768px) {


.hero{
  height:75vh;
  padding-left: 25px;
}

.boton{
  width: 250px !important;
  padding-left: 25px;
}

}

@media only screen and (min-width: 769px)  and (max-width: 2900px) {


.hero{
  height: 90vh;
  padding-left: 25px;
}


.boton{
  width: 450px !important;
}

}

</style>