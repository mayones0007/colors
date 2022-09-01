<template>
  <div class="filters">
    <img v-if="!isDesktop" src="icons/line.svg" class="line"/>
    <div v-for="filter in this.filters" :key="filter.id" class="filter" @click="toggleFilter(filter)">
      <div class="filter-switcher" :class="`filter-switcher-${filter.isActive}`">
        <div class="filter-switcher-dot"/>
      </div>
      <div class="filter-name">{{filter.name}}</div>
    </div>
  </div>
</template>

<script>
import { filters } from '../data/filters'
export default {
  data: () => ({
    filters,
  }),
  methods: {
    toggleFilter(filter) {
      filter.isActive = !filter.isActive
      this.$store.dispatch('filterProducts', filter)
    }
  },
  computed: {
    isDesktop() {
      return this.$store.state.isDesktop
    }
  }
}
</script>

<style scoped>
  .filters {
    display: grid;
    gap: 10px;
  }
  .filter {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
  }
  .filter-switcher {
    position: relative;
    width: 36px;
    height: 22px;
    background: #7BB899;
    border-radius: 40px;
    transition-duration: 300ms;
  }
  .filter-switcher-false {
    background: #F2F2F2;
  }

  .filter-switcher-dot {
    position: absolute;
    height: 8px;
    width: 8px;
    top: 7px;
    left: 21px;
    border-radius: 50%;
    background-color: black;
    transition-duration: 300ms;
  }
  .filter-switcher-false .filter-switcher-dot {
    left: 7px;
  }

  .filter-name {
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-align: start;
    white-space: nowrap;
  }
  .line {
    justify-self: center;
    margin-bottom: 38px;
  }
</style>