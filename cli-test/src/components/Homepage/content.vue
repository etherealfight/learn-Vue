<!--
* @FileDescription:单篇文章组件，用于展示文章以及发表者的信息
-->
<template>
  <div class="contentBox">
    <div class="contentTop">
      <el-popover
        placement="top-start"
        :title="nickname"
        width="300"
        trigger="hover"
      >
        <div id="poBox">
          <span>个性签名：</span>
          <span id="userSign" style="padding-left: 5px">{{ sign }}</span>
          <span>个人简介：</span>
          <span id="userIntroduction" style="padding-left: 5px">{{
            introduction
          }}</span>
        </div>
        <img :src="userImg" class="contentImg" slot="reference" @click="toPersonalPage"/>
      </el-popover>

      <span id="contentUsername" @click="toPersonalPage">{{ username }}</span>
    </div>
    <div class="contentText">
      {{ contentText }}
    </div>
  </div>
</template>

<script>
export default {
  /**
   * 接受从contentList传来的文章以及用户参数
   */
  props: {
    //文章内容
    contentText: {
      type: String,
      default: "",
    },

    //用户名
    username: {
      type: String,
      default: "",
    },
    //用户昵称
    nickname: {
      type: String,
      default: "",
    },
    //用户头像
    userImg: {
      type: String,
      default: "",
    },
    //用户签名
    sign: {
      type: String,
      default: "",
    },
    //用户简介
    introduction: {
      type: String,
      default: "",
    },
  },
  methods: {
    toPersonalPage(){
      this.$router.pash({ path: '/personalPage'})
    }
  }
};
</script>

<style>
.contentBox {
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 5px;
}
.contentTop {
  width: 100%;
  padding: 10px 20px 20px 20px;
  display: flex;
  justify-content: left;
  align-items: center;
  border-bottom: 1px solid lightgray;
}
.contentImg {
  border-radius: 50%;
  margin-right: 20px;
}
.contentText {
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 10px;
}
#poBox {
  display: flex;
  flex-direction: column;
}
</style>