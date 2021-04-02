<template>
  <div>
   <div class="flex justify-between items-center mt-3 pl-2">
    <h3
      class="font-semibold text-lg
      border-b-4 border-dashblack"
    >
      All Requests
    </h3>
    <div class="flex items-center">
      <div class="flex items-center mx-4">
        <p
          class="text-card text-md font-semibold pr-2"
        >Filter by</p>
        <el-select
          v-model="value"
          placeholder="Select filter option"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="mr-4">
        <el-input
          placeholder="Search"
          v-model="input"
        ></el-input>
      </div>
      <img
        src="@/assets/img/data.png"
        alt=""
        class="mx-4 w-9 h-9 border border-gray-300 p-2 cursor-pointer"
      >
    </div>
   </div>
   <div class="mt-10">
     <el-table
     style="width: 100%"
     :data="loans.allLoanRequests"
     v-loading="loans.loader"
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
      <el-table-column label="Date Created">
        <template slot-scope="scope">
          <span>{{ scope.row.created_at | formatDate }}</span>
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
      <el-table-column
        label="Actions"
      >
        <template slot-scope="scope">
          <div class="flex">
            <span
              class="mx-3 cursor-pointer"
              @click="viewLoanee(scope.row.id)"
            >
              <img src="@/assets/img/eye.svg" alt="">
            </span>
          </div>
        </template>
      </el-table-column>
     </el-table>
     <div class="mt-10" v-if="loans.allLoanRequests.length > 0">
      <el-pagination
        background
        @size-change="loanRequestHandleSizeChange"
        @current-change="loanRequestHandleCurrentChange"
        style="float: right;"
        :current-page.sync="currentPage"
        :page-sizes="pageSizes"
        :page-size="loans.loanRequestCurrentPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="loans.loanRequestsTotal">
      </el-pagination>
     </div>
   </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      pageSizes: this.$store.state.pageSizes,
      value: '',
      input: '',
      options: [
        {
          value: 'enabled',
          label: 'Enabled'
        },
        {
          value: 'disabled',
          label: 'Disabled'
        }
      ],
    }
  },
  mounted() {
    this.getAllLoanRequests()
  },
  computed: {
    ...mapState(['loans']),
    currentPage: {
      get() {
        return this.loans.loanRequestCurrentPage
      },
      set(value) {
        return this.$store.commit('mutate', {
          property: 'loanRequestCurrentPage',
          with: value
        })
      }
    },
    searchQuery: {
      get() {
        return this.loans.searchQuery
      },
      set(value) {
        return this.$store.commit('mutate', {
          property: 'searchQuery',
          with: value
        })
      }
    }
  },
  methods: {
    ...mapActions([
    'getAllLoanRequests',
    'loanRequestHandleSizeChange',
    'loanRequestHandleCurrentChange'
  ]),
    viewLoanee(id) {
      this.$router.push({ name: 'view-loanee', params: { id: id }})
    }
  }
}
</script>

<style>
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #11141A;
  color: #FFF;
}
.el-table th>.cell {
  color: #11141A;
}
</style>