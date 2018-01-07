<template>
<div id="main" class="hander-car">
    <div class="store-content">
        <div class="cart-box">
            <div class="title">
                <h2>购物清单</h2>
            </div>
            <div class="cart-inner">
                <div  :class="{hide:carShopInfo.length}"  class="empty-label">
                    <h3>您的购物车中还没有商品</h3>
                    <!-- <a class="link" href="javascript:;">现在选购</a> -->
                    <router-link class="link" to="/shop/list">现在选购</router-link>
                </div>
                <div :class="{hide:!carShopInfo.length}"  >
                    <div class="cart-table-title">
                        <span class="name">商品信息</span>
                        <span class="operation">操作</span>
                        <span class="subtotal">小计</span>
                        <span class="num">数量</span>
                        <span class="price">单价</span>
                    </div>
                    <car-item v-for="item in carShopInfo" 
                                    key="item.id"
                                    :shop="item"
                            >
                            </car-item>  
                </div>
            </div>
            <div :class="{hide:!carShopInfo.length}" class="cart-bottom-bg fix-bottom">
                <div class="cart-bar-operation">
                    <div>
                        <div class="choose-all js-choose-all">
                            <span @click="allCheckedH" :class="{'checkbox-on':isAllchecked}"   class="blue-checkbox-new "><a></a></span>
                            全选
                        </div>
                        <div class="delete-choose-goods">删除选中的商品</div>
                    </div>
                </div>
                <div class="shipping">
                    <div class="shipping-box">
                        <div class="shipping-total shipping-num">
                            <h4 class="">
                                已选择 <i>{{checkesShop.counts}}</i> 件商品
                            </h4>
                            <h5>
                                共计 <i >{{totalCountAndMoney.counts}}</i> 件商品
                            </h5>
                        </div>
                        <div class="shipping-total shipping-price">
                            <h4 class="">
                                应付总额：<span>￥</span><i >{{checkesShop.money}}</i> 
                            </h4>
                            <h5 class="shipping-tips">
                                应付总额不含运费
                            </h5>
                            
                        </div>
                    </div>
                    <span :class="{'disabled-btn':isok}" class="jianguo-blue-main-btn big-main-btn js-checkout "><a>现在结算</a></span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import CarItem from '@/views/shopCar/carItem'
export default {

    data(){
        return{

            allChecked:false
        }
    },
    methods:{
        allCheckedH(){

             this.isAllchecked = !this.isAllchecked
            
        }
        
    },

    computed:{

        carShopInfo(){

            // return this.$store.state.shopInfolist
            let shops = this.$store.state.shopInfolist;

            shops.forEach(item => {
                
                this.$set(item,"checked",true)

            });
            return shops
            
        },
        isAllchecked:{

            get(){
                let findItem =  this.carShopInfo.find((item)=> !item.checked)
                return !findItem
            },
            set(newValue){

                    this.$store.state.shopInfolist.forEach((item)=>{
                        item.checked = newValue;

                    })
            }

        },
        checkesShop(){ //已选择的商品数量
             
                let l = this.$store.state.shopInfolist.filter((item)=>{
                   return item.checked == true;

                })
                let w ={
                    counts:0,
                    money:0
                }
                w.counts = l.reduce((n,item)=>{
                    return parseInt(item.count) + n
                },0)
                w.money = l.reduce((n,item)=>{
                    return parseInt(item.count)*parseInt(item.price) + n
                },0)

                return w
               


        },
        totalCountAndMoney(){

            return this.$store.getters.totalCountAndMoney;
        },
        isok(){

            return this.checkesShop.counts === 0
        }
    

           

    },
    components:{

       CarItem 
    }

}
</script>

