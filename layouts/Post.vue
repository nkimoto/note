<template>
  <div id="vuepress-theme-blog__post-layout">
    <article
      class="vuepress-blog-theme-content"
      itemscope
      itemtype="https://schema.org/BlogPosting"
    >
      <!-- <Breadcrumb></Breadcrumb> -->
      <header>
        <h1 class="post-title" itemprop="name headline">
          {{ $frontmatter.title }}
        </h1>
        <PostMeta
          :tags="$frontmatter.tags"
          :author="$frontmatter.author"
          :date="$frontmatter.date"
          :location="$frontmatter.location"
        />
      </header>
      <Content itemprop="articleBody" />
      <footer>
        <hr />
        <social-share />
        <Comment />
      </footer>
    </article>
    <Toc />
  </div>
</template>

<script>
import Breadcrumb from "@theme/components/molecules/Breadcrumb"
import Toc from '@theme/components/Toc.vue'
import PostMeta from '@theme/components/PostMeta.vue'
import { Comment } from '@vuepress/plugin-blog/lib/client/components'
export default {
  components: {
    Breadcrumb,
    Toc,
    PostMeta,
    Comment,
  },
}
</script>

<style lang="stylus">
.vuepress-blog-theme-content
  max-width $contentWidth
  margin 0 auto
  background-color $bgColor
  font-size 16px
  letter-spacing 0px
  color $textColor
  position relative
  @media (min-width: $MQNarrow)
    padding 2rem
    box-shadow 0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.07)
  .post-title
    padding-top 0
@media (max-width: $MQMobile)
  .vuepress-blog-theme-content
    padding-top 0
  .post-title
    margin-top 0
</style>