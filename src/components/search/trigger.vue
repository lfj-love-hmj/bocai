<template>
<div>
  <div class="search-trigger" @click="showGameSearch">
    <van-icon name="search" />
    <span>{{ (gameSearch && gameSearch.keyword) || '搜索' }}</span>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'SearchTrigger',
  props: {
    category: {
      type: [String, Number]
    },
    nav: {
      type: [Object]
    },
    payforline: {
      type: [String, Number]
    },
    platform:{
      type: [Object]
    }
  },
  data () {
    return {}
  },
  computed: {
    ...mapState('global', ['gameSearch'])
  },
  methods: {
    ...mapActions('global', [
      'setGameSearch'
    ]),
    showGameSearch () {
      const { category, nav, payforline, platform } = this
      const { keyword } = this.gameSearch
      this.setGameSearch({
        visible: true,
        keyword,
        category,
        nav,
        payforline,
        platform
      })
      this.$router.push({name:'GameSearch'})
    }
  }
}
</script>

<style lang="less" scoped>
.search-trigger{
  background-color: @bg-card-color;
  height: 56px;
  border-radius: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: @text-color-white;
  .van-icon{
    font-size: 40px;
    margin-right: 5px;
    color: @primary-color;
  }
}
</style>