<template>
  <div>
    <div class="flex justify-end">
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
        src="@/assets/img/add.svg"
        alt=""
        class="-mt-1.5 cursor-pointer"
      >
      <img
        src="@/assets/img/data.png"
        alt=""
        class="mx-4 mt-1 w-9 h-9 border border-gray-300 p-2 cursor-pointer"
      >
    </div>
    <div class="mt-10">
      <el-table
        :data="tableData"
        style="width:100%;"
      >
        <el-table-column
          prop="due_date"
          label="Due Date"
        ></el-table-column>
        <el-table-column
          prop="loan_id"
          label="Loan ID"
        ></el-table-column>
        <el-table-column
          label="Amount Due"
        >
          <template slot-scope="scope">
            <span> {{ currencyFormat(scope.row.amount) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="customer"
          label="Customer"
        ></el-table-column>
        <el-table-column
          prop="time"
          label="Time to go"
        ></el-table-column>
        <el-table-column
          prop="schedule"
          label="Schedule"
        ></el-table-column>
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
          due_date: '12-03-2021 14:32:59',
          loan_id: '00001',
          amount: 12000,
          customer: 'Ikechukwu Jones',
          time: '30mins',
          schedule: '1 of 4'
        },
        {
          due_date: '12-03-2021 14:32:59',
          loan_id: '00001',
          amount: 12000,
          customer: 'Ikechukwu Jones',
          time: '30mins',
          schedule: '1 of 4'
        },
        {
          due_date: '12-03-2021 14:32:59',
          loan_id: '00001',
          amount: 12000,
          customer: 'Ikechukwu Jones',
          time: '30mins',
          schedule: '1 of 4'
        },
        {
          due_date: '12-03-2021 14:32:59',
          loan_id: '00001',
          amount: 12000,
          customer: 'Ikechukwu Jones',
          time: '30mins',
          schedule: '1 of 4'
        },
        {
          due_date: '12-03-2021 14:32:59',
          loan_id: '00001',
          amount: 12000,
          customer: 'Ikechukwu Jones',
          time: '30mins',
          schedule: '1 of 4'
        },
        {
          due_date: '12-03-2021 14:32:59',
          loan_id: '00001',
          amount: 12000,
          customer: 'Ikechukwu Jones',
          time: '30mins',
          schedule: '1 of 4'
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

</style>