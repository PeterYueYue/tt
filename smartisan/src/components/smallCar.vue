<template>
    <li class="nav-cart" >
            <a href="javascript:;">购物车</a>
            <!--根据class改变颜色-->
            <span class="cart-empty-num cart-num">
                <i>0</i>
            </span>
            <div class="nav-cart-wrapper">
                <div class="nav-cart-list">
                    <div class="empty" v-show="!getshopList.length" >
                        <h3>购物车为空</h3>
                        <p>您还没有选购任何商品，现在前往商城选购吧!</p>
                    </div>
                    <div class="full" v-show="getshopList.length" >
                        <div class="nav-cart-items">
                            <ul>
                                <li v-for="item in getshopList" class="clear">
                                    <div class="cart-item js-cart-item cart-item-sell">
                                        <div class="cart-item-inner">
                                            <div class="item-thumb">
                                                <img :src="item.shop_info.ali_image">
                                            </div>
                                            <div class="item-desc">
                                                <div class="cart-cell">
                                                    <h4>
                                                        <a href="#/item/100027401">{{item.shop_info.title}}</a>
                                                    </h4>
                                                    <p  class="attrs">
                                                        <span
                                                        v-for="coloItem in item.shop_info.spec_json[0].show_name"
                                                        
                                                        >{{coloItem}}</span>
                                                    </p>
                                                    <h6>
                                                        <span class="price-icon">¥</span><span class="price-num">{{item.price}}</span><span class="item-num">x {{item.count}}</span>
                                                    </h6>
                                                    
                                                </div>
                                            </div>
                                            <div @click="remove(item.id)" class="del-btn">删除</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="nav-cart-total">
                            <p>共 <strong class="ng-binding">{{totalCountAndMoney.counts}}</strong> 件商品</p>
                            <h5>合计：<span class="price-icon">¥</span>
                                <span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">
                                    {{totalCountAndMoney.allMoney}}
                                </span></h5>
                            <h6>
                               
                                 <router-link class="nav-cart-btn" to="/shop/car"> 去购物车 </router-link>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            
    </li>
</template>
<script>
import Car from '@/views/shopCar/car'

export default {
  
    data(){
        return{
            
        }
    },
    computed:{

        getshopList(){
            return this.$store.state.shopInfolist
        },
        totalCountAndMoney(){

            return this.$store.getters.totalCountAndMoney;
        }
    },
    methods:{
        remove(id){

            this.$store.dispatch('removeShopById',id)
        }

    },
    components:{

        Car
    }
    

}


</script>

