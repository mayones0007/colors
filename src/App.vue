<template>
  <div v-if="showBackground" class="background" @click.self="hideBackground"/>
  <div class="page" :class="{'page-mobile': !isDesktop}">
    <NavBar :class="{'navbar-mobile': !isDesktop}"/>
    <Slider v-if="isDesktop" class="slider"/>
    <div v-else>
      <NavRoute/>
      <Filters class="filter__window" :class="{'filter__window-active': showFiltersMobile}"/>
    </div>
    <div class="main-container">
      <Filters v-if="isDesktop"/>
      <div class="main-container__products">
        <Sort />
        <Products/>
      </div>
    </div>
    <Cart/>
  </div>
  <div class="footer"/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import NavRoute from './components/NavRoute.vue'
import Slider from './components/Slider.vue'
import Filters from './components/Filters.vue'
import Sort from './components/Sort.vue'
import Products from './components/Products.vue'
import Cart from './components/Cart.vue'
import { isDesktop } from './services/screenSize.service'

export default {
  name: 'App',
  components: {
    NavBar,
    Slider,
    Filters,
    Sort,
    Products,
    Cart,
    NavRoute,
  },
  computed: {
    isDesktop() {
      return this.$store.state.isDesktop
    },
    showBackground() {
      return this.$store.state.showFilters
        || this.$store.state.showSorts
        || this.$store.state.showCart
        || this.$store.state.showLinks
    },
    showFiltersMobile() {
      return this.$store.state.showFilters
    }
  },
  methods: {
    showFilters(){
      this.$store.commit('setShowfilters')
    },
    hideBackground(){
      this.$store.commit('hideBackground')
    },
  },
  created() {
    this.$store.commit('setIsDesktop', isDesktop())
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1F2020;
  cursor: default;
}
body {
  margin: 0;
}
.page > :not(.slider) {
  padding: 0 5%;
}
.page-mobile {
  margin-top: 80px;
}
.navbar-mobile {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  z-index: 1;
}
.main-container {
  margin-top: 48px;
  display: flex;
  gap: 5%;
  align-items: flex-start;
  min-height: 600px;
}
.main-container__products {
  width: 100%;
}
.footer {
  height: 320px;
  background-color: black;
}
.filter__window {
  position: fixed;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  z-index: 2;
  padding: 12px 24px;
  background-color: white;
  border-radius: 24px 24px 0px 0px;
  transition-duration: 500ms;
}
.filter__window-active {
  height: 375px;
  padding-bottom: 160px;
}
.background {
  position: fixed;
  top:0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}
</style>
