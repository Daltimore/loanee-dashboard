<template>
  <div class="flex justify-between mx-auto relative flex-col md:flex-row">
    <div class="w-left">
      <h5 class="font-semibold text-dashblack py-4">Quick Stats</h5>
      <div class="grid grid-cols-1 md:grid-cols-3 gap:4 md:gap-6 lg:gap-6">
        <small-card-carousel
          title1="New Customers this month"
          content1="2"
          title2="New Customers this year"
          content2="20"
          title3="Total Customers"
          content3="20"
        >
          <!-- <img source1="@/assets/img/increase.svg" alt=""> -->
        </small-card-carousel>
        <small-card-carousel
          title1="Loan Disbursed Today"
          content1="2k"
          title2="Loan Disbursed This Week"
          content2="12k"
          title3="Total Loan Disbursed"
          content3="25k"
        >
        </small-card-carousel>
        <small-card-carousel
          title1="Loan Repayment Today"
          content1="0"
          title2="Loan Repayment This Week"
          content2="27k"
          title3="Loan Repayment This Month"
          content3="27k"

        ></small-card-carousel>
      </div>
      <div class="grid grid-cols-2 gap-6 mt-11">
        <big-card-carousel></big-card-carousel>
        <big-card-carousel></big-card-carousel>
      </div>
      <div class="mt-10">
        <div class="flex justify-between items-center">
          <h3
            class="font-semibold text-2xl
            border-b-4 border-dashblack"
          >
            Lastest Loans
          </h3>
          <div class="flex" @click="moveToLoanRequest">
            <p
              class="font-semibold text-dashblack cursor-pointer"
            >
              View All
            </p>
            <img
              src="@/assets/img/arrow-right.svg"
              alt=""
              class="ml-4"
            >
          </div>
        </div>
        <div class="mt-6">
          <el-table
            :data="loans.allLoanRequests"
            v-loading="loans.loader"
            style="width:100%"
          >
            <el-table-column
              prop="level"
              label="Loan Level"
            ></el-table-column>
            <el-table-column
              prop="loanee_name"
              label="Customer"
            ></el-table-column>
            <el-table-column
              label="Amount (N)"
            >
              <template slot-scope="scope">
                <span> {{ scope.row.amount_requested | currencyFormat }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="Interest Rate"
            >
              <template slot-scope="scope">
                <span>{{ scope.row.interest_rate }} %</span>
              </template>
            </el-table-column>
            <el-table-column label="Duration">
              <template slot-scope="scope">
                <span>{{ scope.row.duration > 1 ? 
                  scope.row.duration + ' ' + 'months' : 
                  scope.row.duration + ' ' + 'month' }}
                </span>
              </template>
            </el-table-column>
            <el-table-column
              label="Status"
            >
              <template slot-scope="scope">
                <span
                  v-if="scope.row.status !== 'disabled'"
                  class="text-tablegreen"
                >
                  Enabled
                </span>
                <span v-else class="text-red-600">Disabled</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="w-right bg-white h-screen overflow-hidden overflow-y-scroll p-6">
      <div class="flex justify-between items-center">
        <p class="font-bold">Recent Activity</p>
          <div class="flex items-center cursor-pointer">
            <p
              class="font-semibold text-dashblack"
            >
              View All
            </p>
            <img
              src="@/assets/img/arrow-right.svg"
              alt=""
              class="ml-4"
            >
          </div>
      </div>
      <section class="mt-6">
        <div class="flex items-center pb-3">
          <img src="@/assets/img/create.svg" alt="">
          <div class="flex flex-col ml-3">
            <p class="text-card pb-1 font-semibold">Moyo created company profile</p>
            <span class="text-secondary text-sm">2 mins ago</span>
          </div>
        </div>
        <div class="flex items-center py-3">
          <img src="@/assets/img/create.svg" alt="">
          <div class="flex flex-col ml-3">
            <p class="text-card pb-1 font-semibold">Moyo created company profile</p>
            <span class="text-secondary text-sm">2 mins ago</span>
          </div>
        </div>
        <div class="flex items-center py-3">
          <img src="@/assets/img/password.svg" alt="">
          <div class="flex flex-col ml-3">
            <p class="text-card pb-1 font-semibold">Moyo created company profile</p>
            <span class="text-secondary text-sm">2 mins ago</span>
          </div>
        </div>
        <div class="flex items-center py-3">
          <img src="@/assets/img/create.svg" alt="">
          <div class="flex flex-col ml-3">
            <p class="text-card pb-1 font-semibold">Moyo created company profile</p>
            <span class="text-secondary text-sm">2 mins ago</span>
          </div>
        </div>
        <div class="flex items-center py-3">
          <img src="@/assets/img/create.svg" alt="">
          <div class="flex flex-col ml-3">
            <p class="text-card pb-1 font-semibold">Moyo created company profile</p>
            <span class="text-secondary text-sm">2 mins ago</span>
          </div>
        </div>
      </section>
      <div class="flex justify-between items-center mt-12">
        <p class="font-bold">Upcoming Repayments</p>
          <div class="flex items-center cursor-pointer">
            <p
              class="font-semibold text-dashblack"
            >
              View All
            </p>
            <img
              src="@/assets/img/arrow-right.svg"
              alt=""
              class="ml-4"
            >
          </div>
      </div>
      <section class="mt-6">
        <div class="flex items-center pb-3">
          <img src="@/assets/img/exclamation.svg" alt="">
          <div class="flex flex-col ml-3">
            <p class="text-card pb-1 font-semibold">Moyo created company profile</p>
            <span class="text-secondary text-sm">2 mins ago</span>
          </div>
        </div>
        <div class="flex items-center py-3">
          <img src="@/assets/img/exclamation.svg" alt="">
          <div class="flex flex-col ml-3">
            <p class="text-card pb-1 font-semibold">Moyo created company profile</p>
            <span class="text-secondary text-sm">2 mins ago</span>
          </div>
        </div>
        <div class="flex items-center py-3">
          <img src="@/assets/img/exclamation.svg" alt="">
          <div class="flex flex-col ml-3">
            <p class="text-card pb-1 font-semibold">Moyo created company profile</p>
            <span class="text-secondary text-sm">2 mins ago</span>
          </div>
        </div>
        <div class="flex items-center py-3">
          <img src="@/assets/img/exclamation.svg" alt="">
          <div class="flex flex-col ml-3">
            <p class="text-card pb-1 font-semibold">Moyo created company profile</p>
            <span class="text-secondary text-sm">2 mins ago</span>
          </div>
        </div>
        <div class="flex items-center py-3">
          <img src="@/assets/img/exclamation.svg" alt="">
          <div class="flex flex-col ml-3">
            <p class="text-card pb-1 font-semibold">Moyo created company profile</p>
            <span class="text-secondary text-sm">2 mins ago</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import SmallCardCarousel from '../../components/SmallCardCarousel'
import BigCardCarousel from '../../components/BigCardCarousel'

export default {
  components: {
    SmallCardCarousel,
    BigCardCarousel
  },
  data() {
    return {
    }
  },
  mounted() {
    this.getAllLoanRequests()
  },
  computed: {
    ...mapState(['loans']),
  },
  methods: {
    ...mapActions([
      'getAllLoanRequests'
    ]),
    moveToLoanRequest() {
      this.$router.push('/dashboard/loan-request')
    }
  }
}
</script>

<style scoped>
.w-left {
  width: 65%
}

.w-right {
  width: 30%;
}
</style>

<style>
.el-table th>.cell {
  color: #11141A;
}
</style>