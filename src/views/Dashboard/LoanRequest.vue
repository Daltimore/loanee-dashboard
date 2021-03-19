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
     :data="tableData"
    >
      <el-table-column
        prop="loan_level"
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
        prop="interest"
        label="Interest Rate"
      ></el-table-column>
      <el-table-column
        prop="duration"
        label="Duration"
      ></el-table-column>
      <el-table-column
        prop="date_created"
        label="Date Created"
      ></el-table-column>
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
     <div class="mt-10">
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
     </div>
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      input: '',
      currentPage4: 1,
      options: [{
        value: 'Option1',
        label: 'Option1'
      }, {
        value: 'Option2',
        label: 'Option2'
      }, {
        value: 'Option3',
        label: 'Option3'
      }, {
        value: 'Option4',
        label: 'Option4'
      }, {
        value: 'Option5',
        label: 'Option5'
      }],
      tableData: [
        {
          loan_level: 'level 1',
          amount: 30000,
          interest: 22,
          duration: '1 month',
          date_created: '11-03-2021 13:03:11',
          status: 'enabled',
          customer: 'Ikechukwu Jones'
        },
        {
          loan_level: 'level 1',
          amount: 30000,
          interest: 22,
          duration: '1 month',
          date_created: '11-03-2021 13:03:11',
          status: 'enabled',
          customer: 'Hassan Okiemute'
        },
        {
          loan_level: 'level 1',
          amount: 30000,
          interest: 22,
          duration: '1 month',
          date_created: '11-03-2021 13:03:11',
          status: 'enabled',
          customer: 'Joshua Anthony'
        },
        {
          loan_level: 'level 1',
          amount: 30000,
          interest: 22,
          duration: '1 month',
          date_created: '11-03-2021 13:03:11',
          status: 'enabled',
          customer: 'Lionel Ronaldo'
        },
        {
          loan_level: 'level 1',
          amount: 30000,
          interest: 22,
          duration: '1 month',
          date_created: '11-03-2021 13:03:11',
          status: 'enabled',
          customer: 'Yakubu Martins'
        },
        {
          loan_level: 'level 1',
          amount: 30000,
          interest: 22,
          duration: '1 month',
          date_created: '11-03-2021 13:03:11',
          status: 'enabled',
          customer: 'Yakubu Martins'
        },
        {
          loan_level: 'level 1',
          amount: 30000,
          interest: 22,
          duration: '1 month',
          date_created: '11-03-2021 13:03:11',
          status: 'disabled',
          customer: 'Yakubu Martins'
        },
        {
          loan_level: 'level 1',
          amount: 30000,
          interest: 22,
          duration: '1 month',
          date_created: '11-03-2021 13:03:11',
          status: 'enabled',
          customer: 'Yakubu Martins'
        },
        {
          loan_level: 'level 1',
          amount: 30000,
          interest: 22,
          duration: '1 month',
          date_created: '11-03-2021 13:03:11',
          status: 'disabled',
          customer: 'Yakubu Martins'
        }
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
    },
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