<template>
  <div class="mb-3">
    <div class="d-flex align-items-center mb-2">
      <h2 class="me-3 mb-0" style="font-size: 1.2rem; font-weight: bold;">{{ title }}</h2>
      <div class="flex-grow-1 border-bottom border-secondary" style="height: 1px;"></div>
    </div>
    <div v-for="(proj, index) in projectList" :key="index" class="mb-2 ps-0">
      <div class="d-flex justify-content-between align-items-baseline">
        <p class="mb-0" style="font-weight: bold;">{{ proj.project_name }} ({{ proj.project_role }})</p>
        <p class="mb-0 text-end" style="font-size: 0.9rem;">{{ proj.project_time }}</p>
      </div>
      <p class="mb-0" style="font-size: 0.9rem;">{{ proj.project_desc }}</p>
      <div class="project-content" v-html="formatText(proj.project_content)"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { Project } from '../types';

defineProps<{ projectList: Project[], title: string }>();

const formatText = (text: string) => {
  return text.replace(/\\n/g, '<br>').replace(/\\r/g, '');
};
</script>

<style scoped>
.project-content {
  white-space: pre-wrap;
  font-size: 0.9rem;
  margin-top: 0.2rem;
}
</style>
