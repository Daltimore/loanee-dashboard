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
      <el-table style="width: 100%" :data="tableData">
        <el-table-column
          prop="date"
          label="Date"
        ></el-table-column>
        <el-table-column
          prop="description"
          label="Description"
        ></el-table-column>
        <el-table-column
          prop="category"
          label="Category"
        ></el-table-column>
        <el-table-column
          prop="time"
          label="Time Ago"
        ></el-table-column>
        <el-table-column
        label="Status"
        fixed="right"
      >
        <template slot-scope="scope">
          <span
            v-if="scope.row.status !== 'failed'"
            class="text-tablegreen"
          >
            SUCCESS
          </span>
          <span v-else class="text-red-600">FAIL</span>
        </template>
      </el-table-column>
      </el-table>
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
          date: '12-03-2021 09:22:51',
          description: '12-03-2021 09:22:51',
          category: 'Customer',
          time: '3 days ago',
          status: 'success'
        },
        {
          date: '12-03-2021 09:22:51',
          description: '12-03-2021 09:22:51',
          category: 'Customer',
          time: '3 days ago',
          status: 'success'
        },
        {
          date: '12-03-2021 09:22:51',
          description: '12-03-2021 09:22:51',
          category: 'Customer',
          time: '3 days ago',
          status: 'failed'
        },
        {
          date: '12-03-2021 09:22:51',
          description: '12-03-2021 09:22:51',
          category: 'Customer',
          time: '3 days ago',
          status: 'success'
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