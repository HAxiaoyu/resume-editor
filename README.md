# 简历编辑器 (Resume Editor) - Vue.js 前端

这是一个基于 Vue 3 构建的简历编辑器前端应用，旨在提供一个用户友好的界面来创建、编辑和管理个人简历。

## 主要功能

- **实时预览**: 在编辑时即时查看简历的渲染效果。
- **模块化编辑**: 分为个人信息、教育背景、工作经历、项目经验、奖项等模块，方便内容管理。
- **数据驱动**: 通过 JSON 数据管理简历内容，易于导入导出。

## 技术栈

- **Vue.js 3**: 渐进式 JavaScript 框架，用于构建用户界面。
- **TypeScript**: JavaScript 的超集，提供类型安全。
- **Vite**: 极速的前端开发构建工具。
- **Bootstrap 5**: 用于快速构建响应式布局和美观的 UI 组件。

## 安装

请确保您已安装 Node.js 和 npm (或 yarn)。

1.  **克隆仓库**:
    ```bash
    git clone <您的仓库地址>
    cd resume-editor-vue
    ```

2.  **安装依赖**:
    ```bash
    npm install
    # 或者
    yarn install
    ```

## 运行项目

### 开发模式

在本地启动开发服务器，通常在 `http://localhost:5173` (或类似地址) 访问。

```bash
npm run dev
# 或者
yarn dev
```

### 构建生产版本

这将编译并优化您的应用，生成用于部署的静态文件。

```bash
npm run build
# 或者
yarn build
```

### 预览生产版本

在本地预览构建后的生产版本。

```bash
npm run preview
# 或者
yarn preview
```

## 项目结构

```
resume-editor-vue/
├── public/
│   ├── resume info.json  # 示例简历数据
│   └── vite.svg
├── src/
│   ├── assets/           # 静态资源，如图片
│   ├── components/       # Vue 组件
│   │   ├── AboutMe.vue
│   │   ├── Awards.vue
│   │   ├── Education.vue
│   │   ├── Experience.vue
│   │   ├── Profile.vue
│   │   └── Projects.vue
│   ├── App.vue           # 主应用组件
│   ├── main.ts           # 应用入口文件
│   ├── style.css         # 全局样式
│   ├── types.ts          # TypeScript 类型定义
│   └── vite-env.d.ts
├── index.html            # 应用入口 HTML
├── package.json          # 项目依赖和脚本
├── tsconfig.json         # TypeScript 配置
├── vite.config.ts        # Vite 配置
└── README.md             # 项目说明文件
```