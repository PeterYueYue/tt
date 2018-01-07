
//请求数据的方法；
let Axios = require('axios');
//请求地址
let base = "http://wwww.localhost:5000/api"

//设置接口路径
let urlMap={
    'shop_list' : '/shop_list',
    'count' : '/count',
    'add_car' : '/add_car',
    'remove_count' : '/remove_count',
    'shop_details' : '/shop_details'


}
export function getShopListMthod(){

    return Axios.get(base + urlMap.shop_list)

}
export function getAddCount(obj={}){
    
    return Axios.get(base + urlMap.count,{
        params:{
            skuId:obj.id,
            count:obj.count
        
        }
    })

}
export function getAddCarData(obj){
   
    return Axios.get(base + urlMap.add_car,{

        params:{
            skuId:obj.id
        }
    })
    
}
export function removeShopById(obj){
    
     return Axios.get(base + urlMap.remove_count,{
 
         params:{
             skuId:obj
         }
     })
     
 }
 export function getDetailInfoById(obj){
    
     return Axios.get(base + urlMap.shop_details,{
 
         params:{
             id:obj
         }
     })
     
 }
   
    