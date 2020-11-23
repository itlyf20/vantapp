<template>
	<div class="login">
		 <van-nav-bar title="登录页面"></van-nav-bar>
		<img src="../assets/timg.jpg" alt="">
		<van-form @submit="onSubmit">
		  <van-field
		    v-model="username"
		    name="用户名"
		    label="用户名"
		    placeholder="用户名"
		    :rules="[{ required: true, message: '请填写用户名' }]"
		  />
		  <van-field
		    v-model="password"
		    type="password"
		    name="密码"
		    label="密码"
		    placeholder="密码"
		    :rules="[{ required: true, message: '请填写密码' }]"
		  />
		  <div style="margin: 16px;">
		    <van-button round block type="info" native-type="submit">
		      提交
		    </van-button>
		  </div>
		</van-form>
	</div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      if(this.username=="admin"&&this.password=="tfl123456"){
		  this.$router.push("/home")
	  }else{
		  Toast.fail('用户名或密码错误，请检查后重新登录！');
	  }
    },
  },
};
</script>

<style scoped="scoped">
.login{
	width: 100%;
	height: 100vh;
	background-color: #42B983;
}
.login img{
	display: block;
	width: 120px;
	height: 120px;
	border-radius: 120px;
	margin: 3.875rem auto;
}
.van-form{
	padding: 0.9375rem 0.9375rem;
	margin-top: -3.125rem;
}
</style>
