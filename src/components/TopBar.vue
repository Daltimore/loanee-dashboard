<template>
  <div class="bg-transparent border-b
    border-line py-5 flex justify-between items-center relative mx-6">
    <div
      :class="this.routePath === 'dashboard-home' 
      ? 'flex flex-col' : ''">
      <h3
      v-if="this.routePath === 'dashboard-home'"
      class="font-bold text-4xl pb-4"
    >
      Dashboard
    </h3>
    <span class="text-sub text-sm absolute mt-12">Welcome Back!</span>
    </div>
    <div class="flex justify-between items-center">
      <button
        class="bg-dashblack rounded
        w-36 h-11 text-center account text-white focus:outline-none"
      >
        Account Settings
      </button>
      <p class="text-secondary text-sm px-12">Paul Smith</p>
      <img
        src="@/assets/img/notif.svg"
        alt=""
        class="w-6 h-6 cursor-pointer"
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routePath: ''
    }
  },
  mounted() {
    this.routePath = this.$route.name;
    // console.log(this.routePath);
    
  }

}
</script>

<style>
.account {
  font-family: 'Lato', sans-serif;
}
</style>