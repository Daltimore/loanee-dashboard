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
          :rules="rules"
          label-width="120px"
          class="px-32 mx-auto"
        >
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              placeholder="Username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              placeholder="Password"
              show-password
              class="mt-10"
            ></el-input>
          </el-form-item>
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
            @click.prevent="handleLogin"
            class="bg-dashblack rounded mt-16
            w-36 h-11 text-center account text-white focus:outline-none"
          >
            {{ user.loader === true ? 'Hang On...' : 'Login' }}
          </button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      checked: false,
      rules: {
        username: [
          {
            required: true,
            message: 'Please enter your username',
          }
        ],
        password: [
          {
            required: true,
            message: 'Please enter your password',
          }
        ]
      }
    }
  },
  mounted() {
    if(Object.keys(this.$route.params).length > 0) {
      this.$toastr.error(this.$route.params.message)
      this.$toastr.info('Please Login again')
    } else {
      return false
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapActions(['login']),
    goToForgotPassword() {
      this.$router.push({ name: 'forgot-password'})
    },
    handleLogin() {
      this.$refs['form'].validate((valid) => {
        if(valid) {
          const payload = {
            username: this.loginForm.username,
            password: this.loginForm.password,
            client_id: process.env.VUE_APP_CLIENT_ID,
            client_secret: process.env.VUE_APP_CLIENT_SECRET
          }
          this.login(payload)
            .then((res) => {
              this.$refs['form'].resetFields();
              localStorage.setItem('maono_token', res.data.access_token);
              this.$http.defaults.headers['Authorization'] = 'Bearer' + ' ' + res.data.access_token;
              this.$router.push('/dashboard')
            })
            .catch((error) => {
              this.$toastr.error(error.response.data.message);
            })
        }
      })
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

#login_container .el-form-item__content {
  margin-left: 0px !important;
}
</style>