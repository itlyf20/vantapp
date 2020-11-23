<template>
  <div id="app">
    <div class="content">
		<router-view/>
	</div>
	<!-- 根据router中配置的meta用来显示和隐藏底部导航tabbar -->
	<FootBar v-if="$route.meta.TabbarShow"/>
  </div>
</template>
<script>
import FootBar from "./components/FootBar.vue"
export default {
  name: 'App',
  components:{FootBar}
}
</script>
<style>
html,body,#app{
	margin: 0;
	padding: 0;
	height: 100%;
}
</style>