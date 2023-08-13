<template>
  <div id="main">
    <div>
      <h2><a href="https://bytemd.js.org/" target="_blank">ByteMD 示例</a></h2>
      <p>官网: <a href="https://bytemd.js.org/">https://bytemd.js.org/</a></p>
      <p>Playground here: <a href="https://bytemd.js.org/playground/">https://bytemd.js.org/playground/</a></p>
    </div>
    <div>
      <NuxtLink to="/demo01" target="_blank">
        <h3>Demo01 基础使用</h3>
      </NuxtLink>
      <p>只安装一个基础的解析插件</p>
    </div>
    <div>
      <NuxtLink to="/demo02" target="_blank">
        <h3>Demo02 插件安装</h3>
      </NuxtLink>
      <p>安装了各种<a href="https://bytemd.js.org/#plugin-system">插件</a>，调整了高度</p>
    </div>
    <div>
      <NuxtLink to="/demo03" target="_blank">
        <h3>Demo03 代码块主题</h3>
      </NuxtLink>
      <p>代码主题推荐；代码主题切换</p>
    </div>
    <div>
      <NuxtLink to="/demo04" target="_blank">
        <h3>Demo04 Viewer使用</h3>
      </NuxtLink>
      <p>渲染Markdown文档</p>
    </div>
    <div>
      <NuxtLink to="/demo05" target="_blank">
        <h3>Demo05 Viewer主题切换，自定义主题切换</h3>
      </NuxtLink>
      <p>Viewer主题切换：dark/light</p>
      <div>
        <p>更多参考：</p>
        <ul>
          <li>https://nuxt.com/modules/color-mode</li>
          <li>https://daisyui.com/docs/themes/</li>
          <li>https://github.com/sindresorhus/github-markdown-css</li>
          <li>https://tailwindcss.nuxtjs.org/examples/dark-mode</li>
        </ul>
      </div>
    </div>
    <div>
      <NuxtLink to="/demo06" target="_blank">
        <h3>Demo06 Viewer主题切换，color-mode</h3>
      </NuxtLink>
      <p>Viewer主题切换：dark/light</p>
      <div>
        <p>更多参考：</p>
        <ul>
          <li>https://nuxt.com/modules/color-mode</li>
          <li>https://tailwindcss.nuxtjs.org/examples/daisyui</li>
          <li>https://tailwindcss.nuxtjs.org/examples/dark-mode</li>
        </ul>
      </div>
    </div>
    <div>
      <NuxtLink to="/demo07" target="_blank">
        <h3>Demo07 Viewer 目录生成</h3>
      </NuxtLink>
      <div>
        <p>更多参考：</p>
        <ul>
          <li>https://itlangzi.com/s/tochelper.html</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
#main {
  width: 50%;
  margin: auto;
}
</style>
