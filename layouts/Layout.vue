<template>
  <div id="layout">
    <BaseListLayout v-if="$pagination" />
    <Content  v-else />
  </div>
</template>

<script>
</script>

<style lang="stylus">
</style>