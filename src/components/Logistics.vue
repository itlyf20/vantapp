<template>
	<div class="logistics">
		<van-nav-bar
		  title="物流信息"
		  left-text="返回"
		  left-arrow
		  @click-left="onClickLeft"
		/>
		物流信息
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

<style>
</style>
