<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="All Users" name="first">
        <all-users></all-users>
      </el-tab-pane>
      <el-tab-pane label="Admin" name="second">
        <admin></admin>
      </el-tab-pane>
      <el-tab-pane label="Users" name="third">
        <normal-users></normal-users>
      </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
import AllUsers from '../../components/Users/AllUsers'
import Admin from '../../components/Users/Admin'
import NormalUsers from '../../components/Users/NormalUser'

export default {
  components: {
    AllUsers,
    Admin,
    NormalUsers
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