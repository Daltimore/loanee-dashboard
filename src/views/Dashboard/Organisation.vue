<template>
  <div id="organisation">
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
        <!-- <el-select
          v-model="value"
          placeholder="Select filter option"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select> -->
      </div>
      <div class="mr-4">
        <el-input
          placeholder="Search"
          v-model="searchQuery"
          @input="search"
        ></el-input>
      </div>
      <!-- <img
        @click.prevent="openModal"
        src="@/assets/img/add.svg"
        alt=""
        class="-mt-1.5 cursor-pointer"
      >
      <img
        src="@/assets/img/data.png"
        alt=""
        class="mx-4 w-9 h-9 border border-gray-300 p-2 cursor-pointer"
      > -->
    </div>
   </div>
   <div class="mt-10">
     <el-table
     style="width: 100%"
     :data="company.allCompanies"
     v-loading="company.loader"
    >
      <el-table-column
        prop="name"
        label="Company Name"
      >
      </el-table-column>
      <el-table-column
        prop="contact_email"
        label="Email"
      ></el-table-column>
      <el-table-column
        prop="contact_phone"
        label="Contact Number"
      ></el-table-column>
      <el-table-column
        prop="number_of_employees"
        label="Number of Staff"
      ></el-table-column>
      <el-table-column
        prop="address"
        label="Address"
      >
      </el-table-column>
      <el-table-column
        label="Actions"
      >
        <template slot-scope="scope">
          <div class="flex">
            <span
              class="mx-3 cursor-pointer"
              @click="viewCompany(scope.row)"
            >
              <img src="@/assets/img/eye.svg" alt="">
            </span>
            <span
              class="mx-3 cursor-pointer"
              @click="editCompany(scope.row.id)"
            >
              <img src="@/assets/img/edit.svg" alt="">
            </span>
          </div>
        </template>
      </el-table-column>
     </el-table>
     <div class="mt-10">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        style="float: right;"
        :current-page.sync="currentPage"
        :page-sizes="pageSizes"
        :page-size="company.perPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="company.companiesTotal">
      </el-pagination>
     </div>
   </div>
   <el-dialog
      :visible.sync="dialogVisible"
      width="40%"
      @close="handleClose"
    >
      <div class="p-6">
        <h3 class="text-dashblack font-bold text-2xl pb-8">{{ currentId === null ? 'Add Company' : 'Edit Company'}}</h3>
        <div>
          <el-form
            ref="addCompany"
            :model="addCompanyForm"
          >
            <el-form-item prop="company_name">
              <div class="flex flex-col">
                <label class="font-semibold">Company Name</label>
                <el-input
                  v-model="addCompanyForm.name"
                  class="w-input"
                  placeholder="Enter Company Name"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="contact_email">
              <div class="flex flex-col">
                <label class="font-semibold">Contact Email</label>
                <el-input
                  v-model="addCompanyForm.contact_email"
                  class="w-input"
                  placeholder="Enter Contact Email"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="contact_phone">
              <div class="flex flex-col">
                <label class="font-semibold">Contact Number</label>
                <el-input
                  v-model="addCompanyForm.contact_phone"
                  class="w-input"
                  placeholder="Enter Contact Number"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="number_of_employees">
              <div class="flex flex-col">
                <label class="font-semibold">Number of Staff</label>
                <el-input
                  v-model="addCompanyForm.number_of_employees"
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
                @click.prevent="handleCreate"
                class="rounded text-white font-semibold bg-dashblack px-6 py-3 mt-4 w-32 focus:outline-none"
              >
                {{currentId === null ? 'Submit' : 'Edit' }}
              </button>
            </div>
          </el-form>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import debounce from 'lodash.debounce'

export default {
  data() {
    return {
      pageSizes: this.$store.state.pageSizes,
      loader: false,
      addCompanyForm: {
        name: '',
        contact_email: '',
        contact_phone: '',
        number_of_employees: '',
        address: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Please enter company name'
          }
        ],
        contact_email: [
          {
            required: true,
            message: 'Please enter company contact email'
          }
        ],
        contact_phone: [
          {
            required: true,
            message: 'Please enter company contact phone'
          }
        ],
        number_of_employees: [
          {
            required: true,
            message: 'Please enter number of employees'
          }
        ],
        address: [
          {
            required: true,
            message: 'Please enter company address'
          }
        ]
      },
      value: '',
      input: '',
      currentId: null,
      dialogVisible: false
    }
  },
  async mounted() {
    await this.getAllCompanies()
  },
  computed: {
    ...mapState(['company']),
    currentPage: {
      get() {
        return this.company.currentPage
      },
      set(value) {
        return this.$store.commit('mutate', {
          property: 'currentPage',
          with: value
        })
      }
    },
    searchQuery: {
      get() {
        return this.company.searchQuery
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
      'getAllCompanies',
      'handleSizeChange',
      'handleCurrentChange',
      'createCompany'
    ]),
    search: debounce(function() {
      this.getAllCompanies()
    }, 500),
    currencyFormat(number) {
      return number ? number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : 0
    },
    openModal() {
      this.dialogVisible = true;
    },
    viewCompany(item) {
      this.$router.push({ name: 'view-organisation', params: {id: item.id, item: item}})
    },
    async editCompany(id) {
      this.loader = true
      await this.$http.get(`admin/companies/${id}`)
      .then((res) => {
        this.loader = false
        this.addCompanyForm = res.data.data
        this.dialogVisible = true
        this.currentId = this.addCompanyForm.id
      })
      .catch(error => {
        this.loader = false
        this.$toastr.error(error.response.data.message)
      })
    },
    handleClose() {
     this.currentId = null
     this.addCompanyForm = {}
    },
    handleCreate() {
      this.$refs['addCompany'].validate((valid) => {
        if(valid) {
          const payload = {
            name: this.addCompanyForm.name,
            contact_email: this.addCompanyForm.contact_email,
            contact_phone: this.addCompanyForm.contact_phone,
            number_of_employees: this.addCompanyForm.number_of_employees,
            address: this.addCompanyForm.address,
          }
          if(this.currentId !== null) {
            this.$http.put(`admin/companies/${this.currentId}`, payload)
              .then((res) => {
                if(res.status === 200) {
                  this.$toastr.success(res.data.message)
                  this.$refs['addCompany'].resetFields()
                  this.dialogVisible = false
                  this.currentId = null
                  this.getAllCompanies()
                }
              })
              .catch((error) => {
                this.$toastr.error(error.response.data.message)
            })
          } else {
            this.createCompany(payload)
            .then((response) => {
              if(response.status === 200) {
                this.$toastr.success(response.data.message)
                this.$refs['addCompany'].resetFields()
                this.dialogVisible = false
                this.getAllCompanies()
              }
            })
            .catch((err) => {
              this.$toastr.error(err.response.data.message)
            })
          }
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