<template>
  <div class="gallery-window">
    <div v-if="currentPicture>1" class="gallery-window__slider slider-left" @click="switchGallaryPicture(currentPicture-1)">
      <div class="slider-btn-icon slider-btn-icon-left"/>
    </div>
    <img class="gallery-window__image" :src="getPictureUrl">
      <NavRoute class="gallery-window__navigation"/>
      <div class="gallery-window__description">
        <div class="gallery-window__header">Краски</div>
        <div class="gallery-window__text">Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!</div>
      </div>
      <div class="gallery-window__radio">
        <div v-for="index in 6" :key="index" class="gallery-window__radio-item" :class="{'gallery-window__radio-item--active': index === currentPicture}" @click="switchGallaryPicture(index)">
        </div>
      </div>
    <div class="gallery-window__slider slider-right" @click="switchGallaryPicture(currentPicture+1)" v-if="currentPicture<6">
      <div class="slider-btn-icon slider-btn-icon-right"/>
    </div>
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
      currentPicture: 1,
    }
  },
  computed: {
    getPictureUrl() {
      return `./slider/${this.currentPicture}.jpg`
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
.gallery-window {
  position: relative;
  display:flex;
  height: 560px;
}

.gallery-window__slider {
  width: 40%;
  cursor: pointer;
  z-index: 1;
}

.slider-right {
  margin-left: -40%;
  background: linear-gradient(90deg,transparent,rgba(0, 0, 0, 0.1));
}

.slider-left {
  margin-right: -40%;
  background: linear-gradient(-90deg,transparent,rgba(0, 0, 0, 0.1));
}

.slider-btn-icon{
  position: absolute;
  height: 20px;
  width: 20px;
  border-left: solid white 2px;
  border-top: solid white 2px;
  top: 354px;
}

.slider-btn-icon-left {
  left: 10%;
  transform: rotate(-45deg);
}

.slider-btn-icon-right {
  right: 10%;
  transform: rotate(135deg);
}

.slider-right:hover {
  background: linear-gradient(90deg,transparent,rgba(0, 0, 0, 0.3));
}

.slider-left:hover {
  background: linear-gradient(-90deg,transparent,rgba(0, 0, 0, 0.3));
}

.gallery-window__image {
  object-fit: cover;
  width: 100%;
}
.gallery-window__navigation {
  position:absolute;
  top: 32px;
  left: 64px;
  filter: invert();
  z-index: 1;
}
.gallery-window__description {
  position:absolute;
  top: 217px;
  left: 50%;
  transform: translate(-50%);
  color: white;
  width: 472px;
}

.gallery-window__header {
  font-weight: 400;
  font-size: 72px;
  letter-spacing: -0.02em;
}

.gallery-window__text {
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.02em;
  line-height: 130%;
}

.gallery-window__radio {
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

.gallery-window__radio-item {
  width: 6px;
  height: 6px;
  background: white;
  opacity: 0.5;
  border-radius: 50%;
  cursor: pointer;
}

.gallery-window__radio-item--active {
  opacity: 1;
}
</style>