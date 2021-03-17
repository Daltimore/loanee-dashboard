<template>
  <div class="flex h-screen bg-dashboard">
    <side-bar></side-bar>
    <div class="flex-1 flex flex-col overflow-hidden ml-6">
      <top-nav></top-nav>
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-dashboard">
        <div class="container mt-3">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar'
import TopNav from '../components/TopBar'

export default {
  components: {
    SideBar,
    TopNav
  }
}
</script>

<style>

</style>