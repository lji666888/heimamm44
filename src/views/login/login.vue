<template>
  <div class="login_box">
    <div class="form_box">
      <!-- 挂载的元素 -->
      <div id="app">
      <el-input class="username" v-model="input1" prefix-icon="el-icon-user" placeholder="请输入手机号"></el-input>
      <el-input class="password" v-model="input2" placeholder="请输入密码" prefix-icon="el-icon-lock" show-password></el-input>
      <el-input class="yanzhengma" v-model="input3" prefix-icon="el-icon-key" placeholder="请输入验证码"></el-input>
    </div>
    </div>
    <img src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      input1: "",
      input2: "",
      input3: ""
    };
  }
};
</script>

<style lang="less">
.login_box {
  /* 弹性布局 */
  display: flex;
  /* 上下居中 */
  align-items: center;
  /* 左右均分 */
  justify-content: space-around;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  height: 100%;
  .form_box {
    width: 478px;
    height: 550px;
    background-color: #f5f5f5;
  }
  #app{
      margin-left:43px ;
  }
  .username {
    width: 394px;
    height: 45px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(204, 207, 213, 1);
    border-radius: 4px;
    margin-top: 99px;
  }
  .password {
    width: 394px;
    height: 43px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(204, 207, 213, 1);
    border-radius: 4px;
    margin: 25px 0px
  }
  .yanzhengma {
    width: 284px;
    height: 44px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(204, 207, 213, 1);
    border-radius: 4px;
  }
}
</style>