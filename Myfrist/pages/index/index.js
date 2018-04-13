//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/01.jpg',
      '/images/02.jpg',
      '/images/03.jpg',
      '/images/04.jpg',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList:[
      {
        logo: '/images/李白4.png',
        title: '静夜思   --李白',
        desc: '床前明月光，疑是地上霜。\n' +
        '举头望明月，低头思故乡。',
      },
      {
        logo: '/images/李白1.png',
        title: '黄鹤楼送孟浩然之广陵 --李白',
        desc: '故人西辞黄鹤楼，烟花三月下扬州。\n' +
        '孤帆远影碧空尽，唯见长江天际流。',
      },
      {
        logo: '/images/李白.png',
        title: '望庐山瀑布 --李白',
        desc: '日照香炉生紫烟，遥看瀑布挂前川。\n' +
        '飞流直下三千尺，疑是银河落九天。',
      },
      {
        logo: '/images/李白3.png',
        title: '赠汪伦   --李白',
        desc: '李白乘舟将欲行，忽闻岸上踏歌声。\n桃花潭水深千尺，不及汪伦送我情。',
      },
      {
        logo: '/images/李白2.png',
        title: '早发白帝城 --李白',
        desc: '朝辞白帝彩云间，千里江陵一日还。\n两岸猿声啼不住，轻舟已过万重山。',
      },

    ],
  },
  onLoad: function () {
  
  }
})
