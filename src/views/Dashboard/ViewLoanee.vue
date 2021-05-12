<template>
  <div id="container">
    <div>
      <img
        @click.prevent="goBack"
        src="@/assets/img/back.png"
        alt=""
        class="ml-2 w-5 h-6 object-fit mb-10 cursor-pointer"
      >
    </div>
    <div class="flex">
      <div class="w-left bg-white shadow-md">
        <div class="w-auto">
          <div class="p-6">
            <el-form
              ref="newUser"
            >
              <div class="grid grid-cols-2 gap-6">
                <el-form-item prop="fullname">
                  <div class="flex flex-col">
                    <label class="font-semibold">Duration</label>
                    <el-input
                      v-model="duration"
                      class=""
                      placeholder=""
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item prop="email">
                  <div class="flex flex-col">
                    <label class="font-semibold">Interest (Amount)</label>
                    <el-input
                      v-model="userData.interest"
                      class=""
                      placeholder=""
                    ></el-input>
                  </div>
                </el-form-item>
              </div>
              <div class="grid grid-cols-2 gap-6">
                <el-form-item prop="phone_number">
                  <div class="flex flex-col">
                    <label class="font-semibold">Interest Type</label>
                    <el-input
                      v-model="userData.interest_type"
                      class=""
                      placeholder=""
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item prop="dob">
                  <div class="flex flex-col">
                    <label class="font-semibold">Loan Level</label>
                    <el-input
                      v-model="userData.level"
                      class=""
                      placeholder="">
                    </el-input>
                  </div>
                </el-form-item>
              </div>
              <div class="grid grid-cols-2 gap-6">
                <el-form-item prop="gender">
                  <div class="flex flex-col">
                    <label class="font-semibold">Payment Status</label>
                    <el-input
                      v-model="userData.payment_status"
                      class=""
                      placeholder=""
                    ></el-input>
                  </div>
                </el-form-item>
                <el-form-item prop="bvn">
                  <div class="flex flex-col">
                    <label class="font-semibold">Repayment Plan</label>
                    <el-input
                      v-model="userData.repayment_plan"
                      class=""
                      placeholder=""
                    ></el-input>
                  </div>
                </el-form-item>
              </div>
            </el-form>
          </div>
        </div>
      </div>
      <div class="ml-6 w-right bg-white shadow-md">
        <div class="mt-8">
          <div class="flex justify-center items-center">
            <img src="@/assets/img/avatar.svg" alt="">
          </div>
          <div class="mt-12">
            <div
              class="border-t border-dash px-6 py-5 flex justify-between items-center"
            >
              <span class="text-card font-semibold">Amount Requested</span>
              <span class="text-dashblack font-semibold">{{ userData.amount_requested}}</span>
            </div>
            <div
              class="border-t border-dash px-6 py-5 flex justify-between items-center"
            >
              <span class="text-card font-semibold">Amount to be paid</span>
              <span class="text-dashblack font-semibold">{{ userData.amount_to_be_repaid }}</span>
            </div>
            <div
              class="border-t border-dash px-6 py-5 flex justify-between items-center"
            >
              <span class="text-card font-semibold">Date Approved</span>
              <span class="text-dashblack font-semibold">{{ userData.approved_at | formatDate }}</span>
            </div>
            <div
              class="border-t border-b border-dash px-6 py-5 flex justify-between items-center"
            >
              <span class="text-card font-semibold">Status</span>
              <span
                v-if="userData.approval_status === 'pending'"
                class="text-red-500 font-semibold"
              >
                Pending
              </span>
              <span
                v-else
                class="text-dashblack font-semibold"
              >
                {{ userData.status }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentID: null,
      loader: false,
      userData: {
        bank_accounts: []
      }
    }
  },
  mounted() {
    this.currentID = this.$route.params.id;
    this.loader = true;
    this.$http.get(`/admin/loans/requests/${this.currentID}`)
      .then((res) => {
        this.loader = false;
        this.userData = res.data.data;
      })
      .catch((err) => {
        this.$toastr.error(err.response.data.message)
      }
    )
  },
  computed: {
    duration() {
      return this.userData.duration > 1
      ? this.userData.duration + ' ' + 'months'
      : this.userData.duration + ' ' + 'month';
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
#container .w-right {
  width: 30%;
}
#container .w-left {
  width: 70%;
}

</style>