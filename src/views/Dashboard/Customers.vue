<template>
  <div>
   <div class="flex justify-between items-center mt-3 pl-2">
    <h3
      class="font-semibold text-lg
      border-b-4 border-dashblack"
    >
      All Customers
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
        prop="full_name"
        label="Full Name"
      ></el-table-column>
      <el-table-column
        prop="email"
        label="Email"
      >
      </el-table-column>
      <el-table-column
        prop="contact_number"
        label="Phone Number"
      ></el-table-column>
      <el-table-column
        prop="loan_level"
        label="Loan Level"
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
          full_name: 'PRE/001',
          email: 'hr@21st.com',
          contact_number: '08012345678',
          loan_level: 'Level 3'

        },
        {
          full_name: 'PRE/001',
          email: 'hr@21st.com',
          contact_number: '08012345678',
          loan_level: 'Level 3'
        },
        {
          full_name: 'PRE/001',
          email: 'hr@21st.com',
          contact_number: '08012345678',
          loan_level: 'Level 3'
        },
        {
          full_name: 'PRE/001',
          email: 'hr@21st.com',
          contact_number: '08012345678',
          loan_level: 'Level 3'
        },
        {
          full_name: 'PRE/001',
          email: 'hr@21st.com',
          contact_number: '08012345678',
          loan_level: 'Level 3'
        },
        {
          full_name: 'PRE/001',
          email: 'hr@21st.com',
          contact_number: '08012345678',
          loan_level: 'Level 3'
        },
        {
          full_name: 'PRE/001',
          email: 'hr@21st.com',
          contact_number: '08012345678',
          loan_level: 'Level 3'
        },
        {
          full_name: 'PRE/001',
          email: 'hr@21st.com',
          contact_number: '08012345678',
          loan_level: 'Level 3'
          
        },
        {
          full_name: 'PRE/001',
          email: 'hr@21st.com',
          contact_number: '08012345678',
          loan_level: 'Level 3'
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