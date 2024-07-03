export const state = () => ({
    articles: []
  });
  
  export const mutations = {
    SET_ARTICLES(state, articles) {
      state.articles = articles;
    }
  };
  
  export const actions = {
    async fetchArticles({ commit }) {
      try {
        const response = await this.$axios.$get('/articles', {
          params: {
            tenant: process.env.VITE_STRAPI_TENANT_ID
          }
        });
        commit('SET_ARTICLES', response);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }
  };
  
  export const getters = {
    getArticles: state => state.articles
  };
  