<script>
	export default {
		globalData: {
			token: ""
		},
		onLaunch: function() {
			console.log('App Launch')
			uni.onTabBarMidButtonTap(() => {
				uni.navigateTo({
					url: '/pages/issue/index',
				});
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	body {
		background-color: #f6f6f9;
	}
</style>