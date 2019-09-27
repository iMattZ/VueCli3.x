export default{
	logo:"UNI-ADMIN",
	navBar: {
		active: '0',
		list: [{
				name: "首页",
				subActive: "0",
				submenu: [{
						icon: "el-icon-s-home",
						name: "后台首页"
					},
					{
						icon: "el-icon-menu",
						name: "商品列表"
					}
				]
			},
			{
				name: "商品",
				subActive: "0",
				submenu: [{
					icon: "el-icon-menu",
					name: "商品列表"
				}]
			},
			{
				name: "订单"
			},
			{
				name: "会员"
			},
			{
				name: "设置"
			},
		]
	}
}