<template>
  <div>
    <div class="p-6" v-for="(bankDetailsForm, index) in userData" :key="index">
      <el-form
        ref="newUser"
        :model="bankDetailsForm"
      >
        <div class="grid grid-cols-2 gap-6">
          <el-form-item prop="account_name">
            <div class="flex flex-col">
              <label class="font-semibold">Default Bank Account</label>
              <el-input
                v-model="bankDetailsForm.bank.bank_name"
                class="w-input"
                placeholder=""
                disabled
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item prop="account_number">
            <div class="flex flex-col">
              <label class="font-semibold">Account Number</label>
              <el-input
                v-model="bankDetailsForm.account_number"
                class="w-input"
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
    userData: Array
  },
  data() {
    return {
      
    }
  },
  mounted() {
    // this.bankDetailsForm = this.userData.map(user => {
    //   return {...user}
    // })
    // console.log(this.bankDetailsForm);
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