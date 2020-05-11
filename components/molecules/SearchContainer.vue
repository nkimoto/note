<template>
  <div>
    <Aside title='SEARCH'>
      <SearchBox/>
    </Aside>
  </div>
</template>

<script>
import Aside from '@theme/components/atoms/Aside.vue'
import SearchBox from '@SearchBox'
export default {
  components: {
    Aside,
    SearchBox
  }
};
</script>

<style lang="stylus">
.search-box
  margin-left 20px
  input
    border-radius 5px
    transition all 0.5s
    border 1px solid #cecece
    &:hover
      border 1px solid $accentColor
      box-shadow 0 0 5px $accentColor
  .suggestions
    z-index 2
    border 1px solid $darkBorderColor
    top 40px
    right 0
    a
      color $darkTextColor
      text-decoration none
      &.focused
        color $accentColor
@media (max-width: 959px)
  .search-box
    margin-left 0
    input
      cursor pointer
      width 6rem
      border-color transparent
      &:focus
        width 6rem
    .suggestions
      width 8rem

</style>