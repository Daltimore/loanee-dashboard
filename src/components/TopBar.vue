<template>
  <div class="bg-transparent border-b
    border-line py-5 flex justify-between items-center relative mx-2">
    <div>
      <h3 class="font-bold text-4xl pb-4">
      {{ header }}
    </h3>
    <span class="text-sub text-sm absolute -mt-3">
      {{ subHeader }}
    </span>
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
      routePath: '',
      header: '',
      subHeader: '',
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(x) {
        switch (x.name) {
        case 'dashboard-home':
          this.header = 'Dashboard'
          this.subHeader = 'Welcome Back'
          break;
        case 'manage-loans':
          this.header = 'Manage Loans'
          this.subHeader = 'Set up and modify loans'
        break;
        case 'loan-request':
          this.header = 'Loans Request'
          this.subHeader = 'Have a view of all Loan requests'
          break;
        case 'organisation':
          this.header = 'Organisation'
          this.subHeader = 'Manage all pre-approved organizations'
          break;
        case 'customers':
          this.header = 'Customers'
          this.subHeader = 'Keep track of all Customers!'
          break;
        case 'system-users':
          this.header = 'System Users'
          this.subHeader = 'Keep track of all System Users!'
          break;
        case 'user-groups':
          this.header = 'User Groups'
          this.subHeader = 'Keep track of all System Users!'
          break;
        case 'system-log':
          this.header = 'System Logs'
          this.subHeader = 'Monitor all activity that takes place on the platform'
          break;
          default:
            break;
        }
      }
    }
  }
}
</script>

<style>
.account {
  font-family: 'Lato', sans-serif;
}
</style>