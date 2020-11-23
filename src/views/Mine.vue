<template>
  <div class="mine">
	<van-nav-bar title="我的"></van-nav-bar>
    <div class="content">
		<div class="title menu-title">
			<img src="../assets/timg.jpg" alt="">
			<van-cell center title="昵称:Taurus" is-link label="账号:tfl835" />
		</div>
		<div class="menu">
			<div class="menu-item">
				<van-cell icon="cashier-o" title="支付" is-link @click="zhifu"/>
			</div>
			<div class="menu-item">
				<van-cell icon="star-o" title="收藏" is-link @click="shouchang"/>
				<van-cell icon="coupon-o" title="相册" is-link  @click="xiangce"/>
				<van-cell icon="idcard" title="卡包" is-link  @click="kabao"/>
				<van-cell icon="smile-o" title="表情" is-link  @click="biaoqing"/>
			</div>
			<div class="menu-item">
				<van-cell icon="setting-o" title="设置" is-link @click="setting"/>
			</div>
			<van-button type="primary" class="btn" @click="logout">退出登录</van-button>
		</div>
	</div>
  </div>
</template>
<script>
import { Toast,Dialog } from 'vant';
export default{
	methods:{
		zhifu(){
			Toast.success('支付');
		},
		shouchang(){
			Toast.success('收藏');
		},
		xiangce(){
			Toast.success('相册');
		},
		kabao(){
			Toast.success('卡包');
		},
		biaoqing(){
			Toast.success('表情');
		},
		setting(){
			Toast.success('设置');
		},
		logout(){
			Dialog.confirm({
			  title: '退出登录',
			  message: '确认退出登录吗？',
			})
			.then(() => {
			   this.$router.push("/login")
			})
			.catch(() => {
			});
			
		}
	}
}
</script>
<style scoped="scoped">
.menu-item{
	padding: 5px 0;
}
.menu-title{
	display: flex;
	background-color: #FFFFFF;
}
.menu-title img{
	width: 60px;
	height: 60px;
	padding: 6px 6px;
}
.btn{
	display: block;
	width: 80%;
	margin-left: 10%;
	margin-right: 5%;
	margin-top: 30px;
	text-align: center;
}
</style>