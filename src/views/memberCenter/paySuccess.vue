<template>
    <div class="paySuccess">
        <div class="pop-head">
          <h2>支付成功</h2>
        </div>
        <div class="pop-body payStatus">
          <van-icon name='checked' color="#FFDD99" size="100"></van-icon>
          <div class="pay-title">您的存款已到账</div>
          <div class="btn">
            <div class="aagames-button-box">
              <button class="aagames-button" type="button" @click="$router.push('/memberCenter')">确认</button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    .paySuccess{
        .pop-head{
            text-align: center;
            h2{
                color: #fff;
                font-size: 60px;
            }
        }
        .pay-title{
            text-align: center;
            font-size: 40px;
            color: #fff;
            margin-bottom: 30px;
        }
        .pop-body{
            text-align: center;
            i{
                font-size: 180px !important;
                margin-bottom: 30px;
            }
        }
    }
</style>