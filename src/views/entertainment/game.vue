<template>
  <div style="height:100%;position:relative;" class="game">
    <iframe
      ref="iframe"
      style="min-width:100vw;min-height:100vh;"
      :src="bdUrl"
      id="myiframe"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
import { backtrans, open, onlinecheck } from "@/api/entertainment";
import { mapGetters } from 'vuex'
import xhr from "@/utils/xhr";

// import $ from "jquery";

var timer = null;

export default {
  name: "game",
  data() {
    return {
      bdUrl: "",
      initTime: 0
    };
  },
  computed: {
    ...mapGetters('user', ['token'])
  },
  created() {
    this.$nextTick(() => {
      this.openGame();
    });
  },
  mounted() {
    // 处理vr游戏
    if(['121'].indexOf(this.$route.query.platform_id) !== -1) {
      return false
    }
    this.$notify({
      message: "请开启自动旋转屏幕能够横屏玩游戏",
      duration: 5000
    });
    if (window != top) {
      top.location.href = location.href;
    }
    const self = this;

    window.onbeforeunload = function(event) {
      if (
        (self.bdUrl.split(":")[0] == "http" &&
          document.domain !== process.env.VUE_APP_GAME_DOMAIN) ||
        (self.bdUrl.split(":")[0] == "https" &&
          document.domain != process.env.VUE_APP_GAME_DOMAIN) ||
        (document.domain == process.env.VUE_APP_GAME_DOMAIN && self.$route.query.platform_id == 2)
      ) {
        if (navigator.sendBeacon) {
          const data = {
            game_id: self.$route.query.game_id,
            access_token: self.token,
            merchant_no: process.env.VUE_APP_MERCHANT_NO
          }
          self.result = navigator.sendBeacon(
            process.env.VUE_APP_H5_API_URL + '/backtrans',
            data
          )
          window.localStorage.setItem('backtrans-result', self.result)
        } else {
          xhr({
            type: 'POST',
            url: process.env.VUE_APP_H5_API_URL + '/backtrans',
            data: {
              game_id: self.$route.query.game_id,
              access_token: self.token,
              merchant_no: process.env.VUE_APP_MERCHANT_NO
            },
            async: false,
            success: res => {
              clearInterval(self.timer)
            }
          })
        }
      }
    };
    setTimeout(() => {
      self.gameCheck();
    }, 3000);
  },
  methods: {
    openGame() {
      this.$loading({
        mask: false
      })
      open({
        game_id: this.$route.query.game_id
      }).then(res => {
        const self = this;
        self.$toast.clear()
        if (res.data.code === 0) {
          if (
            (res.data.data.url.split(":")[0] == "http" &&
              window.location.host !== process.env.VUE_APP_GAME_DOMAIN) ||
            (self.$route.query.platform_id == 2 &&
              window.location.host != process.env.VUE_APP_GAME_DOMAIN)
          ) {
            window.location.href = `http://${process.env.VUE_APP_GAME_DOMAIN}/game${window.location.search}`
            // window.location.href = "http://m.aag88.me/game" + window.location.search;
          } else {
            // 处理vr游戏
            if(['121'].indexOf(self.$route.query.platform_id) != -1) {
              window.location.href = res.data.data.url
            } else {
              self.bdUrl = res.data.data.url;
            }
            // window.location.href = res.data.data.url
          }
        } else {
          self.$toast({
            message: res.data.msg,
            onClose() {
              self.$router.push({
                path: "home"
              });
            }
          });
        }
      });
    },
    gameCheck() {
      const self = this;
      if (self.timer) {
        clearInterval(self.timer)
      }
      timer = setInterval(() => {
        onlinecheck({
          game_id: self.$route.query.game_id
        });
      }, 5000);
    }
  },
  destroyed() {
    clearInterval(timer);
  }
};
</script>

<style scoped lang="less">
.game {
  background-image: url("~@assets/img3_0/home/game-bg@2x.png");
  background-size: cover;
  background-position: center;
}
</style>
