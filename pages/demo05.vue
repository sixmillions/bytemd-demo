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
onMounted(() => {
  // 这里直接操作的body
  document.getElementById('app')?.removeAttribute('class')
  document.getElementById('app')?.classList.add(themeClass.value)
})

/**
 * 切换主题，这里用了最简单的方式
 */
const setTheme = () => {
  themeClass.value = themeClass.value === 'theme__dark' ? 'theme__light' : 'theme__dark'
  // 这里直接操作的body
  document.getElementById('app')?.removeAttribute('class')
  document.getElementById('app')?.classList.add(themeClass.value)
}

</script>
<template>
  <div id="markdown-preview">
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
 @import '~/assets/css/theme.css';

 /**
* dark theme
*/
.theme__dark {
  background-color: #333333;
  color: #a6adbacc;
}

.theme__dark h1,
.theme__dark h2,
.theme__dark h3,
.theme__dark h4,
.theme__dark h5,
.theme__dark h6 {
  color: #a6adba;
}

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
