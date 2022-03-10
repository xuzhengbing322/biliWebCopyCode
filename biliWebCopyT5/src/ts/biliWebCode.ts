const arr: string[] = ['番剧', '直播', '游戏中心', '会员购', '漫画', '赛事', '下载APP', '大会员', '信息', '动态', '收藏', '历史', '创作中心', '投稿']
const input: any = document.getElementById('val')
const show: any = document.getElementById('show')
input.onkeyup = function () {
  show.style.display = 'block'

  let str: string[] = []
  arr.forEach((item) => {
    const res = item.indexOf(input.value)
    if (res !== -1) {
      // str += '<p>' + item + '</p>'
    }
  })
  if (!input.value || !str) {
    show.innerHTML = '<p>暂无结果</p>'
  } else {
    show.innerHTML = str
  }
}

input.onblur = function () {
  show.style.display = 'none'
  input.value = ''
}