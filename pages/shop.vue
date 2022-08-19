<template>
  <section>
    <h1>Shop</h1>
    <div class="products">
      <div v-for="product in products" :key="product.id">
        <product-card
          :id="product.id"
          :img-url="product.image"
          :name="product.name"
          :price="product.price"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// @ts-nocheck
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      products: 'products/getProducts',
    }),
  },
}
</script>

<style lang="scss" scoped>
section {
  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: bolder;
  }
  .products {
    display: grid;
    width: 90%;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: $large-mobile) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
