<template>
  <div id="main">
    <div>
      <h2><a href="https://bytemd.js.org/" target="_blank">ByteMD 示例</a></h2>
      <p>官网: <a href="https://bytemd.js.org/">https://bytemd.js.org/</a></p>
      <p>Playground here: <a href="https://bytemd.js.org/playground/">https://bytemd.js.org/playground/</a></p>
    </div>
    <div>
      <NuxtLink to="/demo01">
        <h3>基础使用</h3>
      </NuxtLink>
      <p>只安装一个基础的解析插件</p>
    </div>
    <div>
      <NuxtLink to="/demo02">
        <h3>插件安装</h3>
      </NuxtLink>
      <p>安装了各种<a href="https://bytemd.js.org/#plugin-system">插件</a>，调整了高度</p>
    </div>
    <div>
      <NuxtLink to="/demo03">
        <h3>代码块主题</h3>
      </NuxtLink>
      <p>代码主题推荐；代码主题切换</p>
    </div>
    <div>
      <NuxtLink to="/demo04">
        <h3>Viewer使用</h3>
      </NuxtLink>
      <p>渲染Markdown文档</p>
    </div>
  </div>
</template>
<style scoped>
#main {
  width: 50%;
  margin: auto;
}
</style>
