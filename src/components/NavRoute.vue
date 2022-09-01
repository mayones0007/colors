<template>
  <div>
    <div class="route">
      <div class="route__item">Главная</div>
      <div class="route__item">Продукты</div>
      <div class="route__item">Краски</div>
    </div>
    <div v-if="!isDesktop" class="route-point">Краски</div>
  </div>
</template>
<script>
export default {
  computed: {
    isDesktop() {
      return this.$store.state.isDesktop
    }
  },
}
</script>


<style scoped>
.route {
  display: flex;
  gap: 8px;
}

.route__item {
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  opacity: 0.3;
  font-weight: 400;
  letter-spacing: 0.06em;
  font-size: 10px;
  cursor: pointer;
}

.route__item:hover {
  opacity: 0.8;
}

.route__item::after {
  content: '';
  width: 3px;
  height: 3px;
  background: rgb(0, 0, 0);
  border-radius: 50%;
}

.route__item:hover::after {
  opacity: 0.3;
}

.route__item:last-of-type::after{
  display: none;
}

.route-point {
  font-weight: 400;
  font-size: 36px;
  margin-top: 32px;
  text-align: start;
}
</style>