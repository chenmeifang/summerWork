<template>
    <div>
    <swiper auto height="150px">
      <swiper-item class="black"><h2 class="title fadeInUp animated">是时候醒悟了吧</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">每天怎么说也得多会一点吧</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">天天空想些没用的</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">大傻叉</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">不要被别人影响</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">嘤嘤嘤撸起袖子加油干</h2></swiper-item>
    </swiper>
    <grid>
      <grid-item label="新闻资讯" link="/home/news?id=10"><img src=""></grid-item>
      <grid-item label="图片分享"><img src=""></grid-item>
      <grid-item label="商品购买"><img src=""></grid-item>
    </grid>
    <grid>
      <grid-item label="留言反馈"><img src=""></grid-item>
      <grid-item label="视频专区"><img src=""></grid-item>
      <grid-item label="联系我们"><img src=""></grid-item>
    </grid>
    </div>
</template>
<script>
import { Swiper, SwiperItem, Grid, GridItem } from 'vux'

export default {
  components: {
    Swiper,
    SwiperItem,
    Grid,
    GridItem
  }
}
</script>
<style scoped>
.black {
  background-color:plum;
}
.title {
  line-height: 150px;
  /* 让文字居中了，不知道为什么？？？？ */
  /* height: 150px; */
  text-align: center;
  /* vertical-align: center; */
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.fadeInUp {
  animation-name: fadeInUp;
}
</style>

