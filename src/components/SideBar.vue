<template>
  <div class="fixed inset-y-0 left-0 w-44 transition duration-300 transform bg-dashblack overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
    <div class="pt-32">
      <router-link to="/dashboard" class="flex items-center pl-8">
        <img src="@/assets/img/dashboard-active.svg" alt="">
        <span class="text-white pl-4">Home</span>
      </router-link>
      <router-link to="#" class="flex items-center pl-8 my-5">
        <div class="relative">
        <p @click="toggle" class="flex flex-row items-center bg-transparent focus:outline-none">
          <img src="@/assets/img/graph.svg" alt="" class="mr-4">
          <span>Loans</span>
          <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </p>
        <div v-if="open" class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg">
          <div class="px-2 rounded-md">
            <a class="block text-white py-2 mt-2 text-sm font-semibold" href="#">Manage Loans</a>
            <a class="block text-white py-2 mt-2 text-sm font-semibold" href="#">Loan Request</a>
          </div>
        </div>
      </div>
      </router-link>
      <router-link to="#" class="flex items-center pl-8 my-5">
        <img src="@/assets/img/org.png" alt="" class="w-5 h-5">
        <span class="text-white pl-4">Organization</span>
      </router-link>
      <router-link to="#" class="flex items-center pl-8 my-5">
        <div class="relative">
        <p @click="toggle1" class="flex flex-row items-center bg-transparent focus:outline-none">
          <img src="@/assets/img/users.svg" alt="" class="mr-4">
          <span>Users</span>
          <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open1, 'rotate-0': !open1}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </p>
        <div v-if="open1" class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg">
          <div class="px-2 rounded-md">
            <a class="block text-white py-2 mt-2 text-sm font-semibold" href="#">Customers</a>
            <a class="block text-white py-2 mt-2 text-sm font-semibold" href="#">System Users</a>
            <a class="block text-white py-2 mt-2 text-sm font-semibold" href="#">User Group</a>
          </div>
        </div>
      </div>
      </router-link>
      <router-link to="#" class="flex items-center pl-8 my-5">
        <img src="@/assets/img/appointments.svg" alt="">
        <span class="text-white pl-4">System Log</span>
      </router-link>
      <router-link to="#" class="flex items-center pl-8 my-5">
        <img src="@/assets/img/settings.svg" alt="">
        <span class="text-white pl-4">Reports</span>
      </router-link>
      <div @click.prevent="logout" class="flex items-center pl-8 cursor-pointer" style="margin-top: 23rem;">
        <img src="@/assets/img/logout.svg" alt="">
        <span class="text-white pl-4">Logout</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      open1: false
    }
  },
  methods: {
    // toggle() {
    //   this.open = !this.open
    // },
    // toggle1() {
    //   this.open1 = !this.open1
    // }
    logout() {
      this.$router.push({ name: "login"})
    }
  }
}
</script>

<style scoped>
a {
  color: white !important;
}

a.router-link-exact-active {
  color: #ffffff !important;
  border-right: 4px solid #ffffff;
  font-weight: 600;
}

</style>