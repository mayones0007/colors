<template>
  <div class="navbar" :class="{'navbar-mobile': !isDesktop}">
    <img v-if="!isDesktop" class="navbar__burger"  src="icons/burger.svg" @click="setShowLinks"/>
    <img v-else src="icons/logo.svg"/>
    <div v-if="showLinks || isDesktop" class="navbar__links" :class="{'navbar__links-mobile': !isDesktop}">
      <div class="navbar__links-items" :class="{'navbar__links-items-mobile': !isDesktop}">
        <div v-for="link in this.links" :key="link.id" class="navbar__links-item" >{{link.name}}</div>
      </div>
      <div class="navbar__tel">
        <div class="navbar__tel-number">+7 (495) 221-77-69</div>
        <div class="navbar__tel-text" :class="{'navbar__tel-text-mobile': !isDesktop}">Заказать звонок</div>
      </div>
      <div class="navbar__menu">
        <img src="icons/search.svg" class="navbar__menu-item" />
        <img src="icons/profile.svg" class="navbar__menu-item" />
        <img src="icons/heart.svg" class="navbar__menu-item" />
      </div>
    </div>
    <img v-if="!isDesktop" src="icons/logo.svg"/>
    <div class="navbar__cart" @click="setShowCart">{{cartItems.length}}</div>
  </div>
</template>

<script>
import { links } from '../data/links'
export default {
  data: () => ({
    links,
  }),
  computed: {
    isDesktop(){
      return this.$store.state.isDesktop
    },
    showLinks(){
      return this.$store.state.showLinks
    },
    cartItems(){
      return this.$store.state.cartItems
    },
  },
  methods: {
    setShowLinks(){
      this.$store.commit('setShowLinks')
    },
    setShowCart(){
      this.$store.commit('setShowCart')
    },
  },
}
</script>

<style>
.navbar {
  height: 104px;
  display: grid;
  grid-template-columns: 130px 1fr 24px;
  gap: 26px;
  align-items: center;
  justify-items: center;
}
.navbar-mobile {
  grid-template-columns: 1fr 1fr 1fr;
  height: 64px;
  border-bottom: solid rgba(0, 0, 0, 0.06) 1px;
}
.navbar__burger {
  justify-self: start;
}
.navbar__links {
  display: flex;
  align-items: center;
  background-color: white;
  text-align: start;
  width: 100%;
  justify-content: space-between;
}
.navbar__links-items{
  display: flex;
  gap: 24px;
  margin-left: 40px;
}
.navbar__links-items-mobile {
  flex-direction: column;
  margin: 0;
}
.navbar__links-mobile {
  flex-direction: column;
  position: absolute;
  box-sizing: border-box;
  left: 0;
  top: 64px;
  width: 100%;
  z-index: 2;
  border-radius: 0px 0px 24px 24px;
  padding: 24px;
  text-align: center;
}
.navbar__links-item {
  font-weight: 400;
  font-size: 14px;
  padding: 15px 0;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  cursor: pointer;
}
.navbar__tel {
  padding: 30px 0;
}
.navbar__tel-number {
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
}
.navbar__tel-text {
  font-weight: 400;
  font-size: 14px;
  opacity: 0.3;
  text-align: start;
  cursor: pointer;
}
.navbar__tel-text-mobile {
  text-align: center;
}
.navbar__menu {
  display: flex;
  gap: 28px;
  padding: 15px 0;
}
.navbar__menu-item {
  cursor: pointer;
}
.navbar__cart {
  background-color: #7BB899;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  cursor: pointer;
  justify-self: end;
}
</style>