<template>
  <div class="home">
	  <van-nav-bar title="首页"></van-nav-bar>
	  <div class="content">
		  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
		    <van-swipe-item v-for="item in items" :key="item.id">
				<img :src="item.url" alt="">
			</van-swipe-item>
		  </van-swipe>
		  <van-notice-bar
			style="margin-top: -3px;"
		    left-icon="volume-o"
		    text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
		  />
		  <van-grid :column-num="3">
		    <van-grid-item v-for="item in liugrid" :key="item.id" @click="Jump(item.path)">
				<img :src="item.img_src" alt="">
				<span style="font-size: 15px;margin-top: 10px;">{{item.title}}</span>
			</van-grid-item>
		  </van-grid>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
	  return{
		   items:[
			{id:1,url:"https://t1.hxzdhn.com/uploads/tu/zyf/tt/20160520/jxv5znouudd.jpg"},
			{id:2,url:"https://t1.hxzdhn.com/uploads/tu/zyf/tt/20160520/zir5bihd0de.jpg"},
			{id:3,url:"https://t1.hxzdhn.com/uploads/tu/zyf/tt/20160520/3odbp3etrlw.jpg"}
		  ],
		  liugrid:[
			  {id:1,path:"/shopbuy",title:"商城购买",img_src:require("../assets/shangcheng.png")},
			  {id:2,path:"/logistics",title:"物流信息",img_src:require("../assets/wuliu.png")},
			  {id:3,path:"/video",title:"视频专区",img_src:require("../assets/shipin.png")},
			  {id:4,path:"/image",title:"图片分享",img_src:require("../assets/tupian.png")},
			  {id:5,path:"/feeback",title:"留言反馈",img_src:require("../assets/fankui.png")},
			  {id:6,path:"/contact",title:"联系我们",img_src:require("../assets/lianxi.png")}
		  ]
	  }
  },
  methods:{
	  Jump(val){
		  this.$router.push(val)
	  }
  }
}
</script>
<style>
	.content{
		margin-top: 0.1975rem;
	}
  .my-swipe .van-swipe-item img {
		width: 100%;
		height: 200px;
  }
  .van-grid-item img{
	  width: 30px;
	  height: 30px;
  }
</style>