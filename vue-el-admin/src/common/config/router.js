let routes = [
	{
		path:'/',
		name:'layout',
		redirect:{name:'index'},
		// component:()=>import('../../views/layout.vue'),
		component:'layout',
		children:[
			{
				// path:'/index',
				// name:'index',
				component:'index/index'
			
			},
			{
				component:'shop/goods/list'
			}
		]
	},
	{
		// path:'/login',
		// name:'login',
		component:'login/index'
	},
	{
		path:'*',
		redirect:{name:'index'}
	}
]

// 1获取路由信息方法
let getRoutes = function(){
	// 自动生成路由
	creatRoute(routes)
	return routes
}

// 2.自动生成路由
function creatRoute(arr) {
	for(let i = 0; i < arr.length;i++) {
		if(!arr[i].component) return
		// 去除index
		let val = getValue(arr[i].component)
		// 生成name
		arr[i].name = arr[i].name || val.replace(/\//g,'_')
		
		// 生成path
		arr[i].path = arr[i].path || `/${val}`
		
		// 自动生成component
		let componentFun = import(`../../views/${arr[i].component}.vue`)
		arr[i].component = ()=>componentFun
		if(arr[i].children && arr[i].children.length > 0) {
			creatRoute(arr[i].children)
		}
	}
}

// 去除index
function getValue(str) {
	// 获取最后一个/到索引
	let index = str.lastIndexOf('/')
	// 获取最后一个/后面到值
	let val = str.substring(index+1,str.length)
	// 判断是不是index结尾
	if(val === 'index') {
		return str.substring(index,-1)
	}
	return str
}

export default getRoutes()	
