<template>
  <div id="manage-loans">
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
     :data="loans.allLoanLevels"
     v-loading="loans.loader"
    >
      <el-table-column
        prop="level"
        label="Loan Level"
      ></el-table-column>
      <el-table-column
        label="Amount (N)"
      >
        <template slot-scope="scope">
          <span> {{ scope.row.amount | currencyFormat}}</span>
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
      <el-table-column
        label="Actions"
      >
        <template slot-scope="scope">
          <div class="flex">
            <span
              class="mx-3 cursor-pointer"
              @click="editLoanLevel(scope.row.id)"
            >
              <img src="@/assets/img/edit.svg" alt="">
            </span>
            <span
              class="cursor-pointer"
              @click="deletLoanLevel(scope.row.id)"
            >
              <img src="@/assets/img/delete.svg" alt="">
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
        :page-size="loans.perPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="loans.allLoansTotal">
      </el-pagination>
     </div>
   </div>
   <el-dialog
      :visible.sync="dialogVisible"
      width="40%"
      @close="handleClose"
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
            <el-form-item prop="interest_percentage_rate">
              <div class="flex flex-col">
                <label class="font-semibold">Interest Rate (%)</label>
                <el-input
                  v-model="newLoanForm.interest_percentage_rate"
                  class="w-input"
                  placeholder="Enter Interest Rate"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="level">
              <div class="flex flex-col">
                <label class="font-semibold">Loan Level</label>
                <el-input
                  v-model="newLoanForm.level"
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
                  @change="pickStatus"
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
                @click.prevent="handleCreate"
                class="rounded text-white font-semibold bg-dashblack px-6 py-3 mt-4 w-32 focus:outline-none"
              >
                {{currentID === null ? 'Create' : 'Edit' }}
              </button>
            </div>
          </el-form>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      title=""
      :visible.sync="deleteModal"
      width="50%"
    >
      <div class="flex justify-center items-center flex-col">
        <img src="@/assets/img/archive-warn.svg" alt="" />
        <p class="text-gray-600 my-6 text-base">Are you sure you want to delete this Loan Level?</p>
        <div class="flex justify-between item-center">
          <button
            class="border mr-8 border-dashblack py-3 w-32 rounded text-primary focus:outline-none"
            @click.prevent="closeModal"
          >
            Cancel
          </button>
          <button
            class="bg-dashblack rounded py-3 text-white w-32 focus:outline-none"
            @click.prevent="handleDelete"
          >
            Delete
          </button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      pageSizes: this.$store.state.pageSizes,
      deleteModal: false,
      newLoanForm: {
        amount: '',
        interest_percentage_rate: '',
        duration: '',
        status: '',
        level: ''
      },
      value: '',
      input: '',
      rules: {
        amount: [
          {
            required: true,
            message: 'Please enter an amount'
          }
        ],
        interest_percentage_rate: [
          {
            required: true,
            message: 'Please enter a interst_rate'
          }
        ],
        level: [
          {
            required: true,
            message: 'Please enter a loan_level'
          }
        ],
        duration: [
          {
            required: true,
            message: 'Please enter duration in months'
          }
        ],
        status: [
          {
            required: true,
            message: 'Please choose a status',
            trigger: 'change'
          }
        ]
      },
      dialogVisible: false,
      loader: false,
      options: [{
        value: 'enabled',
        label: 'Enabled'
      },
      {
        value: 'disabled',
        label: 'Disabled'
      },
      ],
      currentID: null,
      deleteID: null,
    }
  },
  mounted() {
    this.getAllLoansLevels()
  },
  computed: {
    ...mapState(['loans']),
    currentPage: {
      get() {
        return this.loans.currentPage
      },
      set(value) {
        return this.$store.commit('mutate', {
          property: 'currentPage',
          with: value
        })
      }
    }
  },
  methods: {
    ...mapActions([
      'getAllLoansLevels',
      'createLoanLevel',
      'handleSizeChange',
      'handleCurrentChange'
    ]),
    openModal() {
      this.dialogVisible = true;
    },
    pickStatus(val) {
      this.newLoanForm.status = val
    },
    async editLoanLevel(id) {
      this.loader = true
      await this.$http.get(`admin/loans/settings/loan-levels/${id}`)
        .then((res) => {
          this.loader = false
          this.newLoanForm = res.data.data
          this.dialogVisible = true
          this.currentID = this.newLoanForm.id
          
        })
        .catch(error => {
          this.loader = false
          this.$toastr.error(error.response.data.message)
        })
    },
    deletLoanLevel(id) {
      this.deleteModal = true
      this.deleteID = id
    },
    closeModal() {
      this.deleteModal = false
    },
    handleDelete() {
      this.loader = true
      this.$http.delete(`admin/loans/settings/loan-levels/${this.deleteID}`)
        .then(res => {
          if (res.status === 200) {
            this.loader = false
            this.$toastr.success(res.data.message)
            this.deleteModal = false
            this.getAllLoansLevels()
          }
        })
        .catch(error => {
          this.loader = false
          this.$toastr.error(error.response.data.message)
        })
    },
    handleClose() {
     this.currentID = null
     this.$refs['newLoan'].resetFields()
    },
    handleCreate() {
      this.$refs['newLoan'].validate((valid) => {
        if(valid) {
          const payload = {
            amount: this.newLoanForm.amount,
            interest_percentage_rate: this.newLoanForm.interest_percentage_rate,
            level: this.newLoanForm.level,
            duration: this.newLoanForm.duration,
            status: this.newLoanForm.status,
          }
          if(this.currentID !== null) {
            delete payload.level
            this.$http.put(`admin/loans/settings/loan-levels/${this.currentID}`, payload)
              .then((response) => {
                if(response.status === 200) {
                this.$toastr.success(response.data.message)
                this.$refs['newLoan'].resetFields()
                this.dialogVisible = false
                this.currentID = null
                this.getAllLoansLevels()
              }
              })
              .catch((error) => {
                this.$toastr.error(error.response.data.message)
            })
          } else {
            this.createLoanLevel(payload)
            .then((response) => {
              if(response.status === 200) {
                this.$toastr.success(response.data.message)
                this.$refs['newLoan'].resetFields()
                this.dialogVisible = false
                this.getAllLoansLevels()
              }
            })
            .catch((error) => {
              this.$toastr.error(error.response.data.message)
            })
          }
        }
      })
    }
  }
}
</script>

<style>
#manage-loans {
  font-family: 'Lato', sans-serif;
}
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