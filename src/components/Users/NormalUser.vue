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
      <el-table :data="normalUser" width="100%">
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
  props: {
    userData: Array
  },
  data() {
    return {
      input: '',
      value: '',
      normalUser: [],
      currentPage4: 1,
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
    }
  },
  mounted() {
    this.normalUser = this.userData.filter((user) => {
      if(user.role !== 'super_admin') {
        return user
      }
    })
  },
  methods: {
    handleSizeChange(val) {
      console.log(`${val} items per page`);
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
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
</style>