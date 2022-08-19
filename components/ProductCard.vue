<template>
  <div class="product-card">
    <div class="img-container">
      <img :src="require('~/assets/images/xbox.jpg')" />
      <div class="product-actions">
        <nav-link to="/product/id" class="product-action" title="View product">
          <fa icon="eye" class="icon" />
        </nav-link>
        <nav-link to="/cart" class="product-action" title="Add to cart">
          <fa icon="cart-shopping" class="icon" />
        </nav-link>
        <nav-link to="/wishlist" class="product-action" title="Add to wishlist">
          <fa icon="heart" class="icon" />
        </nav-link>
      </div>
    </div>
    <p>Wireless X-box Controller</p>
    <small>Tsh 35000</small>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
.product-card {
  /* outline: 1px solid; */
  display: flex;
  flex-direction: column;
  .img-container {
    position: relative;
    img {
      width: 9rem;
      display: block;
      @media (max-width: $large-mobile) {
        width: 60%;
        margin: 0 auto;
      }
      @media (max-width: $small-mobile) {
        margin: 0 auto;
        width: 100%;
      }
    }
    .product-actions {
      position: absolute;
      @include flex-col;
      gap: 1rem 0;
      left: 71%;
      bottom: 20%;
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
