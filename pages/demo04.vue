<script setup lang="ts">
// Viewer模式就是将Editor换成Viewer
import { Viewer } from '@bytemd/vue-next'
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

// 请求测试数据
const { data } = await useFetch('/api/v1/md/bytemd-docs-full')
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
    <Viewer :value="content" :plugins="plugins" :locale="zhHans" />
  </div>
</template>

<style>
/**
 * 代码块主题切换
 */
 @import '~/assets/css/code-block-theme.css';

 /**
 * 文章内容宽度50%，并且居中
 */
#demo02 {
  width: 50%;
  margin: auto;
}

/**
 * 高度调整
 */
.bytemd {
  height: calc(100vh - 100px);
}
</style>
