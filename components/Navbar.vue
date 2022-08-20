<template>
  <nav>
    <div class="container">
      <div class="logo">
        <h3 title="Nasmart">Nasmart</h3>
      </div>
      <div class="links">
        <ul>
          <li v-for="link in links" :key="link.to">
            <nuxt-link
              :to="link.to"
              class="link"
              :class="{ active: link.active }"
            >
              {{ link.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="icons">
        <nuxt-link to="/shop" class="icon-links">
          <fa icon="magnifying-glass" title="Search" />
        </nuxt-link>
        <nuxt-link to="/wishlist" class="icon-links" title="Wishlist">
          <fa icon="heart" />
        </nuxt-link>
        <nuxt-link to="/cart" class="icon-links" title="Cart">
          <fa icon="cart-shopping" />
          <small v-if="cart.length">{{ cart.length }}</small>
        </nuxt-link>
        <fa
          v-if="!isNavOpen"
          icon="bars"
          class="nav-toggler"
          @click="toggleNavbar"
        />
        <fa v-else icon="xmark" class="nav-toggler" @click="toggleNavbar" />
      </div>
    </div>

    <!-- Mobile menu to display links  -->
    <b-sidebar v-model="isNavOpen" type="is-light" fullheight overlay>
      <div>
        <ul>
          <li v-for="link in links" :key="link.to">
            <nuxt-link
              :to="link.to"
              class="link"
              :class="{ active: link.active }"
            >
              {{ link.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </b-sidebar>
  </nav>
</template>

<script lang="ts">
// @ts-nocheck
import { mapGetters } from 'vuex'
export default {
  data() {
    const currentPath: string = this.$route.path

    return {
      isNavOpen: false,
      links: [
        {
          title: 'Home',
          to: '/',
          active: currentPath === '/',
        },
        {
          title: 'Shop',
          to: '/shop',
          active: currentPath === '/shop',
        },
        {
          title: 'About Us',
          to: '/about',
          active: currentPath === '/about',
        },
        {
          title: 'Contact Us',
          to: '/contact',
          active: currentPath === '/contact',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      cart: 'cart/getCart',
    }),
  },
  methods: {
    toggleNavbar() {
      this.isNavOpen = !this.isNavOpen
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 30;
  /* min-height: 5.5vh; */
  .container {
    @include container;
    margin: 1.2rem auto;
    align-items: center;
    @media (max-width: $large-mobile) {
      padding: 1.5% 0;
    }
    .logo {
      flex: 1;
      h3 {
        font-weight: bolder;
        font-size: 1.5rem;
        letter-spacing: 2px;
        opacity: 0.7;
        font-family: Poppins, 'sans-serif';
      }
    }
    .links {
      flex: 3;
      margin: 0 auto;
      @media (max-width: $large-mobile) {
        display: none;
      }
      ul {
        display: flex;
        justify-content: space-evenly;
        li {
          list-style: none;
          .link {
            text-decoration: none;
            color: #000;
          }
          .active {
            font-weight: bolder;
          }
        }
      }
    }

    .icons {
      display: flex;
      flex: 1;
      justify-content: space-evenly;
      .icon-links {
        color: #000;
      }
      .nav-toggler {
        display: none;
        @media (max-width: $large-mobile) {
          display: inline;
          padding-top: 1.5%;
        }
      }
    }
  }
}
</style>
