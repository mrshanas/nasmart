<template>
  <footer>
    <div class="container">
      <div class="footer-links">
        <div>
          <h3>Nasmart</h3>
          <p>Shop with us we got the right tools for you</p>
          <div>
            <!-- Brand icons -->
            <a href="https://instagram.com" class="brand">
              <fa :icon="['fab', 'instagram']" class="brand-icon" />
            </a>
            <a href="https://twitter.com/mrshanas" class="brand">
              <fa :icon="['fab', 'twitter']" class="brand-icon" />
            </a>
            <a href="https://facebook.com" class="brand">
              <fa :icon="['fab', 'facebook']" class="brand-icon" />
            </a>
          </div>
        </div>
        <div>
          <h3>Information</h3>
          <nuxt-link to="/about" class="bottom-links">
            About Nasmart
          </nuxt-link>
          <nuxt-link to="/faq" class="bottom-links"> FAQ </nuxt-link>
          <nuxt-link to="/contact" class="bottom-links"> Contact Us </nuxt-link>
        </div>
        <div>
          <h3>Quick Links</h3>
          <nuxt-link to="/wishlist" class="bottom-links"> Wishlist </nuxt-link>
          <nuxt-link to="/checkout" class="bottom-links"> Checkout </nuxt-link>
          <nuxt-link to="/cart" class="bottom-links"> Cart </nuxt-link>
        </div>
        <div>
          <h3>Contact us</h3>
          <div class="">
            <fa icon="location-dot" />
            <small>24871 Kanisani St, Buza Dar es Salaam</small>
          </div>
          <div class="">
            <fa icon="phone" />
            <small>+255 788 277 549</small>
          </div>
          <div class="">
            <fa icon="envelope" />
            <small>nassibshaban345@gmail.com</small>
          </div>
        </div>
      </div>
      <div class="copyright">
        <small>
          Copyright &copy; <span>{{ date.getFullYear() }}</span> Nasmart
        </small>
        <small>All rights reserved</small>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  data() {
    return {
      date: new Date(),
    }
  },
}
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  /* position: absolute;
  bottom: 0; */
  background: $rich-black;
  color: $snow;
  .container {
    @include container;
    @include flex-col;
    margin: 0 auto;
    gap: 1.2rem 0;
    .footer-links {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding-top: 1%;
      @media (max-width: $large-mobile) {
        @include flex-col;
        gap: 2rem 0;
      }
      div {
        h3 {
          font-weight: bolder;
        }
        @include flex-col;
        gap: 1rem 0;
        .bottom-links {
          text-decoration: none;
          color: $snow;
        }
        /* justify-content: space-between; */
        div {
          @include flex-row;
          width: 100%;
          justify-content: flex-start;
          gap: 0 0.8rem;
          .brand {
            text-decoration: none;
            border: 1px solid $snow;
            border-radius: 50%;
            display: flex;
            @include center;
            color: $snow;
            padding: 1.5%;
            @media (max-width: $large-mobile) {
              padding: 1%;
            }
            .brand-icon {
              margin: 0 auto;
            }
          }
        }
      }
    }
    .copyright {
      display: flex;
      width: 100%;
      border-top: 1px solid $snow;
      padding: 2% 0;
      justify-content: space-between;
    }
  }
}
</style>
