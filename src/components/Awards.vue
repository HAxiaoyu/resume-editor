<template>
  <div class="mb-3">
    <div class="d-flex align-items-center mb-2">
      <h2 class="me-3 mb-0" style="font-size: 1.2rem; font-weight: bold;">{{ title }}</h2>
      <div class="flex-grow-1 border-bottom border-secondary" style="height: 1px;"></div>
    </div>
    <div v-for="(award, index) in awardList" :key="index" class="mb-2 ps-0">
      <div class="d-flex justify-content-between align-items-baseline">
        <p class="mb-0" style="font-weight: bold;">{{ award.award_info }}</p>
        <p class="mb-0 text-end" style="font-size: 0.9rem;">{{ award.award_time }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { Award } from '../types';

defineProps<{ awardList: Award[], title: string }>();
</script>
