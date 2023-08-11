# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## 配置  

### eslint

<https://nuxt.com/modules/eslint>

<https://codesandbox.io/p/sandbox/github/nuxt-community/eslint-module>

```bash
pnpm add -D eslint @nuxtjs/eslint-module @nuxtjs/eslint-config-typescript
```

```ts
modules: [
  '@nuxtjs/eslint-module'
],
```

package.json

```json
{
  "lint": "eslint --ext .js,.ts,.vue"
}
```

校验 `pnpm lint` , 自动修复 `pnpm lint --fix`

vscode保存时自动格式化，不需要prettier。先禁用prettier

<https://nuxt.com/docs/community/contribution#ide-setup>

<https://nuxt.com/docs/community/contribution#no-prettier>

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": false,
    "source.fixAll.eslint": true
  }
}
```

## ByteMD

<https://bytemd.js.org/>

<https://github.6bw.fun/bytedance/bytemd/tree/main/examples/nuxt3>

安装vue3版本的bytemmd，和最基础的解析插件

```bash
pnpm add @bytemd/vue-next @bytemd/plugin-gfm
```

## QA

### Cannot find module 'typescript'

```text
Failed to load plugin '@typescript-eslint' declared in '.eslintrc.js » @nuxtjs/eslint-config-typescript': Cannot find module 'typescript'
```

<https://blog.csdn.net/weixin_45538554/article/details/115866403>

<https://stackoverflow.com/questions/63996810/cannot-find-module-typescript>

我的解决方式

```bash
pnpm add -D typescript
```

重启vscode，“输出”不再报错
