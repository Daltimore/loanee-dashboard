<template>
  <div id="small_card">
    <carousel :perPage="perPage">
      <slide class="py-3 pl-2">
        <div>
          <h3
            class="text-card text-base font-semibold font-f"
          >
            {{ title1 }}
          </h3>
          <h5 class="text-dashblack text-4xl pt-4 font-black font-f">
            {{ content1 }}<img :src="source1" />
          </h5>
        </div>
      </slide>
      <slide class="py-3 pl-2">
        <div>
          <h3 class="text-card text-base font-semibold font-f">
            {{ title2 }}
          </h3>
          <h5 class="text-dashblack text-4xl pt-4 font-black font-f">
            {{ content2 }}
          </h5>
        </div>
      </slide>
      <slide class="py-3 pl-2">
        <div>
          <h3 class="text-card text-base font-semibold font-f">
            {{ title3 }}
          </h3>
          <h5 class="text-dashblack text-4xl pt-4 font-black font-f">
            {{ content3 }}
          </h5>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  props: {
    title1: String,
    content1: String,
    title2: String,
    content2: String,
    title3: String,
    content3: String,
    source1: Image
  },
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      perPage: 1
    }
  }
}
</script>

<style>
#small_card .VueCarousel {
  width: 245px ;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 12px;
}

#small_card .VueCarousel-dot-container {
  margin: 0 !important;
}

.font-f {
  font-family: 'Lato', sans-serif;
}

#small_card .VueCarousel-dot--active {
  outline: none !important;
}
@media (max-width: 1280px) {
  #small_card .VueCarousel {
    width: auto ;
    height: 10rem;
    background: #ffffff;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 12px;
  }
}
</style>