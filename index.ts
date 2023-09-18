type VideoControl = {
  action: 'play' | 'loop' // 播放或循环播放
  start: number // 段落开始时间（秒）
  duration?: number // 段落持续时间（秒），如果未提供，将根据下一段开始时间计算
  count?: number // 播放次数，默认为1次
}

class PlayerCore {
  private currentIndex = 0
  private controlArray: VideoControl[] = []
  private videoElement: HTMLVideoElement

  constructor(videoElement: HTMLVideoElement, controlArray: VideoControl[]) {
    this.videoElement = videoElement
    this.controlArray = controlArray
  }

  private loop(control: VideoControl, callback: () => void) {
    const { count = 1 } = control
    let remainingPlays = count

    function playAndDecrement() {
      if (remainingPlays > 0) {
        callback()
        remainingPlays--
        if (remainingPlays > 0) {
          setTimeout(playAndDecrement, 0) // 播放下一次
        }
      }
    }

    playAndDecrement()
  }

  private playSegment(control: VideoControl) {
    const { start, duration } = control
    this.videoElement.currentTime = start
    this.videoElement.play()

    if (duration !== undefined) {
      setTimeout(() => {
        this.videoElement.pause()
        this.playNextSegment()
      }, duration * 1000)
    } else {
      this.videoElement.addEventListener('ended', () => {
        this.playNextSegment()
      })
    }
  }

  private playNextSegment() {
    if (this.currentIndex >= this.controlArray.length) {
      this.videoElement.pause()
      return
    }

    const control = this.controlArray[this.currentIndex]
    this.currentIndex++

    if (control.action === 'play') {
      this.playSegment(control)
    } else if (control.action === 'loop') {
      this.loop(control, () => {
        this.playSegment(control)
      })
    }
  }

  public playWithControl() {
    this.currentIndex = 0
    this.playNextSegment()
  }
}

// 示例用法
const videoElement = document.getElementById('mainVideo') as HTMLVideoElement
const controlArray: VideoControl[] = [
  { action: 'play', start: 0, duration: 10, count: 2 }, // 播放第一段，持续10秒，播放2次
  { action: 'loop', start: 10, count: 3 }, // 循环播放第二段，播放3次
  { action: 'play', start: 20, duration: 8 }, // 播放第三段，持续8秒，默认播放1次
]

const player = new PlayerCore(videoElement, controlArray)
player.playWithControl()
