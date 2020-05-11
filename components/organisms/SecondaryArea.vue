<template>
  <div id='secondary' class='sidebar widget-area'>
    <SearchContainer/>
    <TagsContainer/>
  </div>
</template>

<script>
import TagsContainer from '@theme/components/molecules/TagsContainer.vue'
import SearchContainer from '@theme/components/molecules/SearchContainer.vue'
export default {
  components: {
    TagsContainer,
    SearchContainer
  }
};
</script>>
<style lang="stylus">
.sidebar
  max-width $contentWidth
  font-size 16px
  letter-spacing 0px
  color $textColor
  position relative
</style>