import bodyParser from 'body-parser';

export default {
  // Configurações do cabeçalho da página
  head: {
  title: 'SertFrio - Instalação manutenção e limpeza de ar-condicionado - Sertãozinho e região',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Descrição da GS Studio' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
    ]
  },

  // Configuração de CSS global
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '@/assets/css/main.css',
    'vuesax/dist/vuesax.css', // Vuesax styles
    'material-design-icons-iconfont/dist/material-design-icons.css'
  ],

  // Plugins a serem carregados antes de montar o aplicativo
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' },
    { src: '~/plugins/axios.js', mode: 'client' },
    { src: '~/plugins/vue-smooth-scroll.js', mode: 'client' },
    { src: '~/plugins/vuesax.js', mode: 'client' }
  ],

  // Auto importação de componentes
  components: true,

  // Módulos de build
  buildModules: [],

  // Módulos do Nuxt.js
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ],

  // Configuração do Google Fonts
  googleFonts: {
    families: {
      Poppins: [400, 600]
    },
    display: 'swap'
  },

  // Configuração do Axios
  axios: {
    baseURL: process.env.VITE_STRAPI_URL || 'http://localhost:1337'
  },

  // Configuração do roteamento
  router: {
    base: '/sertfrio/',
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'contato',
          path: '/contato',
          component: resolve(__dirname, 'pages/contato.vue')
        }
      )
    }
  },

  // Configuração de build
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-transform-class-properties', { loose: true }],
        ['@babel/plugin-transform-private-methods', { loose: true }],
        ['@babel/plugin-transform-private-property-in-object', { loose: true }]
      ]
    },
    transpile: []
  },

  // Middleware do servidor
  serverMiddleware: [
    { path: '/api/send-email', handler: '~/server-middleware.js' }
  ]
}
