<template>

<div class="cart-table">
    <div class="cart-group">
        <!--购物列表-->
        <div class="cart-top-items">
    <div class="cart-items">
        <div class="items-choose">

            <span    @click="isChecked" 
                    :class="{'checkbox-on':checked}"   
                    class="blue-checkbox-new ">
                    <a></a>
            </span>


        </div>
        <div class="items-thumb">
            <img :src="carItem.shop_info.ali_image">
            <a href="javascript:;" target="_blank"></a>
        </div>
        <div class="name hide-row" >
            <div class="name-table">
                <a href="javascript:;" target="_blank">{{carItem.shop_info.title}}</a>
                <ul class="attribute">
                    <li>透明</li>
                </ul>
            </div>
        </div>
        <div class="operation">
            <a @click="removeItem" class="items-delete-btn" ></a>
        </div>
        <div class="subtotal">{{shopInfo}}</div>
        <div class="item-cols-num">
            <div class="select js-select-quantity">
                <span @click="minusShop" :class="{ 'down-disabled': isMinus() }" class="down ">-</span>
                <span class="num">{{carItem.count}}</span>
                <span @click="addShop" class="up"  :class="{ 'down-disabled': isAdd() }">+</span>
                
            </div>
        </div>
        <div class="price">¥ {{carItem.price}}.00</div>
    </div>
</div>
        </car-item>    
    </div>
</div>
  


</template>
<script>

export default {
  
    props:["shop"],
    computed:{
        carItem(){

           let itemList = this.shop

           return itemList

        },
        shopInfo(){

            return parseInt(this.carItem.count)*parseInt(this.carItem.price)

        },
        checked(){
            return this.carItem.checked;
        }
       
    },
    methods:{
        //大购物车删除列表
         removeItem(){
            this.$store.dispatch('removeShopById',this.carItem.id)
        },
        addShop(){
            if(this.carItem.count>=this.carItem.shop_info.limit_num){
                return;
            }else{
                this.$store.dispatch('getAddCountAction',this.carItem)
            }
            
        },
        minusShop(){

            if(this.carItem.count == 1){
                return;
            }else{
                this.$store.dispatch('getAddCountAction',{
                id:this.carItem.id,
                mins:true
            })
            }
        },
        isAdd(){

            return this.carItem.count == this.carItem.shop_info.limit_num
        },
        isMinus(){
            return this.carItem.count == 1
        },
        isChecked(){  //单选
            this.carItem.checked = !this.carItem.checked

        }
    }

}
</script>

