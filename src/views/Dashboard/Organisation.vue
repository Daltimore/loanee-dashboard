<template>
  <div>
   <div class="flex justify-between items-center mt-3 pl-2">
    <h3
      class="font-semibold text-lg
      border-b-4 border-dashblack"
    >
      All Companies
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
        prop="company_id"
        label="Company ID"
      ></el-table-column>
      <el-table-column
        prop="company_name"
        label="Company Name"
      >
      </el-table-column>
      <el-table-column
        prop="email"
        label="Email"
      ></el-table-column>
      <el-table-column
        prop="contact_number"
        label="Contact Number"
      ></el-table-column>
      <el-table-column
        prop="no_of_staff"
        label="Number of Staff"
      ></el-table-column>
      <el-table-column
        prop="date_joined"
        label="Date Joined"
      >
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
        <h3 class="text-dashblack font-bold text-2xl pb-8">Add Company</h3>
        <div>
          <el-form
            ref="addCompany"
            :model="addCompanyForm"
          >
            <el-form-item prop="company_name">
              <div class="flex flex-col">
                <label class="font-semibold">Company Name</label>
                <el-input
                  v-model="addCompanyForm.company_name"
                  class="w-input"
                  placeholder="AEnter Company Name"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="email">
              <div class="flex flex-col">
                <label class="font-semibold">Contact Email</label>
                <el-input
                  v-model="addCompanyForm.email"
                  class="w-input"
                  placeholder="Enter Contact Email"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="contact_number">
              <div class="flex flex-col">
                <label class="font-semibold">Contact Number</label>
                <el-input
                  v-model="addCompanyForm.contact_number"
                  class="w-input"
                  placeholder="Enter Contact Number"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="no_of_staff">
              <div class="flex flex-col">
                <label class="font-semibold">Number of Staff</label>
                <el-input
                  v-model="addCompanyForm.no_of_staff"
                  class="w-input"
                  placeholder="Enter Number of Staff"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="address">
              <div class="flex flex-col">
                <label class="font-semibold">Company Address</label>
                <el-input
                  v-model="addCompanyForm.address"
                  class="w-input"
                  placeholder="Enter Company Address"
                ></el-input>
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
      addCompanyForm: {
        company_name: '',
        email: '',
        contact_number: '',
        no_of_staff: '',
        address: ''
      },
      value: '',
      input: '',
      currentPage4: 1,
      dialogVisible: false,
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
          company_id: 'PRE/001',
          company_name: '21st Century Evolution',
          email: 'hr@21st.com',
          contact_number: '08012345678',
          no_of_staff: 65,
          date_joined: '11-03-2021'
        },
        {
          company_id: 'PRE/001',
          company_name: '21st Century Evolution',
          email: 'hr@21st.com',
          contact_number: '08012345678',
          no_of_staff: 65,
          date_joined: '11-03-2021'
        },
        {
          company_id: 'PRE/001',
          company_name: '21st Century Evolution',
          email: 'hr@21st.com',
          contact_number: '08012345678',
          no_of_staff: 65,
          date_joined: '11-03-2021'
        },
        {
          company_id: 'PRE/001',
          company_name: '21st Century Evolution',
          email: 'hr@21st.com',
          contact_number: '08012345678',
          no_of_staff: 65,
          date_joined: '11-03-2021'
        },
        {
          company_id: 'PRE/001',
          company_name: '21st Century Evolution',
          email: 'hr@21st.com',
          contact_number: '08012345678',
          no_of_staff: 65,
          date_joined: '11-03-2021'
        },
        {
          company_id: 'PRE/001',
          company_name: '21st Century Evolution',
          email: 'hr@21st.com',
          contact_number: '08012345678',
          no_of_staff: 65,
          date_joined: '11-03-2021'
        },
        {
          company_id: 'PRE/001',
          company_name: '21st Century Evolution',
          email: 'hr@21st.com',
          contact_number: '08012345678',
          no_of_staff: 65,
          date_joined: 'disabled'
        },
        {
          company_id: 'PRE/001',
          company_name: '21st Century Evolution',
          email: 'hr@21st.com',
          contact_number: '08012345678',
          no_of_staff: 65,
          date_joined: '11-03-2021'
        },
        {
          company_id: 'PRE/001',
          company_name: '21st Century Evolution',
          email: 'hr@21st.com',
          contact_number: '08012345678',
          no_of_staff: 65,
          date_joined: 'disabled'
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