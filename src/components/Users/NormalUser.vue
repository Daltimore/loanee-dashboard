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
      <el-table :data="tableData" width="100%">
        <el-table-column
          prop="sn"
          label="S/N"
        >
        </el-table-column>
        <el-table-column
          prop="user_name"
          label="Username"
        >
        </el-table-column>
        <el-table-column
          prop="email"
          label="Email"
        >
        </el-table-column>
        <el-table-column
          prop="role"
          label="Role"
        >
        </el-table-column>
        <el-table-column
          prop="date_added"
          label="Date Added"
        >
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
  data() {
    return {
      input: '',
      value: '',
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
          sn: 1,
          user_name: 'Moyo Mustapha',
          email: 'ayomide@21st.com',
          role: 'Super Admin',
          date_added: '11/03/2021',
          status: 'enabled',
        },
        {
          sn: 2,
          user_name: 'Moyo Mustapha',
          email: 'ayomide@21st.com',
          role: 'Super Admin',
          date_added: '11/03/2021',
          status: 'enabled',
        },
        {
          sn: 3,
          user_name: 'Moyo Mustapha',
          email: 'ayomide@21st.com',
          role: 'Super Admin',
          date_added: '11/03/2021',
          status: 'disabled',
        },
        {
          sn: 4,
          user_name: 'Moyo Mustapha',
          email: 'ayomide@21st.com',
          role: 'Super Admin',
          date_added: '11/03/2021',
          status: 'enabled',
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