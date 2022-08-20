<template>
  <section>
    <h1>{{ product.name }}</h1>
    <div class="container">
      <div>
        <img v-if="product.image" :src="product.image" width="200" />
        <img v-else :src="require('~/assets/images/xbox.jpg')" width="200" />
      </div>
      <div>
        <small>{{ product.price }}</small>
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <div>
          <div>
            <b-field label="Quantity">
              <b-numberinput
                v-model="quantity"
                min="0"
                :max="String(product.quantity)"
              >
              </b-numberinput>
            </b-field>
          </div>
          <b-button outlined class="is-success" @click="toCart"
            >Add to cart</b-button
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// @ts-nocheck
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      quantity: 0,
    }
  },
  computed: {
    ...mapGetters({
      products: 'products/getProducts',
    }),
    product() {
      const products = this.products
      const id = +this.$route.params.id
      return products.filter((product) => product?.id === id)[0]
    },
  },
  methods: {
    ...mapMutations({
      cart: 'cart/addToCart',
    }),
    toCart() {
      this.cart({ product: this.product.id, quantity: this.quantity })
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  h1 {
    text-align: center;
    font-weight: bolder;
    font-size: 1.8rem;
  }
  .container {
    @include flex-row;
    @include container;
    @media (max-width: $large-mobile) {
      @include flex-col;
    }
  }
}
</style>
