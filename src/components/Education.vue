<template>
  <div class="mb-3">
    <div class="d-flex align-items-center mb-2">
      <h2 class="me-3 mb-0" style="font-size: 1.2rem; font-weight: bold;">{{ title }}</h2>
      <div class="flex-grow-1 border-bottom border-secondary" style="height: 1px;"></div>
    </div>
    <div v-for="(edu, index) in educationList" :key="index" class="mb-2 ps-0">
      <div class="d-flex justify-content-between align-items-baseline">
        <p class="mb-0" style="font-weight: bold;">{{ edu.school }} - {{ edu.major }} ({{ edu.academic_degree }})</p>
        <p class="mb-0 text-end" style="font-size: 0.9rem;">{{ edu.edu_time[0] }} - {{ edu.edu_time[1] }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { Education } from '../types';

defineProps<{ educationList: Education[], title: string }>();
</script>
