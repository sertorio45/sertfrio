<template>
    <div id="carouselSection">
      <vue-slick-carousel v-bind="slickOptions" @afterChange="handleAfterChange" ref="carousel">
        <div v-for="(image, index) in images" :key="index" class="col-2">
          <img :src="image" :class="['d-block', 'w-100', { 'no-blur': isCentralImage(index), 'blur': !isCentralImage(index) }]" alt="...">
        </div>
      </vue-slick-carousel>
      <div class="fade-left"></div>
      <div class="fade-right"></div>
    </div>
  </template>
  
  <script>
  import VueSlickCarousel from 'vue-slick-carousel'
  
  // Optional CSS imports for Slick Carousel
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  
  export default {
    components: {
      VueSlickCarousel
    },
    data() {
      return {
        images: this.importAll(require.context('@/assets/img/parceiros', false, /\.(png|jpe?g|svg|webp)$/)),
        slickOptions: {
          infinite: true,
          slidesToShow: 7,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
          arrows: true,
          dots: false,
          initialSlide: 0 // Ensure the carousel starts at the first slide
        },
        currentIndex: 0
      };
    },
    methods: {
      importAll(r) {
        return r.keys().map(r);
      },
      handleAfterChange(index) {
        this.currentIndex = index;
      },
      isCentralImage(index) {
        const visibleImages = 7;
        const centralIndex = (this.currentIndex + 3) % this.images.length;
        const leftIndex = (centralIndex - 1 + this.images.length) % this.images.length;
        const rightIndex = (centralIndex + 1) % this.images.length;
        return index === centralIndex || index === leftIndex || index === rightIndex;
      }
    },
    mounted() {
      // Ensure the carousel starts at the first slide
      this.$refs.carousel.goTo(0);
    }
  }
  </script>
  
  <style>
  #carouselSection {
    position: relative;
    overflow: hidden;
  }
  
  .slick-slide img {
    display: block;
    width: 100%;
    height: auto;
    filter: saturate(0); /* Remove saturation for all images */
    transition: filter 0.3s ease;
  }

  .blur {
    filter: saturate(0) blur(2px); /* Adding a subtle blur to the images */
  }
  
  .no-blur {
    filter: saturate(0) !important; /* Ensure no blur is applied to these images */
  }
  
  .fade-left, .fade-right {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 20%; /* Adjusted width for a more subtle effect */
    z-index: 2;
    pointer-events: none;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.7), transparent);
  }
  
  .fade-right {
    right: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.7), transparent);
  }
  </style>
  