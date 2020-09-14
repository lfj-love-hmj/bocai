<template>
    <div class="toast">
      <div class="box">
        <div class="title">
          <span>系统提示</span>
          <!-- <span @click='close'></span> -->
          <van-icon @click='close' name="cross" />
        </div> 
        <p class="content">{{content}}</p>
        <div class="btn" @click='sure'>确定</div>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    props:[
        'content'
    ],
    methods:{
        sure(){
            this.$emit("sure",1);  
        },
        close(){
          this.$emit("close",1); 
        }
    }
}
</script>

<style lang="less" scoped>
    .toast{
    background-color: rgba(0,0,0,.8);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index : 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    >.box{
      width: 7.68rem;
      padding:  1.3867rem 0.9067rem .9067rem;
      background-color: @bg-color;
      border-radius: 20px;
      position: relative;
      overflow: hidden;
      >.title{
        position: absolute;
        top: 0;
        left: 0;
        height: 1.3867rem;
        line-height: 1.3867rem;
        background-color: @bg-color;
        color: #fff;
        font-weight: bold;
        font-size: 0.4267rem;
        text-align: center;
        border-radius: 0.08rem 0.08rem 0 0;
        width:100%;
        >span{
          text-align: center;
        }
        >i{
          position: absolute;
          top:50%;
          margin-top: -16px;
          right:20px;
        }
      }
      >.content{
        font-size:0.3733rem;
        color:#fff;
        line-height:0.56rem;
        padding-top: 1.2rem;
        text-align: center;
      }
      >.btn{
        margin-top: 0.9867rem;
        width: 5.8667rem;
        height: 1.04rem;
        text-align: center;
        line-height: 1.04rem;
        color: #232321;
        font-size: 0.4rem;
        background: @primary-color;
        border-radius:0.08rem;
      }
    }
  }
</style>