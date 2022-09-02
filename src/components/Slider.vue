<template>
  <div class="slider-window">
    <img v-if="currentPicture > 0" src="icons/arrow.svg" class="slider-btn-icon slider-btn-icon-left" @click="switchGallaryPicture(currentPicture-1)">
    <div class="slider-window__images">
      <img v-for="index in 6" :key="index" class="slider-window__image" :style="`transform: translate(${-currentPicture * 100}%, 0)`" :src="`./slider/${index}.jpg`">
    </div>
    <NavRoute class="slider-window__navigation"/>
    <div class="slider-window__description">
      <div class="slider-window__header">Краски</div>
      <div class="slider-window__text">Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!</div>
    </div>
    <div class="slider-window__radio">
      <div v-for="(n, i) in 6" :key="i" class="slider-window__radio-item" :class="{'slider-window__radio-item--active': i === currentPicture}" @click="switchGallaryPicture(i)"/>
    </div>
    <img v-if="currentPicture < 5" src="icons/arrow.svg" class="slider-btn-icon slider-btn-icon-right" @click="switchGallaryPicture(currentPicture+1)">
  </div>
</template>

<script>
import NavRoute from './NavRoute.vue'
export default {
  name: 'Slider',
  components: {
    NavRoute,
  },
  data() {
    return {
      currentPicture: 0,
    }
  },
  methods: {
    switchGallaryPicture(i) {
      this.currentPicture = i
    },
  },
}
</script>

<style scoped>
.slider-window {
  position: relative;
  display:flex;
  height: 560px;
  overflow: hidden;
}

.slider-btn-icon{
  position: absolute;
  top: 354px;
  cursor: pointer;
  z-index: 1;
}

.slider-btn-icon-left {
  left: 10%;
  transform: scale(-1, 1);
}

.slider-btn-icon-right {
  right: 10%;
}

.slider-window__images {
  display: flex;
}

.slider-window__image {
  object-fit: cover;
  width: 100vw;
  transition-duration: 1s;
}
.slider-window__navigation {
  position:absolute;
  top: 32px;
  left: 64px;
  filter: invert();
}
.slider-window__description {
  position:absolute;
  top: 217px;
  left: 50%;
  transform: translate(-50%);
  color: white;
  width: 472px;
}

.slider-window__header {
  font-weight: 400;
  font-size: 72px;
  letter-spacing: -0.02em;
}

.slider-window__text {
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.02em;
  line-height: 130%;
}

.slider-window__radio {
  position: absolute;
  bottom: 39px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  padding: 13px 24px;
  gap: 10px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 16px;
}

.slider-window__radio-item {
  width: 6px;
  height: 6px;
  background: white;
  opacity: 0.5;
  border-radius: 50%;
  cursor: pointer;
  transition-duration: 500ms;
}

.slider-window__radio-item--active {
  opacity: 1;
}
</style>