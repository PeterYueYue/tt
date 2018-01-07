<template>
  <div class="item">
    <div>
      <div class="item-img">
        <img 
          :alt="itemInfo.title" 
          src="./1.png"
          style="opacity: 1;"
        >
      </div>
      <h6>{{itemInfo.title}}</h6>
      <h3 >{{itemInfo.sub_title}}</h3>
      <div class="params-colors">
        <ul class="colors-list">
          <li
          @mouseenter="index = i" 
          @click="table(i)"
          v-for="skuItem,i in sku_list">
            <a href="javascript:;" :class="{active: i === index}">
              <img :src="skuItem.image">
            </a>
            </li>
        </ul>
      </div>
      <div class="item-btns clearfix">
        <span class="item-gray-btn">

          <router-link  :to="seeDetail">查看详情</router-link>


        </span>
        <span @click="add" v-if="itemInfo.direct_to_cart" class="item-blue-btn">加入购物车 </span>
      </div>
      <div class="item-price clearfix">
        <i>¥</i><span>{{itemInfo.price}}</span>
      </div>
      <div class="discount-icon">false</div>
      <div class="item-cover">
        <a href="javascript:;" target="_blank"></a>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return  {
        index:0
      }
    },
    methods:{
      table(i){ //点击切换

          this.index = i
      },
      add(){//添加商品 响应后端请求；
          let thisIndexId = this.itemInfo.sku_id
          let obj={
            id:thisIndexId,
            count:1
          }
         
        this.$store.dispatch('getAddCountAction',obj)
        
      }
                
    },
    //计算属性
    computed : {
      itemInfo () {

        return this.shopItem.sku_list[this.index]
      },
      sku_list () {
        return this.shopItem.sku_list
      },
      seeDetail(){
        return {

          path:'/shop/detail/'+this.shopItem.id,
          query:{
            id:this.itemInfo.sku_id
          }

        }

      }
    },
    props: {
      shopItem : {
        type: Object
      }
    }
  }
</script>
