let routes = [
	{
		path:'/',
		name:'layout',
		redirect:{name:'index'},
		// component:()=>import('../../views/layout.vue'),
		component:'layout',
		children:[
			{
				path:'/index',
				name:'index',
				component:'index/index'
			
			}
		]
	},
	{
		path:'/login',
		name:'login',
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
		
		// 自动生成component
		let componentFun = import(`../../views/${arr[i].component}.vue`)
		arr[i].component = ()=>componentFun
		if(arr[i].children && arr[i].children.length > 0) {
			creatRoute(arr[i].children)
		}
	}
}

export default getRoutes()	
