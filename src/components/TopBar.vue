<template>
  <div class="bg-transparent border-b
    border-line py-5 flex justify-between items-center relative mx-2">
    <div
      :class="this.routePath === 'dashboard-home' 
      ? 'flex flex-col' : ''">
      <h3
      v-if="this.routePath === 'dashboard-home'"
      class="font-bold text-4xl pb-4"
    >
      Dashboard
    </h3>
    <h3
      v-if="this.routePath === 'manage-loans'"
      class="font-bold text-4xl pb-4"
    >
      Manage Loans
    </h3>
    <h3
      v-if="this.routePath === 'loan-request'"
      class="font-bold text-4xl pb-4"
    >
      Loan Request
    </h3>
    <h3
      v-if="this.routePath === 'organisation'"
      class="font-bold text-4xl pb-4"
    >
      Organization
    </h3>
    <h3
      v-if="this.routePath === 'customers' || this.routePath === 'view-user'"
      class="font-bold text-4xl pb-4"
    >
      Customers
    </h3>
    <h3
      v-if="this.routePath === 'system-users'"
      class="font-bold text-4xl pb-4"
    >
      System Users
    </h3>
    <h3
      v-if="this.routePath === 'user-groups'"
      class="font-bold text-4xl pb-4"
    >
      User Groups
    </h3>
    <h3
      v-if="this.routePath === 'system-log'"
      class="font-bold text-4xl pb-4"
    >
      System Log
    </h3>
    <span
      v-if="this.routePath === 'dashboard-home'"
      class="text-sub text-sm absolute mt-12"
    >
      Welcome Back!
    </span>
    <span
      class="text-sub text-sm absolute -mt-2"
      v-if="this.routePath === 'manage-loans'"
    >
      Set up and modify loans
    </span>
    <span
      class="text-sub text-sm absolute -mt-2"
      v-if="this.routePath === 'loan-request'"
    >
      Have a view of all Loan requests
    </span>
    <span
      class="text-sub text-sm absolute -mt-2"
      v-if="this.routePath === 'organisation'"
    >
      Manage all pre-approved organizations
    </span>
    <span
      class="text-sub text-sm absolute -mt-2"
      v-if="this.routePath === 'customers' || this.routePath === 'view-user'"
    >
      Keep track of all Customers!
    </span>
    <span
      class="text-sub text-sm absolute -mt-2"
      v-if="this.routePath === 'system-users'"
    >
      Keep track of all System Users!
    </span>
    <span
      class="text-sub text-sm absolute -mt-2"
      v-if="this.routePath === 'user-groups'"
    >
      Keep track of all System Users!
    </span>
    <span
      class="text-sub text-sm absolute -mt-2"
      v-if="this.routePath === 'system-log'"
    >
      Monitor all activity that takes place on the platform
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
      routePath: ''
    }
  },
  mounted() {
    this.routePath = this.$route.name;
    console.log(this.routePath);
  }

}
</script>

<style>
.account {
  font-family: 'Lato', sans-serif;
}
</style>