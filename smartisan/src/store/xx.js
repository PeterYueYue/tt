import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

import {getAddCount,getAddCarData,removeShopById} from '@/getData/methods.js'

const store = new Vuex.Store({

    state:{

        shop:[],
        shopInfolist:[],
        counts:[]

    },
    getters:{

        totalCountAndMoney(state){

            let allTotal = {

                counts:0,
                allMoney:0
            }

            state.shopInfolist.forEach((item)=>{
                
                 allTotal.counts += parseInt(item.count)
                 allTotal.allMoney += parseInt(item.count)*parseInt(item.price)
            })

            return allTotal


        }

    },
    mutations:{
        
       getChange(state,payload){
        payload.count=1;
        state.shopInfolist.push(payload)
        
       },
       chengeCount(state,payload){ //改变数量；
        let shop =  state.shopInfolist.find((item)=>{

            return item.id == payload.skuId
         })
           shop.count = payload.count
           
       },

       repalceCarShop(state,payload){
            payload.forEach(element => {
                state.counts.forEach(item => {

                    if(element.id == item.skuId){
                        element.count = item.count
                    }
                })
            });
            state.shopInfolist = payload
       },

       setCounts(state,payload){
            state.counts = payload;
       },
       romoveList(state,payload){
            console.log(payload)
            state.shopInfolist = state.shopInfolist.filter( item => item.id != payload )
        
       }
      
    },
    actions:{
        getAddCountAction(store,payload){
            let shop =  store.state.shopInfolist.find((item)=>{
               return item.id == payload.id
            })
            if(shop){
                let count = shop.count;

                if(payload.mins == true){
                    payload.count = --count;
                }else{
                    payload.count = ++count;
                }
                
            }else{
                
                payload.count  = 1;
            }
            getAddCount(payload).then((params)=>{ //计算数量
                
                if(shop){
                    store.commit('chengeCount',{
                        skuId: payload.id,
                        count: payload.count,
                    })
                }else{
                    store.dispatch('geyAddShopInfo',payload)
                }

            })
            
        },
        geyAddShopInfo(store,payload){

            getAddCarData(payload).then((params)=>{
                
                let shopinfo = params.data.data.list[0]
                store.commit('getChange',shopinfo)
                
            })

        },
        getCarShopIds(store){  //刷新的时候获取已选择的ID
            getAddCount().then((params)=>{

                let ids = params.data.idsList.map((item)=>{

                    return item.skuId
                })

                let counts = params.data.idsList.map((item)=>{

                    return item
                })
                store.commit('setCounts',counts)
               
               
                getAddCarData({id:ids.join(',')}).then((params2)=>{

                    let list = params2.data.data.list;

                    store.commit('repalceCarShop',list)

                })

            }) 

        },
        removeShopById(store,payload){ //通过ID发送给后端 删除数据；

            removeShopById(payload).then((params)=>{

                store.commit('romoveList',payload)

            })
            
        }

    }



})


export default store;