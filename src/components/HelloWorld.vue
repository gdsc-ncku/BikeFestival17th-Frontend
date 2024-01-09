<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1 class="text-3xl font-bold">{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <p class="bg-primary">色票：主色 primary</p>
  <p class="bg-primary-700">色票：主色2 primary2</p>
  <p class="bg-primary-50">色票：底色 primary3</p>
  <p class="bg-secondary">色票：次要色 secondary</p>
  <p class="bg-tertiary">色票：第三色 tertiary</p>
  <p class="bg-content text-primary-50">色票：內文 content</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
