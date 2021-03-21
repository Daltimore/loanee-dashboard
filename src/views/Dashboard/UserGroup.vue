<template>
  <div>
     <div class="flex justify-between items-center mt-3 pl-2">
       <h3
        class="font-semibold text-lg
        border-b-4 border-dashblack"
      >
        User Group List
      </h3>
      <img
        src="@/assets/img/add.svg"
        alt=""
        class="-mt-1.5 cursor-pointer mx-4"
        @click.prevent="openModal"
      >
    </div>
    <div class="mt-10">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          prop="sn"
          label="S/N"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="User Group Name"
        ></el-table-column>
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
      width="80%"
    >
      <div class="p-6">
        <h3 class="text-dashblack font-bold text-2xl pb-8">Create New System User</h3>
        <el-form
          ref="userGroup"
          :model="userGroupForm"
        >
          <div class="grid grid-cols-2 gap-6">
            <el-form-item prop="name">
              <div class="flex flex-col">
                <label class="font-semibold">User Group Name</label>
                <el-input
                  v-model="userGroupForm.name"
                  class="w-input"
                  placeholder="Enter User Group name"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="status">
              <div class="flex flex-col">
                <label class="font-semibold">Status</label>
                <el-select
                  v-model="userGroupForm.status"
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
            <h3 class="font-bold text-lg text-dashblack border-b border-gray-300 pb-3">Access and Permission</h3>
            <div
              class="flex justify-between items-center my-6"
              v-for="(role, index) in groupPermissions"
              :key="index"
            >
              <p class="font-semibold text-sm">{{ role.name }}:</p>
              <div class="grid grid-cols-4 gap-20">
                <div class="flex items-center">
                  <p class="text-sm font-semibold">View</p>
                  <div class="ml-3">
                    <el-switch
                      style="display: block"
                      v-model="role.view"
                      active-color="#6EAE3C"
                      inactive-color="#24440B">
                    </el-switch>
                  </div>
                </div>
                <div class="flex items-center">
                  <p class="text-sm font-semibold">Add</p>
                  <div class="ml-3">
                    <el-switch
                      style="display: block"
                      v-model="role.add"
                      active-color="#6EAE3C"
                      inactive-color="#24440B">
                    </el-switch>
                  </div>
                </div>
                <div class="flex items-center">
                  <p class="text-sm font-semibold">Edit</p>
                  <div class="ml-3">
                    <el-switch
                      style="display: block"
                      v-model="role.edit"
                      active-color="#6EAE3C"
                      inactive-color="#24440B">
                    </el-switch>
                  </div>
                </div>
                <div class="flex items-center">
                  <p class="text-sm font-semibold">Delete</p>
                  <div class="ml-3">
                    <el-switch
                      style="display: block"
                      v-model="role.deleteRole"
                      active-color="#6EAE3C"
                      inactive-color="#24440B">
                    </el-switch>
                  </div>
                </div>
              </div>
            </div>
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
export default {
  data() {
    return {
      currentPage4: 1,
      dialogVisible: false,
      view: false,
      add: false,
      edit: false,
      deleteRole: false,
      groupPermissions: [
        { name: 'Dashboard Module', view: false, add: false, deleteRole: false },
        { name: 'Loans Module', view: false, add: false, deleteRole: false  },
        { name: 'Organizations Module', view: false, add: false, deleteRole: false  },
        { name: 'Users Module', view: false, add: false, deleteRole: false  },
        { name: 'System Logs Module:', view: false, add: false, deleteRole: false  },
        { name: 'DReport Module', view: false, add: false, deleteRole: false  }
      ],
      userGroupForm: {
        status: '',
        name: ''
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
      tableData: [
        {
          sn: 1,
          name: 'Super Admin',
          status: 'enabled'
        },
        {
          sn: 2,
          name: 'Admin',
          status: 'enabled'
        },
        {
          sn: 2,
          name: 'User',
          status: 'enabled'
        }
      ]
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`${val} items per page`);
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
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
</style>