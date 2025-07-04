<template>
  <div class="mb-3">
    <div class="d-flex align-items-center mb-2">
      <h2 class="me-3 mb-0" style="font-size: 1.5rem; font-weight: bold;">{{ profile.name }}</h2>
      <div class="flex-grow-1 border-bottom border-secondary" style="height: 1px;"></div>
    </div>
    <div class="row g-0">
      <div class="col-md-6 mb-1">
        <p class="mb-0" style="font-size: 0.9rem;"><strong>邮箱:</strong> {{ profile.email }}</p>
      </div>
      <div class="col-md-6 mb-1">
        <p class="mb-0" style="font-size: 0.9rem;"><strong>电话:</strong> {{ profile.mobile }}</p>
      </div>
      <div class="col-md-6 mb-1">
        <p class="mb-0" style="font-size: 0.9rem;"><strong>GitHub:</strong> <a :href="profile.github" target="_blank">{{ profile.github }}</a></p>
      </div>
      <div class="col-md-6 mb-1">
        <p class="mb-0" style="font-size: 0.9rem;"><strong>知乎:</strong> {{ profile.zhihu }}</p>
      </div>
      <div class="col-md-6 mb-1">
        <p class="mb-0" style="font-size: 0.9rem;"><strong>工作年限:</strong> {{ profile.workExpYear }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { Profile } from '../types';

defineProps<{ profile: Profile, title: string }>();
</script>
