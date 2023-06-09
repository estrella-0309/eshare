function cleanParams(url) {
  // 匹配值为 null 或 undefined 的参数
  const regex = /(null|undefined)/g;
   // 删除匹配到的字符串
   return url.replace(regex, '');
}

const api=(Option)=>{
	let baseURL='http://47.115.220.70:8888/system'
	let url=baseURL+Option.url;
	if (Option.data) {
	  url+='?'+Object.keys(Option.data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(Option.data[key])).join('&')
	} 
	url=cleanParams(url)
	return new Promise((resolve,reject)=>{
		uni.showLoading({
			title:'加载中'
		})	
		uni.request({
			url,
			method:Option.method||'GET',
			header:Option.headers,
			data:Option.params,
			success:res=>{
				uni.hideLoading()
				if(res.data.status==200)
					resolve(res.data)
				else{
					uni.showToast({
						title:res.data.message,
						icon:'error'
					})
					// reject(res.data.message)
				}
			},
			fail:err=>{
				uni.showToast({
					title:'请求接口失败',
					icon:'error'
				})
				reject(err)
			}
		})
	})
	
}
export default api