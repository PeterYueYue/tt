<template>
  <div class="gallery-wrapper">
    <div class="gallery">
        <div class="thumbnail">
            <ul>
                <li v-for=" item,i in imsges.shop_info.ali_images" 
                    :class="{on:i === index}"
                    @click="index = i"
                >
                    <img :src="item + '?x-oss-process=image/resize,w_54/quality,Q_90/format,webp'">
                </li>
                
            </ul>
        </div>
        <div class="thumb">
            <ul>
                <li class="on">
                    <img :src="imsges.shop_info.ali_images[index]+ '?x-oss-process=image/resize,w_440/quality,Q_90/format,webp'">
                </li>
                
            </ul>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            index:0
            
        }
    },
    props:["imsges"],
    




}
</script>

