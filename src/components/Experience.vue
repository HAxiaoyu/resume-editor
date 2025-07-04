<template>
  <div class="mb-3">
    <div class="d-flex align-items-center mb-2">
      <h2 class="me-3 mb-0" style="font-size: 1.2rem; font-weight: bold;">{{ title }}</h2>
      <div class="flex-grow-1 border-bottom border-secondary" style="height: 1px;"></div>
    </div>
    <div v-for="(exp, index) in workExpList" :key="index" class="mb-2 ps-0">
      <div class="d-flex justify-content-between align-items-baseline">
        <p class="mb-0" style="font-weight: bold;">{{ exp.company_name }} - {{ exp.department_name }}</p>
        <p class="mb-0 text-end" style="font-size: 0.9rem;">{{ exp.work_time[0] }} - {{ exp.work_time[1] === null ? '至今' : exp.work_time[1] }}</p>
      </div>
      <div class="work-desc" v-html="formatText(exp.work_desc)"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { WorkExperience } from '../types';

defineProps<{ workExpList: WorkExperience[], title: string }>();

const formatText = (text: string) => {
  return text.replace(/\\n/g, '<br>').replace(/\\r/g, '');
};
</script>

<style scoped>
.work-desc {
  white-space: pre-wrap; /* Preserves whitespace and wraps text */
  font-size: 0.9rem;
  margin-top: 0.2rem;
}
</style>
