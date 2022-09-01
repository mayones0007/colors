<template>
  <div>
    <div v-if="showCart" class="cart" :class="{'cart-mobile': !isDesktop}">
      <div class="cart__header">
        <div class="cart__header-name">Корзина</div>
        <img src="/icons/close.svg" class="cart__header-button" @click="setShowCart"/>
      </div>
      <div class="cart__middle">
        <div class="cart__middle-count">{{cartItems.length}} {{ending(cartItems.length)}}</div>
        <div class="cart__middle-button" @click="emptyCart">Очистить список</div>
      </div>
      <div v-if="cartItems.length < 1" class="cart__message">В корзине пока пусто</div>
      <div class="cart__items">
        <div v-for="product in cartItems" :key="product.id" class="cart__item" :class="{'cart__item--disable': isProductAvailable(product)}">
          <img class="cart__item-image" :src="`./products/${product.id}.jpg`">
          <div class="cart__item-info">
            <div class="cart__item-name">{{product.name}}</div>
            <div class="cart__item-price">{{product.price}} &#8381;</div>
          </div>
          <img src="/icons/minus.svg" class="cart__item-button" :class="{'cart__item-button--disable': product.count <= 1}" @click="deleteInCart(product)"/>
          <div>{{product.count}}</div>
          <img src="/icons/plus.svg" class="cart__item-button" :class="{'cart__item-button--disable': product.availableCount <= product.count}" @click="addInCart(product)"/>
          <img v-if="isProductAvailable(product)" src="/icons/repeat.svg" class="cart__item-button-repeat"/>
          <img v-else src="/icons/close.svg" class="cart__item-button-delete" @click="deleteItemInCart(product)"/>
        </div>
      </div>
      <div class="cart__footer">
        <div class="cart__footer-total">
          <div class="cart__footer-total-text">Итого</div>
          <div class="cart__footer-total-price">{{totalPrice}}&#8381;</div>
        </div>
        <div class="cart__footer-button-order">Оформить заказ</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    totalPrice(){
      return this.$store.state.cartItems.reduce(function(acc, cur){
        if(cur.availableCount < cur.count) return acc
        return acc + cur.price * cur.count
      }, 0);
    },
    isDesktop(){
      return this.$store.state.isDesktop
    },
    cartItems(){
      return this.$store.state.cartItems
    },
    showCart(){
      return this.$store.state.showCart
    },
  },
  methods: {
    setShowCart(){
      this.$store.commit('setShowCart')
    },
    addInCart(item){
      if(item.availableCount > item.count){
        this.$store.commit('addInCart', item)
      }
    },
    deleteInCart(item){
      if(item.count > 1){
        this.$store.commit('deleteInCart', item)
      }
    },
    deleteItemInCart(item){
      this.$store.commit('deleteItemInCart', item)
    },
    emptyCart(){
      this.$store.commit('emptyCart')
    },
    isProductAvailable(product){
      return product.availableCount < product.count
    },
    ending(count){
      if(count > 1 && count < 5){
        return 'товара'
      }
      if(count > 4 && count < 21 || count === 0){
        return 'товаров'
      }
      return 'товар'
    }
  }
}
</script>

<style scoped>
.cart {
  position: fixed;
  display: grid;
  grid-template-rows: 48px 106px 1fr 66px;
  top:0;
  right:0;
  height: 100%;
  width: 600px;
  background-color: white;
  box-sizing: border-box;
  font-size: 14px;
  padding: 40px;
  z-index:2;
}
.cart-mobile {
  width: 100%;
  padding: 20px;
  font-size: 12px;
}
.cart__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart__header-name {
  font-weight: 500;
  font-size: 214%;
}
.cart__header-button {
  border: solid rgba(0, 0, 0, 0.1) 1px;
  border-radius: 50%;
  padding: 18px;
  cursor: pointer;
}
.cart__middle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 80px 0 10px 0;
}
.cart__middle-count {
  font-weight: 400;
}
.cart__middle-button {
  text-transform: uppercase;
  font-weight: 300;
  opacity: 0.4;
  cursor: pointer;
}
.cart__message {
  font-weight: 300;
  font-size: 114%;
  margin: auto;
}
.cart__items {
  overflow: scroll;
}
.cart__item {
  display:grid;
  grid-template-columns: 18.5% 42% 7.7% 6.1% 7.7% 1fr;
  gap: 8px;
  align-items: center;
  border-top: solid rgba(0, 0, 0, 0.1) 1px;
  height: 120px;
}
.cart__item--disable :not(img:last-child) {
  opacity: 0.4;
}
.cart__item-image {
  width: 100%;
}
.cart__item-info{
  display: grid;
  gap: 16px;
  text-align: start;
  width: 100%;
  font-size: 114%;
}
.cart__item-name {
  font-weight: 300;
}
.cart__item-price {
  font-weight: 600;
}
.cart__item-button {
  box-sizing: border-box;
  background: #F2F2F2;
  border-radius: 4px;
  width: 100%;
  height: 24px;
  padding: 4px;
  cursor: pointer;
  border: none;
}
.cart__item-button--disable {
  opacity: 0.4;
}
.cart__item-button-delete {
  opacity: 0.2;
  cursor: pointer;
  justify-self: end;
}
.cart__item-button-repeat {
  cursor: pointer;
  justify-self: end;
}
.cart__footer {
  display: grid;
  grid-template-columns: 53.8% 46.2%;
  margin-top: 10px;
}
.cart__footer-total {
  text-align: start;
}
.cart__footer-total-text {
  font-weight: 400;
  font-size: 114%;
}
.cart__footer-total-price {
  font-weight: 500;
  font-size: 214%;
}
.cart__footer-button-order {
  font-weight: 500;
  font-size: 86%;
  line-height: 56px;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  width: 100%;
  height: 56px;
  background: #7BB899;
  border-radius: 4px;
  cursor: pointer;
}
.cart__footer-button-order:hover{
  background: #74ae91;
}
</style>