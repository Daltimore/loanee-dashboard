<template>
  <div>
    <div class="p-6">
      <el-form
        ref="newUser"
        :model="newUserForm"
      >
        <div class="grid grid-cols-2 gap-6">
          <el-form-item prop="fullname">
            <div class="flex flex-col">
              <label class="font-semibold">Fullname</label>
              <el-input
                v-model="newUserForm.fullname"
                class="w-input"
                placeholder="Enter Full Name"
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item prop="email">
            <div class="flex flex-col">
              <label class="font-semibold">Email</label>
              <el-input
                v-model="newUserForm.email"
                class="w-input"
                placeholder="Enter Email"
              ></el-input>
            </div>
          </el-form-item>
        </div>
        <div class="grid grid-cols-2 gap-6">
          <el-form-item prop="phone_number">
            <div class="flex flex-col">
              <label class="font-semibold">Phone Number</label>
              <el-input
                v-model="newUserForm.phone_number"
                class="w-input"
                placeholder="Enter Phone number"
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item prop="dob">
            <div class="flex flex-col">
              <label class="font-semibold">Date of Birth</label>
              <el-date-picker
                v-model="newUserForm.dob"
                class="w-input"
                type="datetime"
                placeholder="Select date and time">
              </el-date-picker>
            </div>
          </el-form-item>
        </div>
        <div class="w-full">
          <el-form-item prop="address">
            <div class="flex flex-col">
              <label class="font-semibold">Address</label>
              <el-input
                v-model="newUserForm.address"
                type="textarea"
                :rows="3"
                placeholder="Enter Address"
              ></el-input>
            </div>
          </el-form-item>
        </div>
        <div class="grid grid-cols-2 gap-6">
          <el-form-item prop="gender">
            <div class="flex flex-col">
              <label class="font-semibold">Gender</label>
              <el-input
                v-model="newUserForm.gender"
                class="w-input"
                placeholder="Please choose gender"
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item prop="bvn">
            <div class="flex flex-col">
              <label class="font-semibold">BVN</label>
              <el-input
                v-model="newUserForm.bvn"
                class="w-input"
                placeholder="Please enter BVN"
              ></el-input>
            </div>
          </el-form-item>
        </div>
        <div class="grid grid-cols-2 gap-6">
          <el-form-item prop="occupation">
            <div class="flex flex-col">
              <label class="font-semibold">Occupation</label>
              <el-input
                v-model="newUserForm.occupation"
                class="w-input"
                placeholder="Please enter Occupation"
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item prop="work_address">
            <div class="flex flex-col">
              <label class="font-semibold">Work Address</label>
              <el-input
                v-model="newUserForm.work_address"
                class="w-input"
                placeholder="Please enter Work Address"
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
  data() {
    return {
      newUserForm: {
        fullname: 'Ayomide Thomas',
        email: 'ayomide@thomas.com',
        phone_number: '08012345678',
        dob: '',
        address: '152B, Karimu Kotun Crescent, Victoria Island, Lagos',
        gender: 'male',
        bvn: '12345678901',
        occupation: 'Banker',
        work_address: 'FCMB, Head Office'

      }
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