<template>
	<!-- 你今天不主动吃学习的苦，你明天就会被动吃生活的苦。 -->
	<div>
		<!-- 数据统计 -->
		<el-row :gutter="20">
			<el-col :span="6" v-for="(item,index) in counts" :key="index">
				<el-card shadow="hover">
					<div class="d-flex align-items-center">
						<i :class="[item.icon,item.color]" class="h4 mb-0 text-white text-center mr-3" style="width: 40px; height: 40px; line-height: 40px;"></i>
						<div>
							<h4 class="mb-1">{{item.num}}</h4>
							<small class="text-muted">{{item.desc}}</small>
						</div>
					</div>
				</el-card>
			</el-col>
		</el-row>


		<!-- 店铺，订单提示|统计图 -->
		<el-row :gutter="20" class="mt-3">

			<!-- 店铺、订单提示 -->
			<el-col :span="12" class="d-flex flex-column" style="height: 370px; justify-content: space-between;">

				<el-card class="box-card" shadow='never' v-for="(tip,ti) in tips" :key="ti">
					<div slot="header" class="clearfix">
						<span>{{tip.title}}</span>
						<el-button style="float: right; padding: 3px 0" type="text">{{tip.desc}}</el-button>
					</div>
					<div class="row">
						<div :class="tip.list.length|getCol" v-for="(tlist,listi) in tip.list" :key="listi">
							<button class="btn btn-light w-100">
								<h4 class="mb-1">{{tlist.value}}</h4>
								<small class="text-muted">
									{{tlist.name}}</small>
							</button>
						</div>


					</div>
				</el-card>



			</el-col>

			<!-- 统计图 -->
			<el-col :span="12">
				<el-card class="box-card" style="height: 370px;" shadow='hover'>
					<div slot="header" class="clearfix">
						<span>卡片名称</span>
						<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
					</div>
					<div v-for="o in 4" :key="o" class="text item">
						{{'列表内容 ' + o }}
					</div>
				</el-card>
			</el-col>
		</el-row>







	</div>








</template>

<script>
	export default {
		data() {
			return {
				counts: [{
						icon: 'el-icon-user-solid',
						desc: '关注人数（个）',
						num: '30',
						color: 'bg-primary'
					},
					{
						icon: 'el-icon-s-finance',
						desc: '订单总数（笔）',
						num: '120',
						color: 'bg-success'
					},
					{
						icon: 'el-icon-s-order',
						desc: '今日订单总金额（元）',
						num: '4183.80',
						color: 'bg-danger'
					},
					{
						icon: 'el-icon-s-data',
						desc: '本月剩余（元）',
						num: '100',
						color: 'bg-warning'
					},
				],
				tips: [{
						title: "店铺及商品提示",
						desc: "需要关注的店铺信息及待处理事项",
						list: [{
								name: "出售中",
								value: "64"
							},
							{
								name: "待回复",
								value: "10"
							},
							{
								name: "库存预警",
								value: "0"
							},
							{
								name: "仓库中",
								value: "3"
							},
						]
					},
					{
						title: "交易提示",
						desc: "需要立即处理的交易订单",
						list: [{
								name: "待付款",
								value: "0"
							},
							{
								name: "待发货",
								value: "10"
							},
							{
								name: "已发货",
								value: "0"
							},
							{
								name: "已收货",
								value: "3"
							},
							{
								name: "退款中",
								value: "3"
							},
							{
								name: "待售后",
								value: "3"
							},
						]
					},
				]
			}
		},
		filters: {
			getCol(total) {
				return `col-${12/total}`;
			}
		}

	}
</script>

<style>
</style>
