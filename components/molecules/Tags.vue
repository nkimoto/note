<template>
  <div class="blog-tags">
    <BlogTag v-for="tag in tags" :key="tag.name" :tag="tag" />
  </div>
</template>

<script>
export default {
  computed: {
    tags() {
      let tags = [];
      for (let page of this.$site.pages) {
        if ('tags' in page.frontmatter){
          for (let index in page.frontmatter.tags) {
            const name = page.frontmatter.tags[index];
            const tag = {
              name: name,
              path: `/tag/${name}`,
              pages: [page.path]
            }
            if (tags.length===0 || tags.filter(x=>x.name === name).length === 0) {
              tags.push(tag)
            } else {
              index = tags.map(x => x.name).indexOf(name)
              tags[index].pages.push(page.path)
            }
          }
        }
      }
      return tags;
    }
  }
};
</script>

<style lang="stylus">
@media screen and (max-width: 1000px)
  .blog-tags
    width 90%
</style>