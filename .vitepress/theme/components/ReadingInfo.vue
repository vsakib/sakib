<script setup>
console.log('ReadingInfo 组件加载了')

import { onMounted, ref } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const info = ref({ words: 0, minutes: 0 })

onMounted(() => {
  if (frontmatter.value.showReadingInfo === false) return

  const el = document.querySelector('.VPDoc .content')
  console.log(el)
  if (!el) return

  const text = el.textContent || ''
  const words = text.trim().split(/\s+/).length
  const wpm = 200 // 平均阅读速度
  const minutes = Math.ceil(words / wpm)

  info.value.words = words
  info.value.minutes = minutes
})
</script>

<template>
  <div v-if="info.words" class="reading-info">
    字数：{{ info.words }} 字 ｜ 预计阅读：{{ info.minutes }} 分钟
  </div>
</template>
