<template>
  <div
    class="min-h-screen h-full grid grid-cols-2"
    id="login_container"
  >
    <div>
      <img
        src="@/assets/img/login.png"
        alt=""
        class="object-fit w-full h-screen"
      >
    </div>
    <div class="flex justify-center flex-col">
      <h3 class="font-bold text-4xl text-center">
        The Loan
      </h3>
      <p
        class="text-sub my-9 text-md text-center"
      >
        Please provide the detail below to reset password
      </p>
      <div>
        <el-form
          ref="form"
          :model="forgotPasswordForm"
          label-width="120px"
          class="px-32 mx-auto"
        >
          <el-input
            v-model="forgotPasswordForm.email"
            placeholder="Email"
          ></el-input>
          <div class="mt-10 flex justify-between items-center">
            <button
              class="bg-dashblack rounded
              w-36 h-11 text-center account text-white focus:outline-none"
            >
              Submit
            </button>
            <button
              @click.prevent="goBack"
              class="bg-transparent border border-dashblack rounded
              w-36 h-11 text-center account text-dashblack focus:outline-none"
            >
              Go Back
            </button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forgotPasswordForm: {
        email: ''
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style>
#login_container .el-input__inner {
  background: transparent;
  border-bottom: 1px solid #7F8FA4;
  width: 100%;
  border-top: none;
  border-right: none;
  border-left: none;
}
</style>