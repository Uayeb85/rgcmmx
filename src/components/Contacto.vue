<template>
    <section class="text-gray-700 body-font relative " id="contacto">
        <div class="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
            <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.716785391275!2d-99.1753281855041!3d19.393663998541893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff718f4416e1%3A0x6e35698f0852629c!2sWorld%20Trade%20Center%20Ciudad%20de%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1599588633160!5m2!1ses-419!2smx" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
                    <div class="bg-white relative flex flex-wrap py-6" >
                        <div class="lg:w-1/2 px-6">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm">Oficina</h2>
                            <p class="leading-relaxed">World Trade Center CDMX, Piso 28 Oficina 16</p>
                        </div>
                        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm">Correo</h2>
                            <a class="text-red-700 leading-relaxed text-sm">gustars@regucom.com.mx</a>
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">Teléfonos</h2>
                            <p class="leading-relaxed">55-5696-6690</p>
                            <p class="leading-relaxed">55-5696-6058</p>

                        </div>
                    </div>
            </div>
            <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 class="text-red-700 text-lg mb-1 font-medium title-font">Contáctanos</h2>
                <p class="leading-relaxed mb-5 text-gray-600">Déjanos tus datos y en un momento nos comunicamos contigo</p>
                  <form
                      name="contact"
                      method="post"
                      v-on:submit.prevent="handleSubmit"
                      action="/success/"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                    >
                      <input  type="hidden" name="form-name" value="contact" />
                      <p hidden>
                        <label>
                          Don’t fill this out: <input name="bot-field" />
                        </label>
                      </p>
                      <div class="sender-info">
                        <div >
                          <label for="name" class="label" ></label>
                          <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-red-500 text-base px-4 py-2 mb-4" placeholder="Nombre" type="text" name="name" v-model="formData.name" />
                        </div>
                        <div>
                          <label for="email"></label>
                          <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-red-500 text-base px-4 py-2 mb-4" placeholder="Correo" type="email" name="email" v-model="formData.email" />
                        </div>
                        <div>
                          <label for="telefono"></label>
                          <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-red-500 text-base px-4 py-2 mb-4" placeholder="Teléfono" type="text" name="telefono" v-model="formData.telefono" />
                        </div>
                      </div>

                      <div  class="message-wrapper ">
                        <label  for="message"></label>
                        <textarea placeholder="Mensaje" class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-red-500 text-base px-4 py-2 mb-4 resize-none"  name="message" v-model="formData.message"></textarea>
                      </div>

                      <button class="text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-red-700 rounded text-lg" type="submit">Enviar</button>
                </form>
            </div>

                    
        </div>

    </section>
</template>


<script>
export default {
  data(){
    return{
      formData: {},
    }
  },
  name: 'Contacto',
  props: {
  },
  methods: {
  encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  },
  handleSubmit(e) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
        'form-name': e.target.getAttribute('name'),
        ...this.formData,
      }),
    })
    .then(() => this.$router.push('/exito'))
    .catch(error => alert(error))
  }
}
}
</script>