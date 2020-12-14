<template>
  <div class="app">
    <input
      type="text"
      class="input-box"
      placeholder="请输入用户名"
      v-model="usermessage.username"
    />

    <input
      type="password"
      class="input-box"
      placeholder="请输入密码"
      v-model="usermessage.password"
    />

    <button class="login" @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usermessage: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
      login(){
          console.log(this.usermessage.username)
          console.log(this.usermessage.password)
      }
  }
};
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
}
.input-box {
  border: lightgray solid 1px;
  width: 20vw;
  height: 40px;
  margin: 10px;
  padding-left: 10px;
}
.login {
  width: 20vw+12px;
  height: 42px;
  margin: 10px;
  background: orange;
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 15px;
  font-weight: inherit;
  border: none;
}
</style>