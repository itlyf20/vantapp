<template>
	<div class="feeback">
		<van-nav-bar
		  title="留言反馈"
		  left-text="返回"
		  left-arrow
		  @click-left="onClickLeft"
		/>
		留言反馈
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
