<template>


	<div>
		<el-container style="position: absolute; left: 0; top: 0; right: 0;bottom: 0; overflow: hidden;">
			<el-header class="d-flex align-items-center" style="background: #545c64;">
				<a class="h5 text-light mb-0 mr-auto">
					{{$conf.logo}}
				</a>
				<el-menu :default-active="navBar.active" mode="horizontal" @select="handleSelect" background-color="#545c64"
				 text-color="#fff" active-text-color="#ffd04b">

					<el-menu-item :index="index|numToString" v-for="(item,index) in navBar.list" :key="index">{{item.name}}
					</el-menu-item>


					<el-submenu index="6">
						<template slot="title">
							<el-avatar :size="20" 
							src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
							summer
						</template>
						<el-menu-item index="6-1">修改</el-menu-item>
						<el-menu-item index="6-2">退出</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-header>


			<el-container style="height: 100%;">

				<!-- 侧边布局 -->
				<el-aside width="200px">

					<el-menu default-active="0" @select="slideSelect" style="height: 100%;">

						<el-menu-item :index="index|numToString" v-for="(item,index) in slideMenus" :key="index">
							<i :class="item.icon"></i>
							<span slot="title">{{item.name}}</span>
						</el-menu-item>



					</el-menu>
				</el-aside>

				<!-- 主布局 -->
				<el-main>
					
					<!-- 面包屑导航 -->
					<div class="border-bottom mb-3" v-if="bran.length > 0"
					style="padding: 20px; margin: -20px;">
						
						<el-breadcrumb separator-class="el-icon-arrow-right">
						  <el-breadcrumb-item v-for="(item,index) in bran" :key="index" :to="{path:item.path}">{{item.title}}</el-breadcrumb-item>
						</el-breadcrumb>
					</div>
					
					
					<!-- 主内容 -->
					<router-view></router-view>
					
				</el-main>


			</el-container>
		</el-container>
	</div>


	<!-- 	<div>主布局
		<router-view></router-view>
	</div> -->

</template>

<script>
	import common from "@/common/mixins/common.js"

	export default {

		mixins: [common],

		data() {
			return {
				navBar:[],
				bran:[]
			};
		},
		
		watch:{
			'$route'(to,from) {
				// console.log(to);
				// console.log(from);
				
				// 本地存储
				localStorage.setItem('navActive',JSON.stringify({
					top:this.navBar.active,
					left:this.slideMenuActive
				}))
				
				this.getRouterBran()
			}
		},
		
		created() {
			// 初始化菜单
			this.navBar = this.$conf.navBar
			
			// 获取面包屑导航
			this.getRouterBran()
			
			// 初始化选中菜单
			this.__initNavBar()
		},

		computed: {

			slideMenuActive: {
				// return this.navBar.list[this.navBar.active].subActive || '0'
				get() {
					return this.navBar.list[this.navBar.active].subActive || '0'
				},
				set(val) {
					this.navBar.list[this.navBar.active].subActive = val
				}

			},

			slideMenus() {
				return this.navBar.list[this.navBar.active].submenu || []
			}
		},

		methods: {
			
			__initNavBar() {
				let r = localStorage.getItem('navActive')
				if(r) {
					r = JSON.parse(r)
					console.log(r)
				}
			},
			
			// 获取面包屑导航
			getRouterBran() {

				let b = this.$route.matched.filter(v=>v.name)
				// console.log(b)
				let arr = []
				b.forEach((v,k)=>{
					//过滤layout和index
					if(v.name === 'index' || v.name === 'layout') return
					arr.push({
						name:v.name,
						path:v.path,
						title:v.meta.title
					})
				})
				
				// console.log(arr)
				
				if(arr.length > 0) {
					arr.unshift({name:'index',path:'/index',title:'后台首页'})
				}
				this.bran = arr
				// console.log(arr)
			},
			
			handleSelect(key, keyPath) {
				this.navBar.active = key
				// 默认选中跳转到当前激活
				this.$route.push({
					name:this.slideMenus[this.slideMenuActive].pathname
				})
			},
			slideSelect(key, keyPath) {
				this.slideMenuActive = key
				
				// 跳到指定到页面
				console.log(this.slideMenus[Key].pathname)
			}
		}
	}
</script>

<style>

</style>
