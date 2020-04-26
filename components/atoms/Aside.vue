
<template>
  <div class='aside widget-area'>
    <h3 class='widget-title'>{{ title }} </h3>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}
</script>>
<style lang="stylus">
.aside
  padding 2rem
  box-shadow 0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.07)
.widget-title
  position relative
  margin-bottom 28px
  &:after
    background-color #009688
    content ""
    position absolute
    width 50px;
    display block
    height 4px
    bottom -10px
</style>