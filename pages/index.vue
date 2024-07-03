<template>
  <DefaultLayout>
    <main>
      <!-- Topo -->
      <section class="d-flex align-items-center min-vh-100" id="index">
        <div class="container-fluid bg-img d-flex flex-column justify-content-center align-items-center text-center">
          <div class="row text-topo">
            <div class="col">
              <h1><em>Aqui vai a frase principal</em></h1>
              <p class="my-4">Aqui vai outra frase</p>
              <div class="d-flex justify-content-center">
                <button @click="scrollToElement('#sobre')" class="btn btn-primary">Conheça nossos serviços</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Topo -->

     <!-- Quem somos -->
      <section class="d-flex align-items-center bg-light py-5" id="sobre">
          <div id="sec_services" class="container text-center">
            <div class="row align-items-center">
              <!-- Serviços residenciais -->
              <div class="col-6 p-5">
                <img src="https://placehold.co/350x350" alt="Sobre a empresa" class="img-fluid">
                <h2>Serviços residenciais</h2>
                <p>
                  Lorem Ipsum é simplesmente uma simulação de texto da indústria
                  tipográfica e de impressos, e vem sendo utilizado.
                </p>
                <button type="button" class="btn btn-primary">Conheça nossos serviços</button>
              </div>
              <!-- Serviços comerciais -->
              <div class="col-6 p-5">
                <img src="https://placehold.co/350x350" alt="Sobre a empresa" class="img-fluid">
                <h2>Serviços comerciais</h2>
                <p>
                  Lorem Ipsum é simplesmente uma simulação de texto da indústria
                  tipográfica e de impressos, e vem sendo utilizado.
                </p>
                <button type="button" class="btn btn-primary">Conheça nossos serviços</button>
              </div>
            </div>
          </div>
        </section>
      <!-- Quem somos -->


      <!-- Conquistas -->
      <section class="py-5 text-center" id="conquistas">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-3">
              <div class="gscard gscard-border">
                <h3><em>+ de <em class="count" data-count="65">0</em></em></h3>
                <span>Sites produzidos</span>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
              <div class="gscard gscard-border">
                <h3><em>+ de <em class="count" data-count="250">0</em></em></h3>
                <span>Clientes ativos</span>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
              <div class="gscard gscard-border">
                <h3><em>+ de <em class="count" data-count="80">0</em></em></h3>
                <span>Marcas desenvolvidas</span>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
              <div class="gscard gscard-border">
                <h3><em>+ de <em class="count" data-count="7">0</em></em></h3>
                <span>Anos de mercado</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Conquistas -->

      <!-- Parceiros -->
      <section class="bg-light min-vh-50 align-content-center justify-content-center" id="parceiros">
        <div class="container text-center">
          <div class="row">
            <h2>Parceiros e clientes</h2>
            <div id="app">
              <div class="col">
                <!-- <carousel></carousel> -->
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Parceiros -->

      <!-- Solucoes e servicos -->
      <section class="min-vh-100 align-content-center justify-content-center" id="servicos">
        <div class="container text-center">
          <div class="row justify-content-center align-content-center">
            <h2>Soluções e serviços</h2>
            <p class="my-3">
              A GS STUDIO está comprometida com resultados. Acreditamos que a criatividade e o design, 
              alinhados com uma estratégia eficaz, geram resultados melhores e duradouros. 
            </p>
            <div class="row mt-3">
              <div class="col-12 col-sm-6 col-md-3">
                <div class="gscard gscard-border">
                  <img :src="sitesIcon" class="img-fluid p-3" alt="Sites" loading="lazy" />
                  <h3>Sites</h3>
                  <span><a href="#none">Saiba mais</a></span>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-3">
                <div class="gscard gscard-border">
                  <img :src="socialMediaIcon" class="img-fluid p-3" alt="Redes sociais" loading="lazy" />
                  <h3>Redes sociais</h3>
                  <span><a href="#none">Saiba mais</a></span>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-3">
                <div class="gscard gscard-border">
                  <img :src="ecommerceIcon" class="img-fluid p-3" alt="Lojas virtuais" loading="lazy" />
                  <h3>Lojas virtuais</h3>
                  <span><a href="#none">Saiba mais</a></span>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-3">
                <div class="gscard gscard-border">
                  <img :src="brandingIcon" class="img-fluid p-3" alt="Marcas" loading="lazy" />
                  <h3>Marcas</h3>
                  <span><a href="#none">Saiba mais</a></span>
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col"><button @click="scrollToElement('#none')" class="btn btn-primary"> Veja mais serviços</button></div>
            </div>
          </div>
        </div>
      </section>
      <!-- Solucoes e servicos -->

      <!-- CTA -->
      <section class="min-vh-50 text-center gscard" id="cta">
        <div class="container justify-content-center align-content-center bg-cta">
          <div class="row">
            <div class="col text-light">
              <h2 class="text-light">Transforme Resultados com Design, Marketing e Tecnologia!</h2>
              <div class="subheadline d-flex justify-content-center py-2">
                <p>Potencialize seu negócio com soluções criativas e inovadoras. Nós entregamos resultados excepcionais através de estratégias personalizadas e tecnologia de ponta.</p>
              </div>
              <button @click="scrollToElement('#none')" class="btn btn-white"><em>Começar orçamento</em></button>  
            </div>
          </div>
        </div>
      </section>
      <!-- CTA -->

      <!-- Blog e Aprenda Conosco -->
      <BlogComponent />
      <!-- Blog e Aprenda Conosco -->
    </main>
  </DefaultLayout>
