<template>
  <div id="all-users">
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
            v-for="item in roles"
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
        class="mx-4 mt-1 w-9 h-9 border border-gray-300 p-2 cursor-pointer"
      >
    </div>
    <div class="mt-10">
      <el-table :data="userData" width="100%">
        <el-table-column
          label="S/N"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="username"
          label="Username"
        >
        </el-table-column>
        <el-table-column
          prop="email"
          label="Email"
        >
        </el-table-column>
        <el-table-column
          label="Role"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.role === 'super_admin'">
              Super Admin
            </span>
            <span v-else>Loanee</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Date Added"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.date_created | getFullDate }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Status">
          <template slot-scope="scope">
            <span
              class="text-tablegreen"
              v-if="scope.row.status === 'enabled'"
            >
              Enabled
            </span>
            <span
              class="text-red-600"
              v-else
            >
              Disabled
            </span>
          </template>
        </el-table-column>
      </el-table>
      <div class="mt-10" v-if="user.allUsers.length > 0">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          style="float: right;"
          :current-page.sync="currentPage"
          :page-sizes="pageSizes"
          :page-size="user.perPage"
          layout="total, sizes, prev, pager, next, jumper"
          :total="user.usersTotal">
        </el-pagination>
      </div>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="80%"
    >
      <div class="p-6">
        <h3 class="text-dashblack font-bold text-2xl pb-8">Create New System User</h3>
        <el-form
          ref="newSystemUser"
          :model="newSystemUserForm"
        >
          <div class="grid grid-cols-2 gap-6">
            <el-form-item prop="username">
              <div class="flex flex-col">
                <label class="font-semibold">Username</label>
                <el-input
                  v-model="newSystemUserForm.username"
                  class="w-input"
                  placeholder="Enter User Name"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="email">
              <div class="flex flex-col">
                <label class="font-semibold">Email</label>
                <el-input
                  v-model="newSystemUserForm.email"
                  class="w-input"
                  placeholder="Enter Email"
                ></el-input>
              </div>
            </el-form-item>
          </div>
          <div class="grid grid-cols-2 gap-6 mt-6">
            <el-form-item prop="role">
              <div class="flex flex-col">
                <label class="font-semibold">Role</label>
                <el-select
                  v-model="newSystemUserForm.role"
                  placeholder="Status"
                  class="w-input"
                >
                  <el-option
                    v-for="item in roles"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
            <el-form-item prop="status">
              <div class="flex flex-col">
                <label class="font-semibold">Status</label>
                <el-select
                  v-model="newSystemUserForm.status"
                  placeholder="Status"
                  class="w-input"
                >
                  <el-option
                    v-for="item in status"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
          </div>
           <div>
              <button
                class="rounded text-white font-semibold bg-dashblack px-6 py-3 mt-4 w-32 focus-outline"
              >
                Submit
              </button>
            </div>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    userData: Array
  },
  data() {
    return {
      pageSizes: this.$store.state.pageSizes,
      dialogVisible: false,
      newSystemUserForm: {
        username: '',
        email: '',
        role: '',
        status: ''
      },
      status: [
        {
          value: 'enabled',
          label: 'Enabled'
        },
        {
          value: 'disabled',
          label: 'Disabled'
        }
      ],
      roles: [
        {
          value: 'super_admin',
          label: 'Super Admin'
        },
        {
          value: 'admin',
          label: 'Admin'
        },
        {
          value: 'user',
          label: 'User'
        }
      ],
      input: '',
      value: '',
    }
  },
  computed: {
    ...mapState(['user']),
    currentPage: {
      get() {
        return this.$store.state.loans.currentPage
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
    handleSizeChange() {
      this.$store.dispatch('handleSizeChange')
    },
    handleCurrentChange() {
      this.$store.dispatch('handleCurrentChange')
    },
    openModal() {
      this.dialogVisible = true
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

#all-users {
  font-family: 'Lato', sans-serif;
}
</style>