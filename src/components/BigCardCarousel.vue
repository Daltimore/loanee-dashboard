<template>
  <div class="bg-white rounded lg:rounded-lg xl:rounded-xl shadow-md">
    <carousel :perPage="perPage">
      <slide class="px-3 md:px-3 lg:px-6">
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
</style>