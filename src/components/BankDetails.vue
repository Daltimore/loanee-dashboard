<template>
  <div>
    <div class="p-6">
      <el-form
        ref="newUser"
        :model="bankDetailsForm"
      >
        <div class="grid grid-cols-2 gap-6">
          <el-form-item prop="account_name">
            <div class="flex flex-col">
              <label class="font-semibold">Default Bank Account</label>
              <el-input
                v-model="bankDetailsForm.account_name"
                class="w-input"
                placeholder=""
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
              ></el-input>
            </div>
          </el-form-item>
        </div>
        <div class="grid grid-cols-2 gap-6">
          <el-form-item prop="alternative_account_name">
            <div class="flex flex-col">
              <label class="font-semibold">Alternate Bank Account</label>
              <el-input
                v-model="bankDetailsForm.alternative_account_name"
                class="w-input"
                placeholder=""
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item prop="work_address">
            <div class="flex flex-col">
              <label class="font-semibold">Alternate Account Number</label>
              <el-input
                v-model="bankDetailsForm.alternative_account_number"
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
  data() {
    return {
      bankDetailsForm: {
        account_name: '',
        account_number: '',
        alternative_account_name: '',
        alternative_account_number: '',
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