<template>
  <div class="h-20"></div>
  <div class="h-20 max-w-[1200px] mx-auto my-0 flex items-center">
    <div class="fixed text-base">
      <router-link to="/">首頁 / </router-link>
      <template v-for="crumb in breadcrumbs">
          <router-link v-if="crumb.to === $route.path" :to="crumb.to"><b>{{ crumb.label }}</b></router-link>
          <router-link v-else :to="crumb.to">{{ crumb.label }}</router-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [],
    };
  },
  watch: {
    $route: 'generateBreadcrumbs',
  },
  created() {
    this.generateBreadcrumbs();
  },
  methods: {
    generateBreadcrumbs() {
      const matched = this.$route.matched;
      this.breadcrumbs = matched.map((route) => ({
        to: route.path,
        label: route.name,
      }));

      if (this.$route.params) {
        const dynamicParam = Object.values(this.$route.params)[0];
        // console.log(dynamicParam);
        if (dynamicParam) {
          this.breadcrumbs.push({
            to: this.$route.path,
            label: dynamicParam,
          });
        }
        // console.log(this.breadcrumbs);
      }
    },
  },
};
</script>
