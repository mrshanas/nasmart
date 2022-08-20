<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      Oops!!, sorry that page could not be found
    </h1>
    <h1 v-else>Oh we are sorry!, An error occured</h1>
    <nuxt-link to="/">Back to home</nuxt-link>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    error: {
      type: Object,
      default: () => new Error('An error occured'),
    },
  },
}
</script>

<style lang="scss" scoped></style>
