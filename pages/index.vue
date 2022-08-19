<template>
  <!-- Hero section -->
  <section>
    <div>
      <div class="">
        <h2>Welcome to Nasmart Technologies</h2>
        <p>We are here to serve you</p>
        <nuxt-link to="/shop">
          <b-button type="is-primary" outlined>Shop Now</b-button>
        </nuxt-link>
      </div>
      <div>
        <lottie
          :width="400"
          :options="lottieOptions"
          @animCreated="handleAnimation"
        />
      </div>
    </div>

    <article class="popular-products">
      <div class="header">
        <h3>Popular Products</h3>
        <nuxt-link to="/shop">
          <b-button type="is-primary" outlined>See All</b-button>
        </nuxt-link>
      </div>
      <div class="products">
        <product-card />
        <product-card />
        <product-card />
        <product-card />
        <product-card />
      </div>
    </article>
  </section>

  <!-- Popular products section -->
</template>

<script lang="ts">
// @ts-nocheck
import Vue from 'vue'
import lottie from 'vue-lottie/src/lottie.vue'

import * as welcome from '~/assets/animations/welcome.json'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    lottie,
  },
  data() {
    return {
      anim: null,
      lottieOptions: {
        animationData: welcome.default,
      },
    }
  },
  created() {
    this.$store.dispatch('categories/_fetchCategories')
    this.$store.dispatch('products/_fetchProducts')
  },
  methods: {
    // to enable lottie animation once its loaded
    handleAnimation(anim: any) {
      this.anim = anim
    },
  },
})
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  /* background: $snow; */
  div {
    width: 80%;
    margin: 2% auto;
    @include flex-row;

    @media (max-width: $tablet) {
      @include flex-col;
      @include center;
      width: 98%;
    }
    div {
      @include flex-col;
      gap: 1rem 0;
      h2 {
        font-weight: bolder;
        font-size: 2rem;
        @media (max-width: $large-mobile) {
          font-size: 1.5rem;
          text-align: center;
        }
      }
    }
  }

  // Popular products styling
  .popular-products {
    margin-top: 4%;
    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      @media (max-width: $large-mobile) {
        width: 90%;
        /* margin: 0 auto; */
      }
      h3 {
        font-weight: bold;
      }
    }
    .products {
      @include flex-row;
      @media (max-width: $large-mobile) {
        @include flex-col;
        /* margin: 0 auto; */
      }
    }
  }
}
</style>
