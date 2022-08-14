<template>
  <div class="register">
    <section class="form-containner">
      <div class="manage-tips">
        <span class="title">后台管理系统</span>
        <el-form :rules="rules" ref="ruleFormRef" :model="registerUser" class="registerForm" label-width="80px">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="registerUser.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="registerUser.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="registerUser.password" placeholder="请输入密码" type="password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="password2">
            <el-input v-model="registerUser.password2" placeholder="请确认密码" type="password"></el-input>
          </el-form-item>
          <el-form-item label="选择身份">
            <el-select v-model="registerUser.identity" placeholder="选择身份">
              <el-option label="管理员" value="manager"></el-option>
              <el-option label="员工" value="employee"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button @click="handleSubmit(ruleFormRef)" class="submit-btn">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { ElMessage, FormInstance } from "element-plus";
import { ref, reactive } from "vue";
import { registerType, registerRulesType } from "../utils/types";
import { useRouter } from "vue-router";
import axios from "axios";
const ruleFormRef = ref<FormInstance>();
const router = useRouter();
const registerUser = ref<registerType>({
  name: "",
  email: "",
  password: "",
  password2: "",
  identity: "",
});
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请重新输入密码"));
  } else if (value !== registerUser.value.password) {
    callback(new Error("密码不一致"));
  } else {
    callback();
  }
};

const rules = reactive<registerRulesType>({
  name: [
    { required: true, message: "用户名不能为空", trigger: "change" },
    { min: 2, max: 30, message: "长度在2~30字符", trigger: "blur" },
  ],
  email: [{ type: "email", required: true, message: "邮箱格式不正确", trigger: "blur" }],
  password: [
    { required: true, message: "密码不能为空", trigger: "blur" },
    { min: 6, max: 30, message: "长度在2~30字符", trigger: "blur" },
  ],
  password2: [
    { required: true, message: "密码不能为空", trigger: "blur" },
    { min: 6, max: 30, message: "长度在2~30字符", trigger: "blur" },
    { validator: validatePass2, trigger: "blur" },
  ],
});
const handleSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid: boolean) => {
    if (valid) {
      const { data } = await axios.post("/api/users/register", registerUser.value);

      console.log(data);
      ElMessage({
        message: "注册成功",
        type: "success",
      });
      router.push("/");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
</script>
<style scoped>
.register {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(../assets/bg.jpg);
  background-size: 100% 100%;
}

.form-containner {
  width: 370px;
  height: 210px;
  position: absolute;
  top: 10%;
  left: 34%;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
}

.form-containner .manage-tips .title {
  font-weight: bold;
  font-size: 26px;
  color: #fff;
}

.registerForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
</style>
