<template>
  <div class="tabbar">
	<van-tabbar v-model="active" route>
	  <van-tabbar-item to="/home">
		  <!-- slot-scope判断是否被选中 -->
	      <van-icon slot="icon" slot-scope="props" 
		  :name='props.active ? icon.home_active:icon.home_normal'></van-icon>
	      <span>首页</span>
	  </van-tabbar-item>
	  <van-tabbar-item to="/shop">
		  <!-- slot-scope判断是否被选中 -->
	      <van-icon slot="icon" slot-scope="props" 
	  		  :name='props.active ? icon.shop_active:icon.shop_normal'></van-icon>
	      <span>商城</span>
	  </van-tabbar-item>
	  <van-tabbar-item to="/mine">
		  <!-- slot-scope判断是否被选中 -->
	      <van-icon slot="icon" slot-scope="props" 
	  		  :name='props.active ? icon.mine_active:icon.mine_normal'></van-icon>
	      <span>我的</span>
	  </van-tabbar-item>
	</van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'FootBar',
  data(){
	  return{
		  active:0,
		  icon:{
			  home_active:require("../assets/home_d.png"),
			  home_normal:require("../assets/home.png"),
			  shop_active:require("../assets/shop_d.png"),
			  shop_normal:require("../assets/shop.png"),
			  mine_active:require("../assets/mine_d.png"),
			  mine_normal:require("../assets/mine.png")
		  }
	  }
  }
}
</script>

<style scoped>
.van-icon__image{		
	width: 25px;
	height: 25px;
}
.van-tabbar-item__text{
	font-size: 20px;
}
.van-tabbar-item--active{
	color: red;
}
</style>
