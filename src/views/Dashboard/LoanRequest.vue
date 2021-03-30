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
     :data="loans.allLoanees"
     v-loading="loans.loader"
    >
      <el-table-column
        prop="level"
        label="Loan Level"
      ></el-table-column>
      <el-table-column
        prop="customer"
        label="Customer"
      ></el-table-column>
      <el-table-column
        label="Amount (N)"
      >
        <template slot-scope="scope">
          <span> {{ currencyFormat(scope.row.amount)}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="interest_percentage_rate"
        label="Interest Rate"
      ></el-table-column>
      <el-table-column label="Duration">
        <template slot-scope="scope">
          <span>{{ scope.row.duration }} months</span>
        </template>
      </el-table-column>
      <el-table-column label="Date Created">
        <template slot-scope="scope">
          <span>{{ scope.row.date_created | getFullDate}}</span>
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
     <div class="mt-10" v-if="loans.allLoanees">
      <el-pagination
        background
        @size-change="loaneesHandleSizeChange"
        @current-change="loaneesHandleCurrentChange"
        style="float: right;"
        :current-page.sync="currentPage"
        :page-sizes="pageSizes"
        :page-size="loans.loaneesCurrentPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="loans.loaneesTotal">
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
      currentPage4: 1,
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
    this.getAllLoanees()
  },
  computed: {
    ...mapState(['loans']),
    currentPage: {
      get() {
        return this.loans.loaneesCurrentPage
      },
      set(value) {
        return this.$store.commit('mutate', {
          property: 'loaneesCurrentPage',
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
    'getAllLoanees',
    'loaneesHandleSizeChange',
    'loaneesHandleCurrentChange'
  ]),
    currencyFormat(number) {
      return number ? number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : 0
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