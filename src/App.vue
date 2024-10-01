<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import IconRotate from '@/assets/rotate.svg'
import IconPlay from '@/assets/play.svg'
import IconRestart from '@/assets/restart.svg'

const API_URL = 'https://staging.yizhiji.com.cn/api/nfc/woodtotem1'

const videoSrc = ref<string>('')
const videoRef = ref<HTMLVideoElement | null>(null)

const showPlay = ref<boolean>(false)
const showModal = ref<boolean>(false)
const showRotate = ref<boolean>(true)
const showHeadphones = ref<boolean>(false)

watchEffect(async () => {
  try {
    const data = await (await fetch(API_URL)).json()
    videoSrc.value = `https://cdn-staging.yizhiji.com.cn${data.page_media_files[0].media_name}`
  } catch (error) {
    console.error(error)
  }
})

function playVideo() {
  const video = videoRef.value as HTMLVideoElement
  video.play()
  video.style.zIndex = '20'
  video.controls = true
}

function handleMetadata() {
  console.log('Video can play through without buffering.')
  showRotate.value = false
  showHeadphones.value = true

  setTimeout(() => {
    showHeadphones.value = false
    showPlay.value = true
  }, 2000)
}

function handleVideoEnded() {
  const video: any = videoRef.value

  if (video.exitFullscreen) video.exitFullscreen()
  else if (video.webkitExitFullscreen) video.webkitExitFullscreen()
  else if (video.mozCancelFullScreen) video.mozCancelFullScreen()
  else if (video.msExitFullscreen) video.msExitFullscreen()

  showModal.value = true
}
</script>

<template>
  <router-link to="/">Home</router-link>
  <router-link to="/woodtotems/:id">Woodtotems</router-link>
  <router-view></router-view>
  <main>
    <Transition name="rotate-fade">
      <div class="icon-rotate" v-if="showRotate">
        <IconRotate />
        <p class="cn">旋转手机以全屏观看</p>
        <p class="en">
          Rotate your phone 90º to<br />
          view in full screen
        </p>
      </div>
    </Transition>

    <Transition name="headphones-fade">
      <div class="icon-headphones" v-if="showHeadphones">
        <img src="/logo.png" />
        <img src="/headphones.png" />
        <p class="cn">建议佩戴耳机观看</p>
        <p class="en">HEADPHONES RECOMMENDED</p>
      </div>
    </Transition>

    <Transition name="play-fade">
      <div class="icon-play" v-if="showPlay" @click="playVideo">
        <IconPlay />
        <p>点击播放</p>
      </div>
    </Transition>

    <Transition name="modal-fade">
      <div id="modal" v-if="showModal">
        <button class="btn-restart" @click="playVideo">
          <IconRestart />
          <span>重播视频</span>
        </button>

        <div class="offical-account">
          <img class="qrcode" src="/qrcode.jpg" alt="QR Code" />
          <p>长按保存二维码后<br />到微信关注一之己服务号</p>
        </div>
      </div>
    </Transition>

    <video
      :src="videoSrc"
      id="video"
      ref="videoRef"
      preload="metadata"
      @loadedmetadata="handleMetadata"
      @ended="handleVideoEnded"
    ></video>
  </main>
</template>

<style scoped>
#video {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
  background-size: cover;
}

#modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 30;
  background-color: white;
}

.btn-restart {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  background-color: white;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 300;
  text-align: center;
}

.offical-account {
  text-align: center;
}

.offical-account > p {
  font-family: 'PingFang SC';
  font-style: normal;
  text-align: center;
  font-weight: 300;
  color: #000;
}

.icon-headphones,
.icon-rotate,
.icon-play {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 10;
}

.icon-rotate,
.icon-headphones,
.icon-play {
  text-align: center;
}

.icon-headphones > img {
  display: block;
}

@media only screen and (orientation: landscape) {
  #modal {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }

  .btn-restart {
    width: 90px;
    height: 25px;
    margin: 36px 22px 28px;
    border: 0.5px solid #000;
    border-radius: 50px;
    font-size: 10px;
    letter-spacing: 0.1em;
  }

  .btn-restart > span {
    margin-left: 6px;
  }

  .offical-account {
    margin-bottom: 40px;
  }

  .offical-account > p {
    font-size: 6px;
    line-height: 8px;
    letter-spacing: 0.1em;
  }

  .qrcode {
    width: 38px;
    height: 35px;
  }

  .icon-play > p,
  .icon-rotate > .cn,
  .icon-headphones > .cn {
    font-family: 'PingFang SC';
    font-size: 18px;
    letter-spacing: 0.1em;
  }

  .icon-rotate > .en,
  .icon-headphones > .en {
    font-size: 12px;
    font-weight: 600;
  }

  .icon-headphones > img:first-of-type {
    width: 115px;
    margin: 0 auto;
  }

  .icon-headphones > img:nth-of-type(2) {
    width: 115px;
    margin: 10px auto;
  }
}

@media only screen and (orientation: portrait) {
  #modal {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
  }

  .btn-restart {
    width: 180px;
    height: 50px;
    margin: 72px 44px 56px;
    border: 1px solid #000;
    border-radius: 100px;
    font-size: 20px;
    letter-spacing: 0.2em;
  }

  .btn-restart > span {
    margin-left: 12px;
  }

  .offical-account {
    margin-bottom: 80px;
  }

  .offical-account > p {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2em;
  }

  .qrcode {
    width: 76px;
    height: 70px;
  }

  .icon-play > p,
  .icon-rotate > .cn,
  .icon-headphones > .cn {
    font-family: 'PingFang SC';
    font-size: 32px;
    letter-spacing: 0.2em;
  }

  .icon-rotate > .en,
  .icon-headphones > .en {
    font-size: 24px;
    font-weight: 600;
  }

  .icon-headphones > img:first-of-type {
    width: 230px;
    margin: 0 auto;
  }

  .icon-headphones > img:nth-of-type(2) {
    width: 230px;
    margin: 10px auto;
  }
}

.rotate-fade-enter-active,
.rotate-fade-leave-active,
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease 1s;
}
.headphones-fade-enter-active,
.headphones-fade-leave-active {
  transition: opacity 0.5s ease 1.5s;
}
.play-fade-enter-active,
.play-fade-leave-active {
  transition: opacity 0.5s ease 2s;
}

.headphones-fade-enter-from,
.headphones-fade-leave-to,
.rotate-fade-enter-from,
.rotate-fade-leave-to,
.play-fade-enter-from,
.play-fade-leave-to,
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
