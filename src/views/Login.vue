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
        Welcome back! Please login to your account.
      </p>
      <div>
        <el-form
          ref="form"
          :model="loginForm"
          label-width="120px"
          class="px-32 mx-auto"
        >
          <el-input
            v-model="loginForm.username"
            placeholder="Username"
          ></el-input>
          <el-input
            v-model="loginForm.password"
            placeholder="Password"
            class="mt-10"
          ></el-input>
          <div class="mt-6 flex justify-between items-center">
            <div>
              <el-checkbox v-model="checked">
                Remember Me
              </el-checkbox>
            </div>
            <p
              class="text-sub text-sm cursor-pointer"
              @click.prevent="goToForgotPassword"
            >Forgot Password</p>
          </div>
          <button
            @click.prevent="login"
            class="bg-dashblack rounded mt-16
            w-36 h-11 text-center account text-white focus:outline-none"
          >
            Login
          </button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        checked: false
      }
    }
  },
  methods: {
    goToForgotPassword() {
      this.$router.push({ name: 'forgot-password'})
    },
    login() {
      this.$router.push({ name: 'dashboard-home'})
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