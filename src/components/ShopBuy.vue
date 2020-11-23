<template>
	<div class="shopbuy">
		<van-nav-bar
		  title="商城购买"
		  left-text="返回"
		  left-arrow
		  @click-left="onClickLeft"
		/>
		商城购买
	</div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push("/home")
    },
  }
};
</script>

<style scoped="scoped">
.van-nav-bar__text{
	color: #000000 !important;
}
</style>
