<template>
    <!-- 此组件用来展示演员列表信息 -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script>
// 导入swipper组件
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";

export default {
    mounted() {
        new Swiper(".swiper-container", {
            slidesPerView: 4,
            spaceBetween: 30,
        });
    },
};
</script>
<style lang="scss" scoped>
.swiper-container {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

</style>