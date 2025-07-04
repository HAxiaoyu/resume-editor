<template>
  <div class="mb-3">
    <div class="d-flex align-items-center mb-2">
      <h2 class="me-3 mb-0" style="font-size: 1.2rem; font-weight: bold;">{{ title }}</h2>
      <div class="flex-grow-1 border-bottom border-secondary" style="height: 1px;"></div>
    </div>
    <div class="ps-0">
      <div class="aboutme-desc" v-html="formatText(aboutme.aboutme_desc)"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { AboutMe } from '../types';

defineProps<{ aboutme: AboutMe, title: string }>();

const formatText = (text: string) => {
  return text.replace(/\n/g, '<br>').replace(/\r/g, '');
};
</script>

<style scoped>
.aboutme-desc {
  white-space: pre-wrap;
  font-size: 0.9rem;
}
</style>
