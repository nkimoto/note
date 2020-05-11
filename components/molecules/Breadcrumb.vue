<template>
  <nav id="breadcrumb" class=" card z-depth-0">
    <div class="nav-wrapper">
      <div class="col s12">
        <router-link class="breadcrumb" v-for="crumb in bread" :key="crumb.path"
                     :to="crumb.path">{{crumb.title}}</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    computed: {
      bread() {
        const parts = this.$page.path.split("/");
        console.log(parts)
        if (!parts[parts.length - 1].length) { parts.pop(); }
        let link = "";
        const crumbs = [];
        for (let i = 0; i < parts.length; i++) {
          link += parts[i];
          const page = this.$site.pages.find((el) => el.path === link || el.path === link + "/");
          link += "/";
          if (page != null) {
            crumbs.push({path: page.path, title: page.frontmatter.breadcrumb || page.title});
          }
        }
        return crumbs;
      },
    },
  };
</script>

<style lang="stylus" scoped>
  nav
    margin-bottom 0

    .nav-wrapper
      position: relative
      height 100%

  .breadcrumb
    &::before
      content "/"
      font-family inherit
      font-size inherit

    &:last-child
      cursor default
</style>
