<template>
  <div class="app">
    <input
      type="text"
      class="input-box"
      placeholder="请输入用户名"
      v-model="usermessage.username"
    />

    <input
      type="text"
      class="input-box"
      placeholder="请输入Email"
      v-model="usermessage.email"
    />

    <input
      type="password"
      class="input-box"
      placeholder="请输入密码"
      v-model="usermessage.password1"
    />

    <input
      type="password"
      class="input-box"
      :class="{ wrong:!iscorrect }"
      placeholder="请确认输入密码"
      v-model="usermessage.password2"
    />
    <button class="regist" @click="regist">注册</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usermessage: {
        username: "",
        email: "",
        password1: "",
        password2: "",
      },
    };
  },
  computed: {
    iscorrect() {
      return this.usermessage.password1 === this.usermessage.password2;
    },
  },
  methods: {
    regist() {
      console.log(this.iscorrect);
    },
  },
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
input:focus{
border: lightgray solid 1px ;
}
.wrong {
  border: 1px solid red !important; 
}
.regist {
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