<template>
  <div>
    <div class="mt-10">
      <el-table
        :data="tableData"
        style="width: 100%;"
      >
        <el-table-column
          prop="loan_date"
          label="Loan Date"
        ></el-table-column>
        <el-table-column
          label="Loan Amount"
        >
          <template slot-scope="scope">
            <span> {{ scope.row.loan_amount }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Status"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.is_verified === 1">Active</span>
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
  data() {
    return {
      tableData: [
      ]
    }
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