<template>
  <div id="main">
        <div class="store-content item">
            <div class="item-box">
                <!-- image tab -->
                <tab-image  :imsges="detailItem"></tab-image>
                <div class="banner">
                    <div class="sku-custom-title">
                        <div class="params-price">
                            <span><em>¥</em><i>{{detailItem.price}}</i></span>
                        </div>
                        <div class="params-info">
                            <h4>{{detailItem.shop_info.title}}</h4>
                            <h6>{{detailItem.shop_info.sub_title}}</h6>
                        </div>
                    </div>
                    <div class="sku-dynamic-params-panel">

                        <!-- 颜色和规格 -->
                        <div v-for="item in detailItem.spec_v2 "
                             class="sku-dynamic-params clear">
                            <span class="params-name">{{item.spec_name}}</span>
                            <ul class="params-colors">
                                <li class="cur" 
                                    v-for=" imgs  in item.spec_values"
                                 >
                                    <a><img :src="imgs.image "></a>
                                </li>
                            </ul>
                        </div>
                        

                        <div class="sku-dynamic-params clear">
                            <div class="params-name">数量</div>
                            <div class="params-detail clear">
                                <div class="item-num js-select-quantity">
                                    <span class="down down-disabled">-</span>
                                    <span class="num">1</span>
                                    <span class="up up-disabled">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sku-status">
                        <div class="cart-operation-wrapper clearfix">
                            <span class="blue-title-btn js-add-cart"><a>加入购物车</a></span>
                            <span class="gray-title-btn"><a>现在购买</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TabImage from '@/views/shopDetail/tabImage';
import { getDetailInfoById } from '@/getData/methods.js';
export default {

    data(){
        return{

            detailItem:{
                shop_info:{
                    ali_images:[]
                }
            }

        }
    },
  
    created(){

        let obj = this.$route.query.id

        getDetailInfoById(obj).then((params) => {

            this.detailItem = params.data.data
            console.log(this.detailItem)

        })


    },
    components:{
        TabImage
    }


}
</script>

