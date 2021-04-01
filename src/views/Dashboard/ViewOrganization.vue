<template>
  <div id="organisation">
   <div class="flex justify-between items-center mt-3 pl-2">
    <h3
      class="font-semibold text-lg
      border-b-4 border-dashblack pb-2"
    >
      {{ currentCompany.name }}
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
        @click.prevent="openUploadModal"
        src="@/assets/img/upload.png"
        alt=""
        class="ml-4 w-10 h-10 cursor-pointer"
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
     :data="company.allCompaniesEmployees"
     v-loading="company.loader"
    >
      <el-table-column
        prop="staff_id"
        label="Staff ID"
      >
      </el-table-column>
      <el-table-column
        label="Full Name"
      >
        <template slot-scope="scope">
          {{ scope.row.first_name + ' ' + scope.row.last_name }}
        </template>
      </el-table-column>
      <el-table-column
        prop="phone"
        label="Phone Number"
      ></el-table-column>
      <el-table-column
        prop="position"
        label="Position"
      >
      </el-table-column>
      <el-table-column
        prop="loan_level"
        label="Loan Level"
      >
      </el-table-column>
     </el-table>
     <div class="mt-10">
      <el-pagination
        background
        @size-change="employeeshandleSizeChange"
        @current-change="employeesCurrentChange"
        style="float: right;"
        :current-page.sync="currentPage"
        :page-sizes="pageSizes"
        :page-size="company.perPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="company.companyEmployeesTotal">
      </el-pagination>
     </div>
   </div>
   <el-dialog
    :visible.sync="dialogVisible"
    width="40%"
   >
    <div class="p-6">
      <h3 class="text-dashblack font-bold text-2xl pb-8">Add Employee</h3>
      <el-form
        ref="addEmployee"
        :model="addEmployeeForm"
      >
        <el-form-item prop="staff_id">
          <div class="flex flex-col">
            <label class="font-semibold">Staff ID</label>
            <el-input
              v-model="addEmployeeForm.staff_id"
              class="w-input"
              placeholder="Enter Staff ID"
            ></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="first_name">
          <div class="flex flex-col">
            <label class="font-semibold">First Name</label>
            <el-input
              v-model="addEmployeeForm.first_name"
              class="w-input"
              placeholder="Enter First Name"
            ></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="last_name">
          <div class="flex flex-col">
            <label class="font-semibold">Last Name</label>
            <el-input
              v-model="addEmployeeForm.last_name"
              class="w-input"
              placeholder="Enter Last Name"
            ></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="email">
          <div class="flex flex-col">
            <label class="font-semibold">Email</label>
            <el-input
              v-model="addEmployeeForm.email"
              class="w-input"
              placeholder="Enter Email"
            ></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="bvn">
          <div class="flex flex-col">
            <label class="font-semibold">BVN</label>
            <el-input
              v-model="addEmployeeForm.bvn"
              class="w-input"
              placeholder="Enter BVN"
            ></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="phone">
          <div class="flex flex-col">
            <label class="font-semibold">Phone Number</label>
            <el-input
              v-model="addEmployeeForm.phone"
              class="w-input"
              placeholder="Enter Phone Number"
            ></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="position">
          <div class="flex flex-col">
            <label class="font-semibold">Position</label>
            <el-input
              v-model="addEmployeeForm.position"
              class="w-input"
              placeholder="Enter Position"
            ></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="level">
          <div class="flex flex-col">
            <label class="font-semibold">Loan Level</label>
            <el-select
              v-model="addEmployeeForm.level"
              placeholder="Choose Loan Level"
              @change="pickLevel"
            >
              <el-option
                v-for="item in loans.allLoanLevels"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
        </el-form-item>
        <div>
          <button
            @click.prevent="handleCreate"
            class="rounded text-white font-semibold bg-dashblack px-6 py-3 mt-4 w-32 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </el-form>
    </div>
   </el-dialog>
   <el-dialog
    :visible.sync="uploadModal"
    width="40%"
   >
    <h4 class="font-bold text-2xl text-dashblack pb-8">Employee CSV Upload</h4>
    <el-upload
      class="flex justify-center items-center"
      drag
      :action="nullAction"
      name="documentFile"
      :on-change="handleFileUpload"
      :limit="1"
      ref="scheduleUpload">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Try dropping some files here, Only excel files will be accepted <em>click to upload</em></div>
    </el-upload>
    <div class="mt-6 text-center">
      <h4 class="pb-4 text-lg font-semibold text-dashblack">File Information</h4>
      <span class="ml-5" v-if="!documentFile"> No File Choosen </span>
      <span class="ml-5" v-else> {{ documentFile.name }} </span>
    </div>
    <button class="mt-10 rounded text-white font-semibold bg-dashblack px-6 py-3 mt-4 w-32 focus:outline-none">
      Submit
    </button>
   </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      pageSizes: this.$store.state.pageSizes,
      companyEmployees: [],
      loader: false,
      uploadModal: false,
      currentCompany: {},
      documentFile: null,
      currentID: null,
      nullAction: `
        // eslint-disable-next-line no-console
        console.log("this is an action")`,
      addEmployeeForm: {
        staff_id: '',
        first_name: '',
        last_name: '',
        bvn: '',
        email: '',
        position: '',
        phone: '',
        level: ''
      },
      rules: {
        staff_id: [
          {
            required: true,
            message: 'Please enter staff ID'
          }
        ],
        first_name: [
          {
            required: true,
            message: 'Please enter First Name'
          }
        ],
        last_name: [
          {
            required: true,
            message: 'Please enter Last Name'
          }
        ],
        bvn: [
          {
            required: true,
            message: 'Please enter BVN'
          }
        ],
        email: [
          {
            required: true,
            message: 'Please enter email address'
          }
        ],
        position: [
          {
            required: true,
            message: 'Please enter position'
          }
        ],
        phone: [
          {
            required: true,
            message: 'Please enter phone number'
          }
        ],
        level: [
          {
            required: true,
            message: 'Please select a loan level',
            trigger: 'chnage'
          }
        ]
      },
      value: '',
      input: '',
      currentId: null,
      dialogVisible: false,
      options: [
      {
        value: 'Option1',
        label: 'Option1'
      },
      {
        value: 'Option2',
        label: 'Option2'
      }]
    }
  },
  mounted() {
    this.currentID = this.$route.params.id
    this.getCompanyEmployees(this.currentID)
    this.getAllLoansLevels()

  },
  computed: {
    ...mapState(['company', 'loans']),
    currentPage: {
      get() {
        return this.company.employeesCurrentPage
      },
      set(value) {
        return this.$store.commit('mutate', {
          property: 'employeesCurrentPage',
          with: value
        })
      }
    }
  },
  methods: {
    ...mapActions([
      'getCompanyEmployees',
      'employeeshandleSizeChange',
      'employeesCurrentChange',
      'getAllLoansLevels',
    ]),
    viewUser(id) {
      this.$router.push({ name: 'view-user', params: {id: id} });
    },
    pickLevel(val) {
      this.addEmployeeForm.level = val
    },
    handleFileUpload(file) {
      this.documentFile = file;
    },
    openUploadModal() {
      this.uploadModal = true
    },
    currencyFormat(number) {
      return number ? number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : 0
    },
    openModal() {
      this.dialogVisible = true;
    },
    handleClose() {
     this.currentId = null
     this.addCompanyForm = {}
    },
    handleCreate() {
      this.$refs['addEmployee'].validate((valid) => {
        if(valid) {
          const payload = {
            staff_id: this.addEmployeeForm.staff_id,
            first_name: this.addEmployeeForm.first_name,
            last_name: this.addEmployeeForm.last_name,
            bvn: this.addEmployeeForm.bvn,
            email: this.addEmployeeForm.email,
            position: this.addEmployeeForm.position,
            phone: this.addEmployeeForm.phone,
            loan_level_id: this.addEmployeeForm.level
          }
          this.$http.post(`admin/companies/${this.currentID}/employees`, payload)
            .then((response) => {
              if(response.status === 200) {
                this.$toastr.success(response.data.message)
                this.$refs['addEmployee'].resetFields()
                this.dialogVisible = false
                this.getCompanyEmployees(this.currentID)
              }
            })
            .catch((err) => {
              this.$toastr.error(err.response.data.message)
            })
          }
      })
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
#organisation {
  font-family: 'Lato', sans-serif;
}
</style>