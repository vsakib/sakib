<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'
import { ref, watch, nextTick } from 'vue'

const { Layout } = DefaultTheme
const info = ref({ words: 0, minutes: 0 })
const { frontmatter } = useData()
const route = useRoute()

function updateReadingInfo() {
  if (frontmatter.value.showReadingInfo === false) {
    info.value = { words: 0, minutes: 0 }
    return
  }

  const el = document.querySelector('.VPDoc .main')
  if (!el) return

  const text = el.textContent || ''
  const cn = (text.match(/[\u4e00-\u9fa5]/g) || []).length
  const en = (text.match(/[a-zA-Z]+/g) || []).length
  const total = cn + en

  info.value.words = total
  info.value.minutes = Math.ceil(total / 200)
}

// 页面首次加载 & 每次切换页面后重新统计
watch(
    () => route.path,
    () => nextTick(() => updateReadingInfo()),
    { immediate: true }
)
</script>

<template>
  <!-- 保留 Default Layout 的样式结构 -->
  <Layout>
    <template #doc-before>
      <!-- 插入你自己的内容：显示字数和阅读时长 -->
      <div
          v-if="info.words"
          class="reading-info"
          style="margin-bottom: 1rem; color: #444; font-size: 16px; font-weight: 500;"
      >
        字数：{{ info.words }} 字 ｜ 预计阅读：{{ info.minutes }} 分钟
      </div>
    </template>
  </Layout>
</template>
