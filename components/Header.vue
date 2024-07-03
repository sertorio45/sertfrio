<!-- components/Header.vue -->
<template>
  <header :class="['w-100', 'custom-header', { 'scrolled': isScrolled }]">
    <div class="container">
      <div class="row">
        <!-- Coluna da Logo -->
        <div class="col-2 d-flex justify-content-center align-items-center">
          <a href="/" class="d-flex">
            <img src="logotipo.webp" alt="Logo" class="logo"/>
          </a>
        </div>
        
        <!-- Coluna da Navegação -->
        <div class="col-8 d-flex justify-content-center align-items-center">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/">Página inicial</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Sobre nós</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Serviços</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contato">Contato</a>
                  </li>
                </ul>
                <div class="d-lg-none d-flex justify-content-center align-items-center mt-3 mt-lg-0">
                  <button class="btn btn-primary">Click Me</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
        
        <!-- Coluna do Botão -->
        <div class="col-2 d-none d-lg-flex justify-content-center align-items-center">
          <button class="btn btn-primary">Click Me</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    }
  }
}
</script>

<style scoped>
.logo {
  max-width: 100%;
  width: 100%;
  height: auto;
}

.custom-header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  z-index: 1000;
  transition: background-color 0.3s;
}

.custom-header.scrolled {
  background-color: white;
}

.nav-link {
  color: #000000 !important;
}

.nav-link:hover {
  color: var(--color-primary) !important;
}
</style>
