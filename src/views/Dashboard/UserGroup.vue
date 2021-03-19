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
        class="-mt-1.5 cursor-pointer"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage4: 1,
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