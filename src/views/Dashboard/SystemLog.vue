<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Activity" name="first">
        <activity></activity>
      </el-tab-pane>
      <el-tab-pane label="Upcoming Repayment" name="second">
        <upcoming-payment></upcoming-payment>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Activity from '../../components/SystemLogs/Activity'
import UpcomingPayment from '../../components/SystemLogs/UpcomingPayment'

export default {
  components: {
    Activity,
    UpcomingPayment
  },
  data() {
    return {
      activeName: 'first',
    }
  },
  methods: {
    handleClick(tab) {
      console.log(tab);
    }
  }
}
</script>

<style>
.el-tabs__item.is-active {
  color: #11141A;
  outline: none !important;
  font-weight: 600;
}
.el-tabs__active-bar {
  height: 3px;
  background: #11141A;
}
</style>