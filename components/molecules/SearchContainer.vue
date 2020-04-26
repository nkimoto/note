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
@media (max-width: 959px)
  .search-box input
    cursor pointer
    width 10rem
    border-color transparent
</style>