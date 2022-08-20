<template>
  <div class="product-card">
    <div class="img-container">
      <img v-if="imgUrl" :src="imgUrl" />
      <img v-else :src="require('~/assets/images/xbox.jpg')" />
      <div class="product-actions">
        <fa
          icon="eye"
          class="icon"
          title="View product"
          @click="navigateToProduct(id)"
        />
        <fa
          icon="cart-shopping"
          class="icon"
          title="Add to cart"
          @click="cart({ product: id, quantity: 1 })"
        />

        <fa icon="heart" class="icon" title="Add to wishlist" />
      </div>
    </div>
    <p>{{ name }}</p>
    <small>Tsh {{ price }}</small>
  </div>
</template>

<script lang="ts">
import { mapMutations } from 'vuex'
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    imgUrl: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    price: {
      type: String,
      default: null,
    },
  },
  methods: {
    ...mapMutations({
      cart: 'cart/addToCart',
    }),
    navigateToProduct(id: Number) {
      // @ts-ignore
      this.$router.push(`/product/${id}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  @media (max-width: $large-mobile) {
    border-bottom: 1px solid $snow;
    padding: 0 0 3% 0;
  }
  .img-container {
    position: relative;
    width: 80%;
    height: 80%;
    margin: 0 auto;
    @media (max-width: $large-mobile) {
      width: 98%;
    }
    img {
      max-width: 9rem;
      display: block;
      @media (max-width: $large-mobile) {
        /* width: 70%; */
        margin: 0 auto;
      }
      @media (max-width: $small-mobile) {
        margin: 0 auto;
        /* width: 90%; */
      }
    }
    .product-actions {
      position: absolute;
      @include flex-col;
      gap: 1rem 0;
      left: 68%;
      bottom: 24%;
      @media (max-width: $large-mobile) {
        left: 78%;
        bottom: 30%;
      }
      .product-action {
        background: $white;
        border-radius: 50%;
        text-align: center;
        cursor: pointer;
        .icon {
          padding: 2%;
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
