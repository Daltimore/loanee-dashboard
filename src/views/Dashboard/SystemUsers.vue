<template>
  <div>
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
      v-if="user.allUsers"
    >
      <el-tab-pane label="All Users" name="first">
        <all-users
          :userData="user.allUsers"
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
        ></all-users>
      </el-tab-pane>
      <!-- <el-tab-pane label="" name="second">
        <admin :userData="user.allUsers"></admin>
      </el-tab-pane> -->
      <!-- <el-tab-pane label="Users" name="third">
        <normal-users :userData="user.allUsers"></normal-users>
      </el-tab-pane> -->
  </el-tabs>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import AllUsers from '../../components/Users/AllUsers'
// import Admin from '../../components/Users/Admin'

export default {
  components: {
    AllUsers,
    // Admin
  },
  data() {
    return {
      activeName: 'first',
      adminUsers: [],
      activeTab: null
    }
  },
  async mounted() {
    await this.getAllUsers()
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapActions([
      'getAllUsers',
      'handleSizeChange',
      'handleCurrentChange'
    ]),
    handleClick(tab) {
      this.activeTab = tab.name
    },
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