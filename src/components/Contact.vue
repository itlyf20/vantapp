<template>
	<div class="contact">
		<van-nav-bar
		  title="联系我们"
		  left-text="返回"
		  left-arrow
		  @click-left="onClickLeft"
		/>
		联系我们
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
