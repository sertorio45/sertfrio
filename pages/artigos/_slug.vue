<template>
    <section class="min-vh-100 bg-light justify-content-center align-content-center" id="article-detail">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 v-html="article.titulo"></h1>
            <div v-html="article.content"></div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    async asyncData({ $axios, params }) {
      try {
        const response = await $axios.$get(`/articles?slug=${params.slug}`);
        const article = response.length ? response[0] : null;
        return { article };
      } catch (error) {
        console.error('Error fetching article:', error);
        return { article: null };
      }
    },
    data() {
      return {
        article: {}
      };
    }
  }
  </script>
  
  <style scoped>
  #article-detail {
    padding: 2rem;
  }
  </style>
  