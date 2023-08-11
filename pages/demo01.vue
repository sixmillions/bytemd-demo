<template>
  <div class="demo01">
    <Editor :value="content" :plugins="plugins" @change="handleChange" />
  </div>
</template>

<script setup lang="ts">
import { Editor } from '@bytemd/vue-next'
import gfm from '@bytemd/plugin-gfm'
import 'bytemd/dist/index.css'

const content = ref('')
const plugins = [gfm()]
const handleChange = (v: string) => {
  content.value = v
}

const { data } = await useFetch('/api/v1/md/hello-world')
content.value = data.value?.cnt ?? ''
</script>
