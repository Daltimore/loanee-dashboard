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
      <div class="w-left bg-white shadow-md" v-if="userData && userId">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="Personal Information" name="first">
            <person-information :userData="userData"></person-information>
          </el-tab-pane>
          <el-tab-pane label="Bank Details" name="second">
            <bank-details :userData="userData.bank_accounts"></bank-details>
          </el-tab-pane>
          <el-tab-pane label="Loan History" name="third">
            <loan-history :userId="userId"></loan-history>
          </el-tab-pane>
        </el-tabs>
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
              <span class="text-card font-semibold">Number of Loans</span>
              <span class="text-dashblack font-semibold">{{$store.state.loans.numberOfLoans}}</span>
            </div>
            <div
              class="border-t border-dash px-6 py-5 flex justify-between items-center"
            >
              <span class="text-card font-semibold">Loan Level</span>
              <span class="text-dashblack font-semibold">{{ userData.loan_level }}</span>
            </div>
            <!-- <div
              class="border-t border-b border-dash px-6 py-5 flex justify-between items-center"
            >
              <span class="text-card font-semibold">Level Progress</span>
              <span class="text-dashblack font-semibold">0%</span>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PersonInformation from '../../components/PersonInformation.vue'
import BankDetails from '../../components/BankDetails.vue'
import LoanHistory from '../../components/LoanHistory.vue'

export default {
  components: {
    PersonInformation,
    BankDetails,
    LoanHistory
  },
  data() {
    return {
      activeName: 'first',
      loader: false,
      userId: null,
      currentID: null,
      companyID: null,
      currentRoute: null,
      userData: {
        bank_accounts: []
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.currentRoute = from
    })
  },
  async mounted() {
    this.companyID = this.$route.params.companyId
    this.currentID = this.$route.params.id
    if(this.currentRoute.name === 'view-organisation') {
      this.loader = true
      await this.$http.get(`/admin/companies/${this.companyID}/employees/${this.currentID}`)
        .then((res) => {
          this.loader = false
          this.userData = res.data.data
        })
        .catch((err) => {
          this.loader = false
          this.$toastr.error(err.response.data.message)
        })
    } else {
      this.loader = true
      this.currentID = this.$route.params.id
      await this.$http.get(`/admin/loanees/${this.currentID}`)
        .then((res) => {
          this.loader = false
          this.userData = res.data.data
          console.log(res.data.data);
          this.userId = res.data.data.id
        }
      )
      .catch((err) => {
        this.loader = false
        this.$toastr.error(err.response.data.message)
      })
    }
  },
  methods: {
    handleClick(tab) {
      return tab
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.el-tabs__item.is-active {
  color: #11141A;
  outline: none !important;
  font-weight: 600;
}
.el-tabs__active-bar {
  height: 3px;
  background: #11141A;
}
#container .w-right {
  width: 30%;
}
#container .w-left {
  width: 70%;
}
.el-tabs__nav-wrap {
  padding-left: 1rem;
}
</style>