<template>
  <div class="music-disc" @click="toggleMusic">
    <div class="disc" :class="{ spinning: isPlaying }">
      <div class="disc-inner">
        <div class="disc-ring"></div>
        <div class="disc-center"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isPlaying = ref(false)
const music = ref<HTMLAudioElement | null>(null)

const toggleMusic = () => {
  if (music.value) {
    if (isPlaying.value) {
      music.value.pause()
    } else {
      music.value.play().catch((err) => console.log('播放失败: ', err))
    }
  }
}

onMounted(() => {
  music.value = document.getElementById('background-music') as HTMLAudioElement
  if (music.value) {
    music.value.volume = 0.3
    // 同步播放状态
    isPlaying.value = !music.value.paused
    music.value.addEventListener('play', () => { isPlaying.value = true })
    music.value.addEventListener('pause', () => { isPlaying.value = false })
    // 尝试自动播放
    music.value.play().then(() => {
      isPlaying.value = true
    }).catch(() => {
      const playOnInteract = () => {
        music.value?.play().then(() => {
          isPlaying.value = true
        }).catch(() => {})
        document.removeEventListener('click', playOnInteract)
        document.removeEventListener('keydown', playOnInteract)
      }
      document.addEventListener('click', playOnInteract)
      document.addEventListener('keydown', playOnInteract)
    })
  }
})
</script>

<style scoped lang="less">
.music-disc {
  cursor: pointer;
  flex-shrink: 0;
}

.disc {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #1a1a2e,
    #2a2a4a,
    #1a1a2e,
    #2a2a4a,
    #1a1a2e,
    #2a2a4a,
    #1a1a2e
  );
  box-shadow:
    0 0 0 3px rgba(50, 140, 250, 0.4),
    0 2px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow:
      0 0 0 3px rgba(50, 140, 250, 0.7),
      0 2px 16px rgba(50, 140, 250, 0.4);
  }
}

.disc-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.disc-ring {
  position: absolute;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.disc-center {
  width: 30%;
  height: 30%;
  border-radius: 50%;
  background: radial-gradient(circle, #328cfa 30%, #1a1a2e 70%);
  border: 2px solid rgba(255, 255, 255, 0.15);
}

.spinning {
  animation: spin 3s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .disc {
    width: 28px;
    height: 28px;
  }
}
</style>
