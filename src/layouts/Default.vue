<template>
  <div class="layout">
    <header>
      <nav>
        <NavBar />
      </nav>
    </header>

    <slot/>
      <Contacto />
        <footer >
          <Footer />
        </footer>
  </div>
</template>

<static-query>
query {
  meta: metadata {
    siteName
  }
}
</static-query>



<script>

import NavBar from '~/components/NavBar.vue'
import Contacto from '~/components/Contacto.vue'
import Footer from '~/components/Footer.vue'



export default {
  components:{
    NavBar,
    Contacto,
    Footer
  }  
}
</script>


