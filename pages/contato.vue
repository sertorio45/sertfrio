<template>
  <DefaultLayout>
    <section class="contact-section d-flex align-items-center justify-content-center vh-100">
      <div class="container">
        <div class="text-center mb-4">
          <h1>Contato</h1>
          <p>Selecione como quer falar conosco.</p>
        </div>
        
        <div class="row justify-content-center text-center" v-if="!currentComponent">
          <div class="col mb-3">
            <button @click="showComponent('Form')" class="btn btn-primary btn-block">Formulário tradicional</button>
            <button @click="showComponent('TypebotContact')" class="btn btn-primary btn-block">Formulário interativo</button>
          </div>
        </div>
        <div v-else>
          <transition name="fade" mode="out-in">
            <component :is="currentComponent" @go-back="resetComponent" />
          </transition>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/layouts/DefaultLayout.vue'
import Form from '~/components/Form.vue'
import TypebotContact from '~/components/TypebotContact.vue'

export default {
  components: {
    DefaultLayout,
    Form,
    TypebotContact
  },
  data() {
    return {
      currentComponent: null
    }
  },
  methods: {
    showComponent(component) {
      this.currentComponent = component;
    },
    resetComponent() {
      this.currentComponent = null;
    }
  }
}
</script>

<style scoped>
/* Adicione seus estilos aqui, se necessário */
</style>
