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
                v-model="fullname"
                class="w-input"
                placeholder=""
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item prop="email">
            <div class="flex flex-col">
              <label class="font-semibold">Email</label>
              <el-input
                v-model="userData.email"
                class="w-input"
                placeholder=""
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
                class="w-input"
                placeholder=""
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item prop="dob">
            <div class="flex flex-col">
              <label class="font-semibold">Date of Birth</label>
              <el-date-picker
                v-model="userData.date_of_birth"
                class="w-input"
                type="date"
                placeholder="">
              </el-date-picker>
            </div>
          </el-form-item>
        </div>
        <div class="w-full">
          <el-form-item prop="address">
            <div class="flex flex-col">
              <label class="font-semibold">Address</label>
              <el-input
                v-model="userData.address"
                type="textarea"
                :rows="3"
                placeholder=""
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
                class="w-input"
                placeholder=""
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item prop="bvn">
            <div class="flex flex-col">
              <label class="font-semibold">BVN</label>
              <el-input
                v-model="userData.bvn"
                class="w-input"
                placeholder=""
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
                class="w-input"
                placeholder=""
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item prop="work_address">
            <div class="flex flex-col">
              <label class="font-semibold">Work Address</label>
              <el-input
                v-model="userData.work_address"
                class="w-input"
                placeholder=""
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
  computed: {
    fullname() {
      return this.userData.first_name + " " + this.userData.last_name;
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
.w-input {
  width: 24rem;
}
.el-input.is-active .el-input__inner, .el-input__inner:focus {
  border-color: #11141A;
  outline: 0;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 24rem;
}
</style>