<script setup lang="ts">
import TypewriterEffect from "./components/TypewriterEffect.vue";
</script>

<template>
  <div>
    <p>Vue typewriter effect</p>
    <TypewriterEffect class="bg-red" />
    <p>Vue typewriter effect</p>
  </div>
</template>

<style scoped>
.bg-red {
  background-color: red;
  font-size: 30px;
}
</style>
