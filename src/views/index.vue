<template>
  <div class="index">
    <div class="container">
      <h1 class="title">资金管理---用于学习</h1>
      <p class="lead">好好学，好好敲</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import axios from "../utils/http";
import Navbar from "../components/NavBar.vue";
onMounted(async () => {
  try {
    const data = await axios.get("/api/users/current");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
</script>

<style scoped>
.index {
  width: 100%;
  height: 100%;
  background: url(../assets/background.jpg) no-repeat;
  background-size: 100% 100%;
}
.container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 100px;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  color: white;
}
.title {
  font-size: 30px;
}
.lead {
  margin-top: 50px;
  font-size: 22px;
}
</style>
