<template>
	<div class="video">
		<van-nav-bar
		  title="视频专区"
		  left-text="返回"
		  left-arrow
		  @click-left="onClickLeft"
		/>
		视频专区
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
