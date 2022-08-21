<template>
  <section>
    <h1 class="container">Shopping Cart</h1>
    <article v-if="!cart.length" class="container">
      <p>Your shopping cart is empty</p>
      <nuxt-link to="/shop">
        <b-button
          label="Continue Shopping"
          type="is-success"
          outlined
          class="field"
        />
      </nuxt-link>
    </article>
    <article v-else class="cart">
      <div class="cart-table">
        <b-table
          :data="computedCart"
          :columns="columns"
          :checked-rows.sync="checkedRows"
          checkbox-type="is-danger"
          checkbox-position="left"
          checkable
        >
          <!-- <b-table-column v-slot="props" field="quantity" label="Quantity">
            <b-numberinput min="0">
              {{ props.row.quantity }}
            </b-numberinput>
            <p>hello</p>
          </b-table-column> -->
        </b-table>
        <b-button
          label="Delete checked"
          type="is-danger"
          class="field"
          outlined
          @click.prevent="deleteItems"
        />
        <b-button
          class="is-success field"
          label="Clear checked"
          outlined
          @click="checkedRows = []"
        />
      </div>
      <div class="cart-info">
        <p>Total {{ totalCost }}</p>
        <b-button
          label="Proceed to checkout"
          type="is-success"
          class="field"
          @click="checkout"
        />
        <small>Or</small>
        <nuxt-link to="/shop">
          <b-button label="Continue Shopping" type="is-success" outlined />
        </nuxt-link>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
// @ts-nocheck
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    checkedRows: [],
    // totalCost: 0,
    columns: [
      {
        field: 'name',
        label: 'Name',
      },
      {
        field: 'price',
        label: 'Price',
      },
      {
        field: 'quantity',
        label: 'Quantity',
      },
      {
        field: 'subTotal',
        label: 'Subtotal',
      },
    ],
  }),
  computed: {
    ...mapGetters({
      cart: 'cart/getCart',
      products: 'products/getProducts',
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
    checkout() {},
    deleteItems() {
      for (let i = 0; i < this.checkedRows.length; i++) {
        this.$store.commit(
          'cart/deleteCartItem',
          this.checkedRows[i].product.id
        )
        // this.deleteCartItem(this.checkedRows[i].product.id)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  @include container;
  gap: 0 2rem;
  margin: 0 auto;
  width: 90%;
  @media (max-width: $large-mobile) {
    @include flex-col;
  }
}
.cart-info {
  background: $snow;
  min-height: 50%;
}
</style>
