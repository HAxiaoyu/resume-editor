<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import type { Resume } from './types';

// Import all components
import Profile from './components/Profile.vue';
import Education from './components/Education.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import Awards from './components/Awards.vue';
import AboutMe from './components/AboutMe.vue';

const jsonInput = ref('');
const resumeData = ref<Resume | null>(null);
const jsonError = ref<string | null>(null);

const parseJson = () => {
  try {
    const parsed = JSON.parse(jsonInput.value);
    resumeData.value = parsed;
    jsonError.value = null;
  } catch (e: any) {
    jsonError.value = e.message;
    // Keep previous valid resumeData if parsing fails
  }
};

// Watch for changes in jsonInput and parse it
watch(jsonInput, parseJson, { immediate: true });

// Load initial JSON content from file on component mount
onMounted(async () => {
  try {
    const response = await fetch('/resume info.json'); // Assuming file is in public folder
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const content = await response.text();
    jsonInput.value = content;
  } catch (error: any) {
    console.error("Error loading initial JSON file:", error);
    jsonError.value = "加载初始简历文件失败: " + error.message;
  }
});

// Export to JSON function
const exportToJson = () => {
  if (!resumeData.value) {
    alert("没有简历数据可导出。");
    return;
  }

  const jsonString = JSON.stringify(resumeData.value, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'resume.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Import from JSON function (re-added for convenience, but not the primary input method)
const handleFileImport = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        JSON.parse(content); // Validate JSON before setting
        jsonInput.value = content;
        jsonError.value = null;
      } catch (error: any) {
        console.error("Error parsing JSON file:", error);
        alert("导入失败，请确保文件是合法的JSON格式。" + error.message);
        jsonError.value = "导入文件格式错误: " + error.message;
      }
    };
    reader.readAsText(file);
  }
};

</script>

<template>
  <div class="d-flex flex-column vh-100">
    <header class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">简历编辑器</a>
        <div class="d-flex">
          <input type="file" @change="handleFileImport" accept=".json" class="form-control form-control-sm me-2"
            style="width: auto;" />
          <button @click="exportToJson" class="btn btn-success btn-sm">保存为 JSON</button>
        </div>
      </div>
    </header>

    <div class="flex-grow-1 d-flex overflow-hidden justify-content-center">
      <div class="main-content-wrapper">
        <div class="content-columns-wrapper d-flex">
          <!-- Left Column: JSON Editor -->
          <div class="json-editor-panel d-flex flex-column overflow-auto">
            <h5 class="mb-3">JSON 编辑器</h5>
            <textarea class="form-control flex-grow-1 font-monospace" v-model="jsonInput" rows="10"
              style="resize: none;"></textarea>
            <div v-if="jsonError" class="alert alert-danger mt-2" role="alert">
              JSON 格式错误: {{ jsonError }}
            </div>
          </div>

          <!-- Right Column: Live Preview -->
          <div class="resume-preview-panel d-flex flex-column overflow-auto">
            <h5 class="mb-3">简历预览</h5>
            <div v-if="resumeData" class="resume-content-wrapper flex-grow-1">
              <Profile :profile="resumeData.profile" :title="resumeData.titleNameMap.profile || '个人信息'" />
              <Education :educationList="resumeData.educationList" :title="resumeData.titleNameMap.educationList" />
              <Experience :workExpList="resumeData.workExpList" :title="resumeData.titleNameMap.workExpList" />
              <Projects :projectList="resumeData.projectList" :title="resumeData.titleNameMap.projectList" />
              <Awards :awardList="resumeData.awardList" :title="resumeData.titleNameMap.awardList" />
              <AboutMe :aboutme="resumeData.aboutme" :title="resumeData.titleNameMap.aboutme" />
            </div>
            <div v-else
              class="text-center p-5 bg-light rounded flex-grow-1 d-flex align-items-center justify-content-center">
              <h2 class="text-muted">JSON 数据无效或为空</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  overflow: hidden;
  /* Prevent main page scroll */
}

.vh-100 {
  height: 100vh;
}

.flex-grow-1 {
  flex-grow: 1;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-auto {
  overflow-y: auto;
}

.font-monospace {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
}

/* This wrapper is added to center the two columns below the full-width header */
.main-content-wrapper {
  max-width: 90%;
  /* Or a fixed value like 1600px */
  width: 100%;
  /* Fallback or if max-width is not reached */
  margin: 0 auto;
  /* Centers the block */
  height: 100%;
  display: flex;
  /* To make content-columns-wrapper take full height */
}

.content-columns-wrapper {
  width: 100%;
  /* Takes full width of its parent .main-content-wrapper */
  height: 100%;
  display: flex;
}

.json-editor-panel {
  width: 50%;
  /* Takes 50% of the main-content-wrapper */
  padding: 20px;
  /* Add padding for alignment */
  overflow-y: auto;
  /* Allow scrolling for editor content */
}

.resume-preview-panel {
  width: 50%;
  /* Takes 50% of the main-content-wrapper */
  padding: 20px;
  /* Add some padding to the preview panel */
  display: flex;
  justify-content: center;
  /* Center the A4 page horizontally */
  align-items: flex-start;
  /* Align to top */
  overflow-y: auto;
  /* Allow scrolling for the panel if A4 overflows view */
  height: 100%;
}

.resume-content-wrapper {
  width: 794px;
  /* A4 width at 96 DPI (210mm) */
  min-height: 1123px;
  /* A4 height at 96 DPI (297mm), use min-height to allow content to expand */
  padding: 20px;
  /* Add padding inside the resume content wrapper */
  background-color: #fff;
  /* White background for the resume */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  /* Subtle shadow */
  box-sizing: border-box;
  /* Include padding in width/height */
  word-wrap: break-word;
  /* Break long words */
  overflow-wrap: break-word;
  /* Modern alternative for word-wrap */
}
</style>