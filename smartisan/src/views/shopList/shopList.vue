<template>
  <div id="main">
			<div class="sku-box store-content">
				<div class="sort-option">
					<ul class="line clear">
						<li><a href="javascript:;" class="active">综合排序</a></li>
						<li><a href="javascript:;" class="">销量排序</a></li>
						<li><a href="javascript:;" class="">价格低到高</a></li>
						<li><a href="javascript:;" class="">价格高到低</a></li>
					</ul>
				</div>
				<div class="gray-box">
					<div class="item-box">
						<shop-item :key="item.id" v-for="item in list"  :shop-item ="item" ></shop-item>	
					</div>
				</div>
			</div>
		</div>
</template>

<script>
import ShopItem from './shopitem.vue';
import { getShopListMthod } from "../../getData/methods"
export default {
  
	data(){

		return{

			
			list:[],
			itemIdex:0,
			index:0


		}

	},
	methods:{
		//获取点击的位置
		getActive(i,now_index){

			this.index = i
			console.log(now_index)

		}	
	},
	components:{
		//注册组件
		ShopItem
	},
	//声明周期函数 页面生成后获取数据；
	created(){

		getShopListMthod().then((data)=>{
				this.list = data.data.data.list;
				this.$store.state.allList = this.list

				
				
		})

		
		

	}
	




}



</script>
