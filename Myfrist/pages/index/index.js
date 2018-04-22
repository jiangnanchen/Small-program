//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/0001.jpg',
      '/images/0002.jpg',
      '/images/0003.jpg',
      '/images/0004.jpg',
      '/images/0005.jpg',
      '/images/0006.jpg',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    // proList: null,
    
    proList:[
      {
        logo: 'https://github.com/jiangnanchen/tata/blob/master/images/14.png?raw=true',
        title: '静夜思   --李白',
        desc: '床前明月光，疑是地上霜。\n' +
        '举头望明月，低头思故乡。',
      },
      {
        logo: 'https://github.com/jiangnanchen/tata/blob/master/images/11.png?raw=true',
        title: '黄鹤楼送孟浩然之广陵 --李白',
        desc: '故人西辞黄鹤楼，烟花三月下扬州。\n' +
        '孤帆远影碧空尽，唯见长江天际流。',
      },
      {
        logo: 'https://github.com/jiangnanchen/tata/blob/master/images/10.png?raw=true',
        title: '望庐山瀑布 --李白',
        desc: '日照香炉生紫烟，遥看瀑布挂前川。\n' +
        '飞流直下三千尺，疑是银河落九天。',
      },
      {
        logo: 'https://github.com/jiangnanchen/tata/blob/master/images/13.png?raw=true',
        title: '赠汪伦   --李白',
        desc: '李白乘舟将欲行，忽闻岸上踏歌声。\n桃花潭水深千尺，不及汪伦送我情。',
      },
      {
        logo: 'https://github.com/jiangnanchen/tata/blob/master/images/12.png?raw=true',
        title: '早发白帝城 --李白',
        desc: '朝辞白帝彩云间，千里江陵一日还。\n两岸猿声啼不住，轻舟已过万重山。',
      },
    ]
  },
  onLoad: function () {
    this.setData({
      test:'01',
    })
    this.getProList();
  },
  toDetail:function(e){
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
    var proList=this.data.proList;
    var title = proList[index].title;
    wx.navigateTo({
      url: '/pages/detail/detail?title='+title,
    })
  },
  // getProList:function(){
  //   var self = this;
  //   wx.request({
  //     url: 'http://json.chenjiangnan.top:10011/',
  //     method:'GET',
  //     success:function(res){
  //       console.log(res);
  //       self.setData({
  //         proList:res.data,
  //       })
  //     }
  //   })
  // }
})
