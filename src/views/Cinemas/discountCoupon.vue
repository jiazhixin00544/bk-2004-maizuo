<template>
    <div>
        <!-- 优惠券单元格 -->
        <van-coupon-cell
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          @click="showList = true"
        />
        <!-- 优惠券列表 -->
        <van-popup
          v-model="showList"
          round
          position="bottom"
          style="height: 90%; padding-top: 4px;"
        >
          <van-coupon-list
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :disabled-coupons="disabledCoupons"
            @change="onChange"
            @exchange="onExchange"
          />
        </van-popup>
    </div>
</template>
<script>
      import Vue from 'vue';
      import { CouponCell, CouponList,Popup } from 'vant';
      Vue.use(CouponCell);
      Vue.use(CouponList);
      Vue.use(Popup);
      const coupon = {
      available: 1,
      condition: '满100元可以使用',
      reason: '',
      value: 1500,
      name: '有效期',
      startAt: 1610333634,
      endAt:   1614592000,
      valueDesc: "15",
      unitDesc: '元',
    };
      const coupon2 = {
      available: 1,
      condition: '满150元可以使用',
      reason: '',
      value: 2000,
      name: '有效期',
      startAt: 1610333634,
      endAt:   1614502000,
      valueDesc: "20",
      unitDesc: '元',
    };
      const Uncoupon = {
      available: 1,
      condition: '满100元可以使用',
      reason: '',
      value: 10,
      name: '已过期',
      startAt: 1510333634,
      endAt:   1610333634,
      valueDesc: "15",
      unitDesc: '元',
    };
    export default {
      data() {
        return {
          chosenCoupon: -1,
          coupons: [coupon,coupon2],
          disabledCoupons: [Uncoupon],
          showList:true,
        };
      },
      methods: {
        onChange(index) {
          this.showList = false;
          this.chosenCoupon = index;
        },
        onExchange(code) {
          this.coupons.push(coupon);
        },

      },
    };
</script>
<style  scoped>

</style>
