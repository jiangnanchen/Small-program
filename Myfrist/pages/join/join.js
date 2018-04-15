// pages/join/join.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  tell: function(){
    wx.makePhoneCall({
      phoneNumber: '13522779013' //仅为示例，并非真实的电话号码
    })
  },
})