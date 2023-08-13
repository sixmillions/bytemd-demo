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

import TocHelper from 'toc-helper'

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
const { data } = await useFetch('/api/v1/md/toc-test')
content.value = data.value?.cnt ?? ''

const toc = ref(null)
let helper = null
onMounted(() => {
  if (toc.value) {
    helper = new TocHelper(toc.value, {
      contentSelector: '.markdown-body',
      fixedSelector: '#fixedSelector' // 文档滚动到该选择器元素的位置就fixed在顶部
    })
  }
})
</script>
<template>
  <div>
    <div id="markdown">
      <div>
        <Viewer :value="content" :plugins="plugins" :locale="zhHans" />
      </div>
      <div>
        <div ref="toc" class="md-toc" />
      </div>
    </div>
    <div id="fixedSelector" hidden />
  </div>
</template>

<style>
 /**
 * 文章内容宽度50%，并且居中
 */
#markdown {
  width: 50%;
  margin: auto;
}

/**
 * 高度调整
 */
.bytemd {
  height: calc(100vh - 100px);
}

.md-toc {
  background-color: aquamarine;
  position: fixed;
  top: 8rem;
  right: 8rem;
  width: 20rem;
  /* max-width: 20rem; */
  overflow: hidden;
  text-overflow:ellipsis;
}
</style>
