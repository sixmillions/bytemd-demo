import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  plugins: [require('daisyui')],
  content: [],
  daisyui: {
    themes: ['light', 'dark']
  },
  // 保留原来式样 https://juejin.cn/post/7225898744449105978
  corePlugins: {
    preflight: false
  }
}
