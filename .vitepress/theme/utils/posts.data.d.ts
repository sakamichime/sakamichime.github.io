export interface PostData {
  id: number
  title: string
  content: string
  href: string
  create: number
  update: number
  tags?: string[]
  wordCount: number
  cover?: string
  excerpt: string
  pinned?: boolean
  draft?: boolean // 草稿标记，设为 true 则文章不会在列表中显示
}
export declare const data: PostData[]
