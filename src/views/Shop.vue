<template>
	<div class="order">
	    <van-nav-bar title="商城"></van-nav-bar>
		<div class="content">
			<van-tree-select height="90vh" :items="items" :main-active-index.sync="active">
			  <template #content>
				<div class="shop" v-for="item in shop" :key="item.index">
					<div v-if="active === item.index">
						{{item.content}}
					</div>
				</div>
			  </template>
			</van-tree-select>
		</div>
	</div>
</template>
<script>
export default {
  name: 'Shop',
  data(){
	  return{
		  active:0,
		  items: [
			  { text: '分组 1' }, 
			  { text: '分组 2' },
			  { text: '分组 3' },
			  { text: '分组 4' },
			  { text: '分组 5' },
			  { text: '分组 6' },
			  { text: '分组 7' },
			  { text: '分组 8' },
			  { text: '分组 9' }
		  ],
		  shop:[
			  {index:0,content:"内容1"},
			  {index:1,content:"内容2"},
			  {index:2,content:"内容3"},
			  {index:3,content:"内容4"},
			  {index:4,content:"内容5"},
			  {index:5,content:"内容6"},
			  {index:6,content:"内容7"},
			  {index:7,content:"内容8"},
			  {index:8,content:"内容9"}
		  ]
		 
	  }
  }
}
</script>
<style>
</style>
