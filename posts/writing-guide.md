---
title: 写文章语法教学
date: 2025-06-14
tags: [文档, 语法教学]
draft: true
---

本文档介绍在 vitepress-theme-bluearchive 中写博客文章时的语法规范与可用功能。

---

## 一、文章基本结构

每篇文章都是一个 `.md` 文件，放在 `posts/` 目录下。文件名即 URL 路径，例如 `my-post.md` → `/posts/my-post.html`。

### Front Matter（必填）

每篇文章开头必须包含 Front Matter，用 `---` 包裹：

```yaml
---
title: 文章标题
date: 2025-06-14
tags: [标签1, 标签2]
---
```

### Front Matter 字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| `title` | 是 | 文章标题，显示在文章列表和详情页 |
| `date` | 是 | 发布日期，格式 `YYYY-MM-DD`，用于排序 |
| `tags` | 否 | 标签数组，如 `[vue, vitepress]`，用于标签分类 |
| `cover` | 否 | 文章封面图，值为 `public/` 目录下的图片路径，如 `/wallpaper-2572384.webp` |
| `pinned` | 否 | 是否置顶，设为 `true` 时文章将置顶显示 |
| `draft` | 否 | 是否为草稿，设为 `true` 时文章不会在列表中显示（隐藏文章） |
| `head` | 否 | 自定义 HTML `<head>` 标签，用于 SEO |

### 完整 Front Matter 示例

```yaml
---
title: 我的文章
date: 2025-06-14
tags: [教程, vue]
cover: /wallpaper-2572384.webp
pinned: true
head:
  - - meta
    - name: description
      content: 文章描述，用于SEO
  - - meta
    - name: keywords
      content: 关键词1, 关键词2
---
```

---

## 二、摘要（Excerpt）

使用 `---` 或 `<!-- more -->` 分隔摘要与正文。分隔线之前的内容会作为摘要显示在文章列表中。

### 方式一：用 `---` 分隔

```markdown
---
title: 示例文章
date: 2025-06-14
tags: [示例]
---

这里是摘要内容，会显示在文章列表中。

---

这里是正文内容，只有点进文章才能看到。
```

### 方式二：用 `<!-- more -->` 分隔

```markdown
---
title: 示例文章
date: 2025-06-14
tags: [示例]
---

摘要内容

<!-- more -->

正文内容
```

> 两种方式可以组合使用：`---` 分隔 Front Matter 和摘要，`<!-- more -->` 分隔摘要和正文。

---

## 三、Markdown 基础语法

### 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

### 文本样式

```markdown
**粗体文本**
_斜体文本_
~~删除线文本~~
<u>下划线文本</u>
`行内代码`
```

### 链接与图片

```markdown
[链接文字](https://example.com)
![图片替代文字](/image-path.webp)
![带标题的图片](/image-path.webp "图片标题")
```

### 列表

```markdown
- 无序列表项 1
- 无序列表项 2

1. 有序列表项 1
2. 有序列表项 2

- [ ] 未完成的任务
- [x] 已完成的任务
```

### 引用

```markdown
> 这是一段引用文字
> 可以多行
```

### 表格

```markdown
| 列1 | 列2 | 列3 |
|-----|:---:|----:|
| 左对齐 | 居中 | 右对齐 |
| 内容 | 内容 | 内容 |
```

### 分隔线

```markdown
---
```

---

## 四、代码高亮

### 行内代码

```markdown
使用 `console.log()` 输出日志
```

### 代码块

使用三个反引号包裹，并在后面指定语言：

````markdown
```javascript
const greeting = 'Hello, World!'
console.log(greeting)
```
````

### 行高亮

在语言后加 `{行号}` 高亮指定行：

````markdown
```js{4}
export default {
  data () {
    return {
      msg: '这一行会被高亮！'
    }
  }
}
```
````

支持多种行高亮语法：

- `{4}` — 高亮第 4 行
- `{1,4}` — 高亮第 1 和第 4 行
- `{1-4}` — 高亮第 1 到 4 行
- `{1-3,5}` — 高亮第 1-3 行和第 5 行

### 支持的常用语言

`javascript`、`typescript`、`python`、`rust`、`go`、`java`、`cpp`、`html`、`css`、`json`、`yaml`、`bash`、`sql`、`markdown` 等

---

## 五、自定义容器

VitePress 提供了自定义容器语法：

```markdown
::: info
信息提示框
:::

::: tip
小贴士
:::

::: warning
警告提示
:::

::: danger
危险警告
:::

::: details
可折叠的详情块
:::
```

也可以自定义标题：

```markdown
::: tip 我的提示
自定义标题的提示框
:::
```

---

## 六、数学公式（LaTeX）

本项目已启用 MathJax 支持。

### 行内公式

```markdown
当 $a \ne 0$ 时，方程有解
```

### 块级公式

```markdown
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$
```

### 常用 LaTeX 示例

| 语法 | 效果 |
|------|------|
| `$\frac{a}{b}$` | 分数 |
| `$\sqrt{x}$` | 平方根 |
| `$x^{2}$` | 上标 |
| `$x_{i}$` | 下标 |
| `$\vec{a}$` | 向量 |
| `$\sum_{i=1}^{n}$` | 求和 |
| `$\int_{a}^{b}$` | 积分 |
| `$\alpha, \beta, \gamma$` | 希腊字母 |

---

## 七、图片灯箱

本主题集成了 FancyBox 图片灯箱效果。

### Markdown 图片（自动灯箱）

使用标准 Markdown 图片语法会自动启用灯箱：

```markdown
![图片说明](/wallpaper-2572384.webp)
```

### HTML img 标签（需手动添加属性）

使用 `<img>` 标签时需添加 `data-fancybox="gallery"` 属性：

```html
<img src="/wallpaper-2572384.webp" data-fancybox="gallery"/>
```

---

## 八、图片路径规则

- `public/` 目录下的图片用 `/` 开头的绝对路径引用，如 `/wallpaper-2572384.webp`
- 文章封面图在 Front Matter 的 `cover` 字段中设置，路径规则相同
- 推荐使用 `.webp` 格式以获得更好的加载性能

---

## 九、文章置顶

在 Front Matter 中添加 `pinned: true` 即可将文章置顶：

```yaml
---
title: 重要公告
date: 2025-06-14
tags: [公告]
pinned: true
---
```

置顶文章会始终排在列表最前面。

---

## 十、写作模板

新建文章时可以复制以下模板：

```markdown
---
title: 文章标题
date: 2025-06-14
tags: [标签1, 标签2]
cover: /cover-image.webp
head:
  - - meta
    - name: description
      content: 文章描述
  - - meta
    - name: keywords
      content: 关键词1, 关键词2
---

文章摘要，会显示在列表中。

---

<!-- more -->

正文内容从这里开始...

## 第一节

内容...

## 第二节

内容...
```
