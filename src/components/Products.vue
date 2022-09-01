<template>
  <div>
    <div class="products" :class="{'products-desktop': isDesktop}">
      <div v-if="this.sortedProducts.length === 0" class="products__message">Нет продуктов по заданым фильтрам</div>
      <div v-for="product in this.sortedProducts" :key="product.id" class="products__item" :class="{'products__item-desktop': isDesktop, 'products__item-disable': product.availableCount < 1}">
        <img class="products__item-image" :src="`./products/${product.id}.jpg`">
        <div class="products__item-description" :class="{'products__item-description-mobile': !isDesktop}">{{product.name}}</div>
        <div class="products__item-price">{{product.price}} &#8381;</div>
        <img src="./icons/plus.svg" class="products__item-button" :class="{'products__item-button-desktop': isDesktop, 'products__item-button-disable': product.availableCount < 1}" @click="addInCart(product)"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    sortedProducts() {
      return this.$store.state.filteredProducts
    },
    isDesktop() {
      return this.$store.state.isDesktop
    }
  },
  methods: {
    addInCart(item){
      this.$store.commit('addInCart', item)
    },
  }
}
</script>

<style scoped>
.products {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 15px;
  margin: 5% 0;
}
.products__message {
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  margin-top: 30%;
}
.products-desktop {
  gap: 24px;
}
.products__item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 156px;
  height: 304px;
  font-size: 16px;
  border-bottom: solid rgba(0, 0, 0, 0.1) 1px;
}

.products__item-disable {
  opacity: 0.4;
}

.products__item-desktop {
  width: 278px;
  height: 393px;
}

.products__item-image {
  object-fit: scale-down;
  width: 100%;
  grid-column: 1 / span 2;
}

.products__item-description {
  font-weight: 300;
  text-align: start;
  grid-column: 1 / span 2;
}

.products__item-description-mobile {
  letter-spacing: 0.02em;
}

.products__item-price {
  font-weight: 600;
  text-align: start;
}

.products__item-button {
  right: 6px;
  bottom: 14px;
  padding: 4px 12px;
  background: #F2F2F2;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 0;
  justify-self: end;
}

.products__item-button-desktop {
  opacity: 0;
  right: 6px;
  bottom: 14px;
  padding: 6px 24px;
  background: #7BB899;
  border-radius: 8px;
}
.products__item-button-disable {
  display: none;
}

.products__item:hover .products__item-button {
  opacity: 1;
}
</style>