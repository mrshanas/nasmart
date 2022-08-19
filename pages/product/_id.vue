<template>
  <h1>{{ product.name }}</h1>
</template>

<script lang="ts">
// @ts-nocheck
import { mapGetters } from 'vuex'
export default {
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
}
</script>

<style lang="scss" scoped></style>
