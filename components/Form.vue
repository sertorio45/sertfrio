<template>
  <div class="d-flex align-items-center justify-content-center vh-100 mb-4">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <button @click="$emit('go-back')" class="btn btn-back">Voltar</button>
        </div>
        <div class="col-md-6 gscard-border p-5">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <vs-input label-placeholder="Nome"
                v-model="form.name"
                label="Nome"
                name="name"
                required
                class="mb-4"
              ></vs-input>
              <vs-input label-placeholder="E-mail" placeholder="E-mail"
                v-model="form.email"
                type="email"
                label="Email"
                name="email"
                required
                class="mb-4"
              ></vs-input>
              <vs-select
                v-model="form.area"
                
                placeholder="Selecione o assunto"
                required
                class="mb-4"
              >
                <vs-select-item value="suporte" text="Suporte"></vs-select-item>
                <vs-select-item value="vendas" text="Vendas"></vs-select-item>
                <vs-select-item value="geral" text="Geral"></vs-select-item>
              </vs-select>
              <vs-textarea
                v-model="form.message"
                label="Mensagem"
                name="message"
                placeholder="Digite sua mensagem"
                required
                class="mb-4"
              ></vs-textarea>
              <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { errorMessages } from '~/utils/errors';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        area: '',
        message: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('/gsstudio/api/send-email', this.form);
        this.$vs.notify({
          color: 'success',
          position: 'bottom-right',
          time: 2000,
          text: `<div style="color: white; text-align: center;">Mensagem enviada com sucesso!</div>`
        });
        this.resetForm();
      } catch (error) {
        const errorMessage = errorMessages[error.response?.status] || 'Ocorreu um erro ao enviar a mensagem.';
        console.error('Erro ao enviar a mensagem:', error);
        this.$vs.notify({
          color: 'danger',
          position: 'bottom-right',
          time: 2000,
          text: `<div style="color: white; text-align: center;">${errorMessage}</div>`
        });
      }
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        area: '',
        message: ''
      };
    }
  }
};
</script>

<style scoped>
.btn-back {
  align-self: flex-start;
}
.form-group {
  padding: 5px;
}
.vs-input--label {

}


</style>
