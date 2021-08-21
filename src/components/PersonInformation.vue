<template>
  <div>
    <div class="p-6">
      <el-form
        ref="newUser"
      >
        <div class="grid grid-cols-2 gap-6">
          <el-form-item prop="fullname">
            <div class="flex flex-col">
              <label class="font-semibold">Fullname</label>
              <el-input
                v-model="fullName"
                class=""
                placeholder=""
                disabled
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item prop="email">
            <div class="flex flex-col">
              <label class="font-semibold">Email</label>
              <el-input
                v-model="userData.email"
                class=""
                placeholder=""
                disabled
              ></el-input>
            </div>
          </el-form-item>
        </div>
        <div class="grid grid-cols-2 gap-6">
          <el-form-item prop="phone_number">
            <div class="flex flex-col">
              <label class="font-semibold">Phone Number</label>
              <el-input
                v-model="userData.phone"
                class=""
                placeholder=""
                disabled
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item prop="dob">
            <div class="flex flex-col">
              <label class="font-semibold">Date of Birth</label>
              <el-date-picker
                v-model="userData.date_of_birth"
                class=""
                type="date"
                placeholder=""
                disabled
                >
              </el-date-picker>
            </div>
          </el-form-item>
        </div>
        <div class="w-full">
          <el-form-item prop="address">
            <div class="flex flex-col">
              <label class="font-semibold">Address</label>
              <el-input
                v-model="userData.home_address"
                type="textarea"
                :rows="3"
                placeholder=""
                disabled
              ></el-input>
            </div>
          </el-form-item>
        </div>
        <div class="grid grid-cols-2 gap-6">
          <el-form-item prop="gender">
            <div class="flex flex-col">
              <label class="font-semibold">Gender</label>
              <el-input
                v-model="userData.gender"
                class=""
                placeholder=""
                disabled
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item prop="bvn">
            <div class="flex flex-col">
              <label class="font-semibold">BVN</label>
              <el-input
                v-model="userData.bvn"
                class=""
                placeholder=""
                disabled
              ></el-input>
            </div>
          </el-form-item>
        </div>
        <div class="grid grid-cols-2 gap-6">
          <el-form-item prop="occupation">
            <div class="flex flex-col">
              <label class="font-semibold">Occupation</label>
              <el-input
                v-model="userData.occupation"
                class=""
                placeholder=""
                disabled
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item prop="work_address">
            <div class="flex flex-col">
              <label class="font-semibold">Work Address</label>
              <el-input
                v-model="userData.work_address"
                class=""
                placeholder=""
                disabled
              ></el-input>
            </div>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userData: Object,
  },
  data() {
    return {
      fullName: ''
    }
  },
  mounted() {
    this.fullName = this.userData.first_name + " " + this.userData.last_name;
  },
}
</script>

<style>
/* . {
  width: 24rem;
} */
.el-input.is-active .el-input__inner, .el-input__inner:focus {
  border-color: #11141A;
  outline: 0;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 24rem;
}
</style>