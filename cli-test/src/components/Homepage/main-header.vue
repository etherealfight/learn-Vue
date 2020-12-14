<template>
  <div class="container">
    <div class="title"><img src="../../../public/book.png" />四大名著</div>
    <div class="searchbox">
      <el-input
        class="search"
        suffix-icon="el-icon-search"
        placeholder="请输入内容"
        v-model="input"
      ></el-input>
    </div>
    <div id="mainPageLogin">
      <router-link to="/regist-login/regist" class="mainPageLogin"
        >注册</router-link
      >
      <router-link to="/regist-login/login" class="mainPageLogin"
        >登录</router-link
      >
      <router-link to="/regist-login" class="mainPageLogin"
        >test</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style>
.container {
  display: flex;
  background: white;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.title {
  border: none;
  height: 100px;
}
.search {
  width: 300px !important;
  height: 45px;
}
.mainPageLogin{
  text-decoration: none;
  padding: 20px;
}
.mainPageLogin:hover{
  color: orange;
  border-bottom: orange 1px solid;
}
</style>