</template>


<script>
import DefaultLayout from '~/layouts/DefaultLayout.vue'
import designIcon from '~/static/icons/icon-design.svg'
import marketingIcon from '~/static/icons/icon-marketing.svg'
import technologyIcon from '~/static/icons/icon-tecnologia.svg'
import sitesIcon from '~/static/icons/servicos/sites.svg'
import socialMediaIcon from '~/static/icons/servicos/gestao_de_conteudo.svg'
import ecommerceIcon from '~/static/icons/servicos/lojas_virtuais.svg'
import brandingIcon from '~/static/icons/servicos/branding.svg'

export default {
  name: 'IndexPage',
  components: {
    DefaultLayout,
    BlogComponent: () => import('~/components/BlogComponent.vue'),
  },
  data() {
    return {
      designIcon,
      marketingIcon,
      technologyIcon,
      sitesIcon,
      socialMediaIcon,
      ecommerceIcon,
      brandingIcon,
    };
  },
  mounted() {
    this.initCounters();
  },
  methods: {
    initCounters() {
      const counters = document.querySelectorAll('.count');
      const speed = 9000; // Tempo de execução em milissegundos

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.startCounting(counters, speed);
            observer.unobserve(entry.target); // Desobservar após a contagem iniciar
          }
        });
      }, {
        threshold: 1 // Iniciar a contagem quando 100% da seção estiver visível
      });

      const target = document.getElementById('conquistas');
      if (target) {
        observer.observe(target);
      }
    },
    startCounting(counters, speed) {
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-count');
          const count = +counter.innerText;

          const increment = target / (speed / 100); // Incremento para o tempo total

          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10); // Atualizar a cada 10ms
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      });
    },
    scrollToElement(element) {
      const headerOffset = 50; // Ajuste este valor conforme necessário
      const elementPosition = document.querySelector(element).offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}

</script>

<style scoped>
/* #index h1 {
  font-size: var(--texto-grande);
}
#index p {
  font-size: var(--texto-medio) !important;
} */

.text-topo {
    bottom: 100px;
    position: absolute;
}

.bg-img {
    background-image: url(@/assets/img/bgar.webp) !important;
    background-position: 50%;
    background-size: cover;
    display: -ms-flexbox;
    display: flex;
    height: 100vh;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    color: #000;
    color: var(--text-color);
    margin: -120px 0 0;
}

#sobre img {
  width: 250px !important; 
  margin-bottom: 20px;
}

#conquistas h3 {
  font-size: 1.5em !important;
  font-weight: bold;
}

/* parceiros */
.carousel-item {
  transition: transform 0.5s ease, opacity 0.5s ease !important;
}
.carousel-fade .carousel-item {
  opacity: 0 !important;
  transition-duration: 0.5s !important;
  transition-property: opacity !important;
}
.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-start,
.carousel-fade .carousel-item-prev.carousel-item-end {
  opacity: 1 !important;
}
.carousel-fade .carousel-item-next,
.carousel-fade .carousel-item-prev,
.carousel-fade .carousel-item.active.carousel-item-start,
.carousel-fade .carousel-item.active.carousel-item-end {
  transform: translateX(0) !important;
}
.carousel-item img {
  filter: blur(5px) !important;
  transition: filter 0.5s ease !important;
}
.carousel-item.active img {
  filter: blur(0) !important;
}

/* servicos */
#servicos p {
  width: calc(1100px - 30%) !important;
}
#servicos img {
  width: 50% !important;
}
#servicos .gscard {
  width: auto !important;
  margin: 1px !important;
  padding: 2rem !important;
  height: 100% !important;
}

/* cta */
#cta .container {
  height: 50vh !important;
  border-radius: 10px !important;
}
#cta .col p {
  width: calc(900px - 20%) !important;
}
#cta section h2 {
  color: #fff !important;
}
</style>
