<template>
  <div>
    <div class="mt-10">
      <el-table
        :data="$store.state.loans.loanHistory"
        style="width: 100%;"
      >
        <el-table-column
          label="Loan Date"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.approved_at | formatDate }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Loan Amount"
        >
          <template slot-scope="scope">
            <span> {{ scope.row.amount_received | currencyFormat }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Duration">
          <template slot-scope="scope">
            <span>{{ scope.row.duration }} month</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="repayment_plan"
          label="Repayment Plan"
        ></el-table-column>
        <el-table-column
          label="Status"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.status === 'active'">Active</span>
            <span v-else>Inactive</span>
          </template>
        </el-table-column>
      </el-table>
      <!-- <div class="mt-10">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="100">
        </el-pagination>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userId: Number
  },
  data() {
    return {
      loading: false,
      tableData: []
    }
  },
  mounted() {
    this.fetchAllLoanHistory();
  },
  methods: {
    currencyFormat(number) {
      return number ? number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : 0
    },
    handleSizeChange(val) {
      console.log(`${val} items per page`);
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
    },
    fetchAllLoanHistory() {
      this.loading = true;
      if(this.userId !== undefined) {
        this.$http.get(`/admin/loans/requests/loanees/${this.userId}`)
        .then((res) => {
          this.$store.state.loans.numberOfLoans = res.data.data.total
          this.$store.state.loans.loanHistory = res.data.data.results
        })
        .catch((err) => {
          console.log(err);
        })
      }
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