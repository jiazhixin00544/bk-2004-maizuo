<template>
    <div>
        <div class="headerPay">支付结果</div>
        <div class="center">
            <div class="imgPay"><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3894795107,2017037738&fm=26&gp=0.jpg" alt=""></div>
            <div class="paySuccess">支付成功啦!</div>
        </div>
        <div class="footerPay">
            <div class="lookPay">查看订单</div>
            <div class="goIndex">返回首页</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>>
<style scoped>
    .headerPay{
        text-align: center;
        font-size: 24px;
        margin-top: 10px;

    }
    .center{
        margin-top: 100px;
        text-align: center;
    }
    .imgPay>img{
        width: 100px;
        height: 100px;
    }
    .paySuccess{
        margin-top: 20px;
        color: gry;
        font-size: 20px;
    }
    .footerPay{
        text-align: center;
        margin-top: 20px;
        font-size: 20px;
    }
    .lookPay{
        margin: auto;
        width: 150px;
        background-color: red;
        color: white;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        margin-bottom: 20px;
    }
    .goIndex{
        margin: auto;
        width: 150px;
        background-color: #D7D7D7;
        color: black;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
    }

</style>