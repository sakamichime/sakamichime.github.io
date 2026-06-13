---
title: 项目目录结构
date: 2025-06-14
tags: [文档, 项目结构]
draft: true
---

本文档介绍 vitepress-theme-bluearchive 项目的目录结构与各文件的作用。

---

## 根目录总览

```
sakamichime.github.io/
├── .github/                  # GitHub 相关配置
│   └── workflows/
│       └── deploy.yml        # GitHub Actions 自动部署配置
├── .vitepress/               # VitePress 核心配置与主题
│   ├── config.mts            # VitePress 站点配置文件
│   └── theme/                # 自定义主题目录
│       ├── index.ts          # 主题入口文件
│       ├── Layout.vue        # 全局布局组件
│       ├── assets/           # 静态资源
│       ├── components/       # Vue 组件
│       ├── store/            # 状态管理
│       ├── styles/           # 样式文件
│       └── utils/            # 工具函数
├── posts/                    # 博客文章目录（Markdown）
├── tags/                     # 标签页
│   └── index.md              # 标签聚合页
├── public/                   # 公共静态资源（直接复制到输出目录）
│   ├── font/                 # 自定义字体（Blueaka）
│   ├── spine_assets/         # Spine 动画资源
│   ├── favicon.ico           # 站点图标
│   └── *.webp                # 壁纸/封面图片
├── index.md                  # 首页
├── package.json              # 项目依赖与脚本
├── pnpm-lock.yaml            # pnpm 锁文件
└── .gitignore                # Git 忽略规则
```

---

## 核心目录详解

### `.vitepress/` — VitePress 配置与主题

#### `config.mts` — 站点配置

这是整个站点的核心配置文件，包含以下配置项：

| 配置项 | 说明 |
|--------|------|
| `lang` | 站点语言，默认 `zh-CN` |
| `title` | 站点标题 |
| `head` | HTML `<head>` 附加标签（字体、Gitalk、灯箱等） |
| `themeConfig.menuList` | 导航栏菜单 |
| `themeConfig.videoBanner` | 是否启用视频 Banner |
| `themeConfig.name` | Banner 显示的名称 |
| `themeConfig.welcomeText` | 欢迎语 |
| `themeConfig.motto` | 座右铭（数组，随机展示） |
| `themeConfig.social` | 社交链接（icon + url） |
| `themeConfig.spineVoiceLang` | Spine 角色语音语言（`zh` / `jp`） |
| `themeConfig.footerName` | 页脚名称 |
| `themeConfig.poweredList` | 页脚技术支持列表 |
| `themeConfig.clientID` 等 | Gitalk 评论系统配置 |
| `markdown.theme` | 代码高亮主题 |
| `markdown.lineNumbers` | 代码行号显示 |
| `markdown.math` | 数学公式支持 |

#### `theme/` — 自定义主题

| 文件/目录 | 说明 |
|-----------|------|
| `index.ts` | 主题入口，注册布局、样式、Spine 播放器 |
| `Layout.vue` | 全局布局，包含导航栏、Banner、文章列表/详情、页脚、Spine 角色、背景音乐等 |
| `store/index.ts` | Pinia 状态管理（主题切换、加载状态等） |
| `styles/` | Less 样式文件（变量、图标、全局样式） |
| `utils/posts.data.mts` | 文章数据加载器，读取 `posts/` 目录下的 Markdown 文件 |

#### `theme/assets/` — 主题静态资源

| 路径 | 说明 |
|------|------|
| `banner/avatar.webp` | Banner 头像 |
| `banner/banner.webp` | 亮色模式 Banner 图 |
| `banner/banner_dark.webp` | 暗色模式 Banner 图 |
| `banner/banner_video.mp4` | 视频 Banner（需开启 `videoBanner`） |
| `banner/bgm.mp3` | 背景音乐 |
| `icon/` | 图标字体（导航 Logo 等） |
| `background.svg` | 亮色模式背景 |
| `background_dark.svg` | 暗色模式背景 |
| `NotFound.webp` | 404 页面图片 |

#### `theme/components/` — Vue 组件

| 组件 | 说明 |
|------|------|
| `Banner.vue` | Banner 区域 |
| `Welcome-Box.vue` | 首页欢迎框（座右铭、社交链接） |
| `Posts-List.vue` | 文章列表 |
| `Post-Viewer.vue` | 文章详情渲染 |
| `Post-InnerBanner.vue` | 文章内页 Banner |
| `Tags.vue` | 标签云 |
| `Navbar/` | 导航栏（搜索、音乐控制、主题切换等） |
| `Spine-Player/` | Spine2D 角色播放器（Arona/Plana） |
| `Splash.vue` | 开屏动画 |
| `Fireworks.vue` | 烟花特效 |
| `Footer.vue` | 页脚 |
| `Gitalk.vue` | Gitalk 评论 |
| `NotFound.vue` | 404 页面 |
| `ToTop.vue` | 回到顶部按钮 |

---

### `posts/` — 博客文章

所有博客文章以 Markdown 文件形式存放在此目录。文件名即路由路径，例如 `hello-world.md` 对应 `/posts/hello-world.html`。

> 注意：`posts/index.md` 是文章详情页模板，不要删除。

---

### `public/` — 公共静态资源

此目录下的文件会被直接复制到构建输出目录，可通过根路径 `/` 直接访问。

| 路径 | 说明 |
|------|------|
| `font/Blueaka/` | Blueaka 字体文件 |
| `font/Blueaka_Bold/` | Blueaka 粗体字体文件 |
| `spine_assets/arona/` | Arona 角色 Spine 动画 + 语音 |
| `spine_assets/plana/` | Plana 角色 Spine 动画 + 语音 |
| `favicon.ico` | 站点图标 |
| `*.webp` | 壁纸/封面图片 |

---

## 常用命令

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 构建生产版本 |
| `pnpm preview` | 预览构建结果 |

> 项目推荐使用 pnpm 作为包管理器。
