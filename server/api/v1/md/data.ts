export const data1 = {
  slug: 'hello-world',
  title: 'Hello World',
  cnt: '# Hello World'
}

export const data2 = {
  title: 'ByteMD Docs',
  slug: 'bytemd-docs',
  cnt: `
## Markdown Basic Syntax

I just love **bold text**. Italicized text is the _cat's meow_. At the command prompt, type \`nano\`.

My favorite markdown editor is [ByteMD](https://github.com/bytedance/bytemd).

1. First item
2. Second item
3. Third item

> Dorothy followed her through many of the beautiful rooms in her castle.

\`\`\`js
import gfm from '@bytemd/plugin-gfm'
import { Editor, Viewer } from 'bytemd'

const plugins = [
  gfm(),
  // Add more plugins here
]

const editor = new Editor({
  target: document.body, // DOM to render
  props: {
    value: '',
    plugins,
  },
})

editor.on('change', (e) => {
  editor.$set({ value: e.detail.value })
})
\`\`\`

## GFM Extended Syntax

Automatic URL Linking: https://github.com/bytedance/bytemd

~~The world is flat.~~ We now know that the world is round.

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

`
}

export const data3 = {
  title: 'ByteMD Docs Full',
  slug: 'bytemd-docs-full',
  cnt: data2.cnt + `
## image

![logo.png](https://s.sixmillions.cn/img/logo/logo.png)

## Footnotes

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.
[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    \`{ my code }\`

    Add as many paragraphs as you like.

## Gemoji

Thumbs up: :+1:, thumbs down: :-1:.

Families: :family_man_man_boy_boy:

Long flags: :wales:, :scotland:, :england:.

## Math Equation

Inline math equation: $a+b$

$$
\\displaystyle \\left( \\sum_{k=1}^n a_k b_k \\right)^2 \\leq \\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)
$$

## Mermaid Diagrams

\`\`\`mermaid
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
  \`\`\`

`
}

export const data4 = {
  slug: 'code-block-theme',
  title: 'Code Theme',
  cnt: `
# 代码主题测试

## Java

\`\`\`java
package cn.sixmillions.demo;

import java.time.LocalDateTime;

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World! " + LocalDateTime.now());
    }
}
\`\`\`

## JS

\`\`\`js
js
import gfm from '@bytemd/plugin-gfm'
import { Editor, Viewer } from 'bytemd'

const plugins = [
  gfm(),
  // Add more plugins here
]

const editor = new Editor({
  target: document.body, // DOM to render
  props: {
    value: '',
    plugins,
  },
})

editor.on('change', (e) => {
  editor.$set({ value: e.detail.value })
})
\`\`\`

## Python

\`\`\`python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

if __name__ == '__main__':
    app.run()
\`\`\`

## Bash

\`\`\`bash
#!/bin/bash
echo "一共输入了 $# 个参数"
while [ "$1" != "" ]; do
  echo "剩下 $# 个参数"
  echo "参数：$1"
  shift
done
\`\`\`

## YAML

\`\`\`yml
server:
  port: 8201
#数据源配置
spring:
  redis:
    host: 10.203.193.135
    port: 30895
    password: Pass1234
    database: 0
    timeout: 2000
\`\`\`

## Html CSS

\`\`\`html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
        .logo {
            width: 200px;
        }
    </style>
    <script>
        var flag = true
        function addMedal() {
            console.log("切换颜色")
            var logos = document.getElementsByClassName("logo")
            console.log(logos)
            for (let i = 0; i < logos.length; i++) {
                if (flag) {
                    logos[i].style.width = "160px"
                    logos[i].style.border = "20px solid #f40"
                } else {
                    logos[i].style = ""
                    logos[i].style.width = "200px"
                }
            }
            flag = !flag
        }
    </script>
</head>

<body>
    <button onclick="addMedal()">添加/取消边框</button>
    <div>
        <p>width 160; boeder 20</p>
        <img class='logo' src="./images/logo-b.jpg" alt="logo">
        <img class='logo' src="./images/logo-b.jpg" alt="logo">
        <img class='logo' src="./images/logo-b.jpg" alt="logo">
        <img class='logo' src="./images/logo-b.jpg" alt="logo">
    </div>
</body>

</html>
\`\`\`
`
}

export const data5 = {
  slug: 'toc-test',
  title: '目录生成测试',
  cnt: '# Test1\n1\n\n1\n\n1\n\n1\n\n1\n1\n## Test1\n1\n\n1\n\n1\n\n1\n\n1\n1\n### Test1\n1\n\n1\n\n1\n\n1\n\n1\n1\n#### Test1\n1\n\n1\n\n1\n\n1\n\n1\n1\n##### Test1\n1\n\n1\n\n1\n\n1\n\n1\n1\n###### Test1\n1\n\n1\n\n1\n\n1\n\n1\n\n1\n' +
  '# Test2\n1\n\n1\n\n1\n\n1\n\n1\n1\n## Test2\n1\n\n1\n\n1\n\n1\n\n1\n1\n### Test2\n1\n\n1\n\n1\n\n1\n\n1\n1\n#### Test2\n1\n\n1\n\n1\n\n1\n\n1\n1\n##### Test2\n1\n\n1\n\n1\n\n1\n\n1\n1\n###### Test2\n1\n\n1\n\n1\n\n1\n\n1\n\n1\n' +
  '# Test3\n1\n\n1\n\n1\n\n1\n\n1\n1\n## Test3\n1\n\n1\n\n1\n\n1\n\n1\n1\n### Test3\n1\n\n1\n\n1\n\n1\n\n1\n1\n#### Test3\n1\n\n1\n\n1\n\n1\n\n1\n1\n##### Test3\n1\n\n1\n\n1\n\n1\n\n1\n1\n###### Test3\n1\n\n1\n\n1\n\n1\n\n1\n\n1\n' +
  '# Test4\n1\n\n1\n\n1\n\n1\n\n1\n1\n## Test4\n1\n\n1\n\n1\n\n1\n\n1\n1\n### Test4\n1\n\n1\n\n1\n\n1\n\n1\n1\n#### Test4\n1\n\n1\n\n1\n\n1\n\n1\n1\n##### Test4\n1\n\n1\n\n1\n\n1\n\n1\n1\n###### Test4\n1\n\n1\n\n1\n\n1\n\n1\n\n1\n' +
  '# Test5\n1\n\n1\n\n1\n\n1\n\n1\n1\n## Test5\n1\n\n1\n\n1\n\n1\n\n1\n1\n### Test5\n1\n\n1\n\n1\n\n1\n\n1\n1\n#### Test5\n1\n\n1\n\n1\n\n1\n\n1\n1\n##### Test5\n1\n\n1\n\n1\n\n1\n\n1\n1\n###### Test5\n1\n\n1\n\n1\n\n1\n\n1\n\n1\n' +
  '# Test666666666666666666666999999999\n1\n\n1\n\n1\n\n1\n\n1\n1\n## Test6\n1\n\n1\n\n1\n\n1\n\n1\n1\n### Test6\n1\n\n1\n\n1\n\n1\n\n1\n1\n#### Test6\n1\n\n1\n\n1\n\n1\n\n1\n1\n##### Test6\n1\n\n1\n\n1\n\n1\n\n1\n1\n###### Test6\n1\n\n1\n\n1\n\n1\n\n1\n\n1\n'
}

export const POST_LIST = [data1, data2, data3, data4, data5]
