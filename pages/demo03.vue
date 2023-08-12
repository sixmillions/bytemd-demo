<script setup lang="ts">
// https://juejin.cn/post/7231913383167475771
// 组件
import { Editor } from '@bytemd/vue-next'
// 主要css
import 'bytemd/dist/index.css'
// 中文
import zhHans from 'bytemd/locales/zh_Hans.json'

/**
 * 插件
 */
// 支持缩放图像和中断（没看懂这个中断插件是干啥的）
import breaks from '@bytemd/plugin-breaks'
import mediumZoom from '@bytemd/plugin-medium-zoom'
// 语法解析
import gfm from '@bytemd/plugin-gfm'
// 高亮
import highlight from '@bytemd/plugin-highlight'
// meta信息编辑
import frontmatter from '@bytemd/plugin-frontmatter'
// 数学公式
import math from '@bytemd/plugin-math'
// 流程图
import mermaid from '@bytemd/plugin-mermaid'
// emoji表情
import gemoji from '@bytemd/plugin-gemoji'

/**
 * 整体的主题和代码块主题
 */
// 代码块主题
// import 'highlight.js/styles/a11y-dark.css'
// import 'highlight.js/styles/a11y-light.css'
// import 'highlight.js/styles/atom-one-dark-reasonable.css'
// import 'highlight.js/styles/atom-one-dark.css' // 推荐
// import 'highlight.js/styles/atom-one-light.css' // 推荐
// import 'highlight.js/styles/github-dark-dimmed.css'
// import 'highlight.js/styles/github-dark.css'
// import 'highlight.js/styles/github.css'
// import 'highlight.js/styles/stackoverflow-dark.css'
// import 'highlight.js/styles/stackoverflow-light.css'
// import 'highlight.js/styles/monokai-sublime.css'
// import 'highlight.js/styles/vs.css'

const plugins = [
  gfm(),
  highlight(),
  frontmatter(),
  math(),
  mermaid(),
  gemoji(),
  breaks(),
  mediumZoom()
]

const content = ref('')
/**
 * 内容修改触发
 *
 * @param v 新的内容
 */
const handleChange = (v: string) => {
  content.value = v
}

// 请求测试数据
const { data } = await useFetch('/api/v1/md/code-block-theme')
content.value = data.value?.cnt ?? ''

const themeClass = ref('theme__dark')

/**
 * 切换代码块主题
 * 实现方式：
 * 1. 将dark的所有css加上前缀 theme__dark，将light的所有css加上前缀 theme__light
 * 2. 点击theme切换按钮，实现类名切换
 */
const setTheme = () => {
  themeClass.value = themeClass.value === 'theme__dark' ? 'theme__light' : 'theme__dark'
}

</script>
<template>
  <div id="demo02" :class="themeClass">
    <button @click="setTheme">
      {{ themeClass }}
    </button>
    <Editor :value="content" :plugins="plugins" :locale="zhHans" @change="handleChange" />
  </div>
</template>

<style>
/**
 * 代码块主题切换
 */
 @import '~/assets/css/theme.css';

/**
 * 高度调整
 */
.bytemd {
  height: calc(100vh - 100px);
}
</style>
