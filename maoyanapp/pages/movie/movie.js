// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    scrollHeight:(wx.getSystemInfoSync().windowHeight - 150)+"px"

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.showLoading({
      title: '页面加载中',//网页加载项
    })

    //这里，认识this, 回调函数里不认识this.
    var that = this;
    wx.request({
      url: 'https://m.maoyan.com/ajax/movieOnInfoList', 
      header: {
        'content-type': 'application/json'
      },
      success (res) {
        console.log(res);

        that.setData({
          list:res.data.movieList
        })

        //去掉loading
        wx.hideLoading();
      }
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})