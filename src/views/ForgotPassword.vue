<template>
  <div
    class="min-h-screen h-full w-full md:grid grid-cols-2"
    id="login_container"
  >
    <div class="hidden md:block">
      <img
        src="@/assets/img/login.png"
        alt=""
        class="object-fit w-full h-screen"
      >
    </div>
    <div class="flex justify-center flex-col">
      <h3 class="font-bold text-4xl text-center mt-16 md:mt-0">
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
          class="px-12 md:px-32 mx-auto"
        >
          <el-form-item prop="email">
            <el-input
              v-model="forgotPasswordForm.email"
              placeholder="Email"
            ></el-input>
          </el-form-item>
          <div class="mt-20 md:mt-10 flex justify-between items-center">
            <button
              @click.prevent="handleSubmit"
              class="bg-dashblack rounded
              w-36 h-11 text-center account text-white focus:outline-none"
            >
              {{ loader === true ? 'Submitting...' : 'Submit'}}
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
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      loader: false,
      forgotPasswordForm: {
        email: ''
      },
      rules: {
        email: [
          {
            required: true,
            message: 'Please enter your email'
          }
        ]
      }
    }
  },
  methods: {
    ...mapActions(['forgotPassword']),
    goBack() {
      this.$router.go(-1);
    },
    handleSubmit() {
      this.loader = true
      this.$refs['form'].validate((valid) => {
        if(valid) {
          const payload = {
            email: this.forgotPasswordForm.email
          }
          this.forgotPassword(payload)
            .then((res) => {
              this.loader = false
              if(res.status === 200) {
                this.$refs['form'].resetFields()
                this.$toastr.success(res.data.message)
              }
            })
            .catch((err) => {
              this.loader = false
              this.$toastr.error(err.response.data.message)
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