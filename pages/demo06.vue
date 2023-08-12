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

const colorMode = useColorMode()
</script>
<template>
  <div id="markdown-preview" :class="colorMode.preference === 'light' ? 'theme__light' : 'theme__dark'">
    <div>{{ colorMode }}</div>
    <Viewer :value="content" :plugins="plugins" :locale="zhHans" />
  </div>
</template>

<style>
 @import '~/assets/css/theme.css';
 /**
 * 文章内容宽度50%，并且居中
 */
#markdown-preview {
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
