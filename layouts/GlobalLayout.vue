<template>
  <div id="global-layout">
    <Header />
    <MobileHeader
      :is-open="isMobileHeaderOpen"
      @toggle-sidebar="isMobileHeaderOpen = !isMobileHeaderOpen"
    />
    <div class="content-wrapper" @click="isMobileHeaderOpen = false">
      <DefaultGlobalLayout class='main-area'/>
      <SecondaryArea class='secondary-area'/>
    </div>
    <Footer />
  </div>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'
import Header from '@theme/components/Header.vue'
import MobileHeader from '@theme/components/MobileHeader.vue'
import Footer from '@theme/components/Footer.vue'
import SecondaryArea from '@theme/components/organisms/SecondaryArea.vue'

export default {
  components: { 
    DefaultGlobalLayout: GlobalLayout,
    SecondaryArea,
    Header,
    MobileHeader,
    Footer
  },
  data() {
    return {
      isMobileHeaderOpen: false,
    }
  },
  mounted() {
    this.$router.afterEach(() => {
      this.isMobileHeaderOpen = false
    })
  },
}
</script>

<style lang="stylus">
#global-layout
  word-wrap break-word

.content-wrapper
  padding 160px 32px 80px 32px
  min-height calc(100vh - 80px - 60px - 160px)
  max-width $contentWidth
  margin 0 auto
  display flex
  justify-content space-between
  @media (max-width: $MQMobile)
    padding: 100px 15px 20px
    min-height: calc(100vh - 180px)
  
.main-area
  flex 1
  margin 0 10px
  @media (max-width: $MQMobile)
     width 100%
.secondary-area
  width 300px
  margin 0 10px
  @media (max-width: $MQNarrow)
    width 200px
  @media (max-width: $MQMobile)
    display none !important
    padding 100px 15px 20px 15px
    min-height calc(100vh - 20px - 60px - 100px)
</style>