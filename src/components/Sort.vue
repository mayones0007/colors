<template>
  <div class="sort">
    <div v-if="isDesktop" class="sort__count" >{{this.products.length}} Товаров</div>
    <div v-else @click="showFilters">Фильтры</div>
    <div class="sort__value" @click="setShowSorts">
      {{appliedSort.name}}
      <img src="icons/triangle.svg">
    </div>
    <div v-if="isShowSorts" class="sort__window">
      <div v-for="sort in this.sorts" :key="sort.id" class="sort__value">
        <div 
          class="sort__value-item sort__value-item-checked" 
          @click="setShowSorts, sortProducts(sort)"
        >
          {{sort.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sorts } from '../data/sorts'
export default {
  data: () => ({
    sorts,
  }),
  computed: {
    isShowSorts() {
      return this.$store.state.showSorts
    },
    isDesktop() {
      return this.$store.state.isDesktop
    },
    products() {
      return this.$store.state.filteredProducts
    },
    appliedSort() {
      return this.$store.state.appliedSort
    }
  },
  methods: {
    sortProducts(sort){
      this.$store.commit('sortProducts', sort)
      this.$store.commit('setShowSorts')
    },
    setShowSorts() {
      this.$store.commit('setShowSorts')
    },
    showFilters(){
      this.$store.commit('setShowfilters')
    },
  },
  created () {
    this.$store.commit('sortProducts', this.sorts[0])
  }
}
</script>

<style scoped>
.sort {
  display:flex;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  text-align: start;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.06em;
}

.sort__window {
  position: absolute;
  display: grid;
  background-color: white;
  top:0;
  right:0;
  width: 280px;
  z-index: 2;
}
.sort__value-item {
  padding: 17px 0 17px 24px;
  width: 100%;
}

.sort-value {
  display: flex;
}

.sort__value {
  display:flex;
  gap: 5px;
  cursor: pointer;
}
.sort__value-item-checked:hover {
  background: #7BB899;
}
</style>