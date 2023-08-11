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
const { data } = await useFetch('/api/v1/md/bytemd-docs-full')
content.value = data.value?.cnt ?? ''
</script>
<template>
  <div id="demo02">
    <Editor :value="content" :plugins="plugins" :locale="zhHans" @change="handleChange" />
  </div>
</template>

<style>
/**
 * 高度调整
 */
.bytemd {
  height: calc(100vh - 100px);
}
</style>
