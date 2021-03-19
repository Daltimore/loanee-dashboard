<template>
  <div>
   <div class="flex justify-between items-center mt-3 pl-2">
    <h3
      class="font-semibold text-lg
      border-b-4 border-dashblack"
    >
      All Loans
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
        @click.prevent="openModal"
        src="@/assets/img/add.svg"
        alt=""
        class="-mt-1.5 cursor-pointer"
      >
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
   <el-dialog
      :visible.sync="dialogVisible"
      width="40%"
    >
      <div class="p-6">
        <h3 class="text-dashblack font-bold text-2xl pb-8">Create New Loan</h3>
        <div>
          <el-form
            ref="newLoan"
            :model="newLoanForm"
          >
            <el-form-item prop="amount">
              <div class="flex flex-col">
                <label class="font-semibold">Amount (N)</label>
                <el-input
                  v-model="newLoanForm.amount"
                  class="w-input"
                  placeholder="Amount (N)"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="interst_rate">
              <div class="flex flex-col">
                <label class="font-semibold">Interest Rate (%)</label>
                <el-input
                  v-model="newLoanForm.interst_rate"
                  class="w-input"
                  placeholder="Enter Interest Rate"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="loan_level">
              <div class="flex flex-col">
                <label class="font-semibold">Loan Level</label>
                <el-input
                  v-model="newLoanForm.loan_level"
                  class="w-input"
                  placeholder="Enter Loan Level"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="duration">
              <div class="flex flex-col">
                <label class="font-semibold">Duration (Month)</label>
                <el-input
                  v-model="newLoanForm.duration"
                  class="w-input"
                  placeholder="Enter Duration"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="status">
              <div class="flex flex-col">
                <label class="font-semibold">Status</label>
                <el-select
                  v-model="newLoanForm.status"
                  placeholder="Status"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
            <div>
              <button
                class="rounded text-white font-semibold bg-dashblack px-6 py-3 mt-4 w-32 focus-outline"
              >
                Submit
              </button>
            </div>
          </el-form>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newLoanForm: {
        amount: '',
        interst_rate: '',
        duration: '',
        status: ''
      },
      value: '',
      input: '',
      dialogVisible: false,
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
          date_created: '11/03/2021',
          status: 'enabled'
        },
        {
          loan_level: 'level 1',
          amount: 30000,
          interest: 22,
          duration: '1 month',
          date_created: '11/03/2021',
          status: 'enabled'
        },
        {
          loan_level: 'level 1',
          amount: 30000,
          interest: 22,
          duration: '1 month',
          date_created: '11/03/2021',
          status: 'enabled'
        },
        {
          loan_level: 'level 1',
          amount: 30000,
          interest: 22,
          duration: '1 month',
          date_created: '11/03/2021',
          status: 'enabled'
        },
        {
          loan_level: 'level 1',
          amount: 30000,
          interest: 22,
          duration: '1 month',
          date_created: '11/03/2021',
          status: 'enabled'
        },
        {
          loan_level: 'level 1',
          amount: 30000,
          interest: 22,
          duration: '1 month',
          date_created: '11/03/2021',
          status: 'enabled'
        },
        {
          loan_level: 'level 1',
          amount: 30000,
          interest: 22,
          duration: '1 month',
          date_created: '11/03/2021',
          status: 'disabled'
        },
        {
          loan_level: 'level 1',
          amount: 30000,
          interest: 22,
          duration: '1 month',
          date_created: '11/03/2021',
          status: 'enabled'
        },
        {
          loan_level: 'level 1',
          amount: 30000,
          interest: 22,
          duration: '1 month',
          date_created: '11/03/2021',
          status: 'disabled'
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
    openModal() {
      this.dialogVisible = true;
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
.w-input {
  width: 27rem;
}
.el-input.is-active .el-input__inner, .el-input__inner:focus {
  border-color: #11141A;
  outline: 0;
}
</style>