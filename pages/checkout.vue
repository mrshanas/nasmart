<template>
  <section>
    <h1 class="container">Checkout</h1>
    <main>
      <h4 class="container">Billing Details</h4>
      <div class="container">
        <b-field>
          <b-input v-model="name" placeholder="Name" />
        </b-field>

        <b-field>
          <b-input v-model="email" placeholder="Email" type="email" />
        </b-field>
        <b-field>
          <b-input v-model="phone" placeholder="Phone Number" />
        </b-field>
      </div>
      <div>
        <h4 class="container">Your order</h4>
        <ul>
          <li v-for="cart in computedCart" :key="cart.product.id">
            <p>{{ cart.name }}({{ cart.quantity }})</p>
            <small>Tsh {{ cart.price }}</small>
          </li>
        </ul>
        <p>Total: Tsh{{ totalCost }}</p>
      </div>
      <b-button label="Place Order" type="is-success" @click="checkout" />
    </main>
  </section>
</template>

<script lang="ts">
// @ts-nocheck
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    name: '',
    email: '',
    phone: '',
  }),
  computed: {
    ...mapGetters({
      cart: 'cart/getCart',
      products: 'products/getProducts',
      // dialog: 'cart/getDialog',
    }),
    computedCart() {
      const products = this.products
      // creating a copy from the store
      const cart = JSON.parse(JSON.stringify(this.cart))
      const newCart = cart.map((item) => {
        const index = products.findIndex((prod) => prod.id === item.product)
        const product = products[index]

        item.product = product
        item.subTotal = +product?.price * item.quantity
        item.name = product?.name
        item.price = product?.price
        return item
      })

      return newCart
    },
    totalCost() {
      return this.computedCart.reduce((prev, curr) => {
        prev += curr.subTotal
        return prev
      }, 0)
    },
  },
  methods: {
    checkout() {
      const data = {
        name: this.name,
        email: this.email,
        phone_no: this.phone,
        total_price: this.totalCost,
        items: this.cart,
      }
      this.$store.dispatch('cart/_checkout', data)
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-weight: bolder;
}
</style>
