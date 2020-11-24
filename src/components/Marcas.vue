<template>
    <section>
    <div>
       <div v-for="logo in marca.cloudinaryImage" :key="logo.title">
        <img :src="logo.secure_url" :alt="marca.title" style="width: 100px" />
       </div>
    </div>
    </section>

</template>


<script>
export default {
  name: 'Marcas',
  props: {
    marca:{}
  }
}
</script>

