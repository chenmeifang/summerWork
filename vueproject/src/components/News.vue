<template>
    <div>
        <p>新闻资讯</p>
        <!-- <canvas id="can" width="500px" height="500px" ref="myCanvas"></canvas> -->
        <button>加</button>
        <!-- <input v-model="count"> -->
        <!-- <input v-model="store.state.count"> -->
        <!-- <input v-model="$store.state.count">   这个也行，不知道为什么 -->
        <input v-model="this.$store.state.count">
    </div>
</template>
<script>
export default {
  data () {
    return {
      // count: 3
    }
  },
  created () {
    console.log(this.$route)
  },
  mounted () {
    /* console.log(this.$refs)
    console.log('aaaaa')
    var canvas = this.$refs.myCanvas
    var ctx = canvas.getContext('2d')
    var arr = []
    setInterval(function () {
      var x = Math.random() * canvas.width
      var y = Math.random() * canvas.height
      var r = 10
      var red = Math.floor(Math.random() * 255)
      var green = Math.floor(Math.random() * 255)
      var blue = Math.floor(Math.random() * 255)
      var alpha = 1
      arr.push({
        circleX: x,
        circleY: y,
        circleR: r,
        circleRed: red,
        circleGreen: green,
        circleBlue: blue,
        circleAlpha: alpha
      })
    }, 60)
    setInterval(function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (var i = 0; i < arr.length; i++) {
        ctx.beginPath()
        arr[i].circleR += 2.5
        arr[i].circleAlpha -= 0.03
        ctx.fillStyle = `rgba(${arr[i].circleRed},${arr[i].circleGreen},${arr[i].circleBlue},${arr[i].circleAlpha})`
        ctx.arc(arr[i].circleX, arr[i].circleY, arr[i].circleR, 0, 360 * Math.PI / 180, false)
        ctx.closePath()
        ctx.fill()
      }
    }, 60)  */
  }
}
</script>
<style scoped>
#can{
    background-color: pink
}
</style>


