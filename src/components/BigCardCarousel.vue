<template>
  <div id="big-card">
    <carousel :perPage="perPage">
      <slide class="px-3 md:px-3 lg:px-8">
        <div class="flex justify-between items-center py-5">
          <h6 class="uppercase font-semibold">loan requests</h6>
          <p class="text-card">Today Thur, 11 Mar</p>
        </div>
        <div 
          class="flex justify-between items-center border-b border-gray-400 pb-1 py-3"
        >
          <p class="text-card">Number of Requested Loans</p>
          <span class="font-semibold">26</span>
        </div>
        <div 
          class="flex justify-between items-center border-b border-gray-400 pb-1 py-3"
        >
          <p class="text-card">Value of Requested Loans</p>
          <span class="font-semibold">258,000</span>
        </div>
        <!-- <div class="flex items-center cursor-pointer">
          <p
            class="font-semibold text-dashblack"
          >
            View All
          </p>
          <img
            src="@/assets/img/arrow-right.svg"
            alt=""
            class="ml-4"
          >
        </div> -->
      </slide>
      <slide class="px-3 md:px-3 lg:px-8">
        <div class="flex justify-between items-center py-5">
          <h6 class="uppercase font-semibold">loan requests</h6>
          <p class="text-card">Today Thur, 11 Mar</p>
        </div>
        <div 
          class="flex justify-between items-center border-b border-gray-400 pb-1 py-3"
        >
          <p class="text-card">Number of Requested Loans</p>
          <span class="font-semibold">26</span>
        </div>
        <div 
          class="flex justify-between items-center border-b border-gray-400 pb-1 py-3"
        >
          <p class="text-card">Value of Requested Loans</p>
          <span class="font-semibold">258,000</span>
        </div>
      </slide>
      <slide class="px-3 md:px-3 lg:px-8">
        <div class="flex justify-between items-center py-5">
          <h6 class="uppercase font-semibold">loan requests</h6>
          <p class="text-card">Today Thur, 11 Mar</p>
        </div>
        <div 
          class="flex justify-between items-center border-b border-gray-400 pb-1 py-3"
        >
          <p class="text-card">Number of Requested Loans</p>
          <span class="font-semibold">26</span>
        </div>
        <div 
          class="flex justify-between items-center border-b border-gray-400 pb-1 py-3"
        >
          <p class="text-card">Value of Requested Loans</p>
          <span class="font-semibold">258,000</span>
        </div>
        <!-- <div class="flex items-center cursor-pointer">
          <p
            class="font-semibold text-dashblack"
          >
            View All
          </p>
          <img
            src="@/assets/img/arrow-right.svg"
            alt=""
            class="ml-4"
          >
        </div> -->
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
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
#big-card {
  font-family: 'Lato', sans-serif;
  position: relative;
}
#big-card .VueCarousel {
  width: 415px ;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 12px;
}

#big-card .VueCarousel-pagination {
  text-align: right;
  width: 22%;
  margin-left: auto;
}

#big-card .VueCarousel-dot-container {
  margin: 0 !important;
}

#big-card .VueCarousel-dot--active {
  outline: none !important;
}

@media (max-width: 1280px) {
  #big-card .VueCarousel {
  width: auto ;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 12px;
}
}
</style>