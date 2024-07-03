<template>
    <!-- Blog e Aprenda Conosco -->
    <section class="min-vh-100 justify-content-center align-content-center" id="blog-index">
      <div class="container">
        <div class="row">
          <h2 class="text-center py-5">Blog</h2>
          <div class="col">
            <div class="row d-flex gscard">
              
              <article 
                v-for="article in articles" 
                :key="article.id" 
                class="col-12 col-sm-6 col-md-3"
              >
                <div class="row">
                  <picture>
                    <source :srcset="`${baseURL}${article.thumb.formats.medium.url}`">
                    <img :src="`${baseURL}${article.thumb.formats.medium.url}`" class="img-fluid pb-2" :alt="article.titulo">
                  </picture>
                  <h4 class="pt-2">
                     <div class="mb-3"><span v-html="article.category.title" class="article-category"></span></div>
                    <nuxt-link :to="`/artigos/${article.slug}`">{{ article.titulo }}</nuxt-link>
                  </h4>
                  <div v-html="article.content"></div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Blog e Aprenda Conosco -->
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters('articles', ['getArticles']),
      articles() {
        return this.getArticles;
      }
    },
    methods: {
      ...mapActions('articles', ['fetchArticles'])
    },
    async created() {
      await this.fetchArticles();
    },
    data() {
      return {
        baseURL: process.env.VITE_STRAPI_URL
      }
    }
  }
  </script>
  
  <style scoped>
  #blog-index a {
    font-size: 1rem !important;
    color: #000 !important;
    text-decoration: none;
  }
  #blog-index a:hover {
    font-size: 1rem !important;
    text-decoration: underline;
    color: #000 !important;
  }
  #blog-index {
    font-size: 12px;
    color: #7a7a7a;
  }

  .article-category {
    font-weight: normal;
    border-radius: 100px;
    border: 10px #000;
    font-size: 10px;
    padding: 3px 10px 3px 10px; 
    background-color: #f4eaff;
    color: var(--color-secondary);
  }
  </style>
  