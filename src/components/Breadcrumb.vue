<template>
  <div class="h-20"></div>
  <div class="h-20 layout_content  my-0 flex justify-start items-center relative">
    <div class="lg:text-base text-sm rounded-md leading-8 z-50">
      <router-link to="/">首頁 / </router-link>
      <template v-for="crumb in breadcrumbs">
          <router-link v-if="crumb.to === $route.path" :to="crumb.to"><b>{{ crumb.label }}</b></router-link>
          <router-link v-else :to="crumb.to">{{ crumb.label }}</router-link>
      </template>
    </div>
  </div>
</template>

<script>
import departmentHandbookData from '../data/departmentHandbook.json';
import featuredArticlesData from '../data/featuredArticles.json';
import LetterToHighSchoolStudents from '../data/letterToHighSchoolStudents.json';

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

        if (dynamicParam) {
          const targetDepartment = departmentHandbookData.map((college) => {
            return college.departments.find((department) => {
              return department.id === dynamicParam;
            });
          }).filter(Boolean)[0]

          const targetArticle = featuredArticlesData.find((article) => {
            return article.id === dynamicParam;
          })

          const targetLetter = LetterToHighSchoolStudents.find((letter) => {
            return letter.id === dynamicParam;
          })

          if (targetDepartment) {
            this.breadcrumbs.push({
              to: this.$route.path,
              label: targetDepartment.name,
            });
          } else if (targetArticle) {
            this.breadcrumbs.push({
              to: this.$route.path,
              label: targetArticle.title,
            });
          } else if (targetLetter) {
            this.breadcrumbs.push({
              to: this.$route.path,
              label: targetLetter.author,
            });
          }
        }

      }
    },
  },
};
</script>
