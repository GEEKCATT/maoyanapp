// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    movie:{}

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;

    var id = options.id;

    var cookie = "uuid_n_v=v1; iuuid=743942F05A2D11EB8D63D309075BC6530941405D6B004373B8A13A9C7D424DF3; ci=1091%2C%E8%A1%A1%E4%B8%9C%E5%8E%BF; webp=true"
    
    // var cookie = "iuuid=A662CA308F7111EA8B2AC13A9D2261E6CBCDA568787E415AAF1C799A9707B23D; selectci=true; ci=57%2C%E6%AD%A6%E6%B1%89; webp=true"
    // var cookie="uuid_n_v=v1; iuuid=9F69F2C0133411EB83831D502B54A20B77E535E8E9C444CBB9282961AD9B467A; webp=true; ci=66%2C%E6%B2%88%E9%98%B3; Hm_lvt_703e94591e87be68cc8da0da7cbd0be2=1603240248; _lxsdk_cuid=1754890c35715-09df094354d457-697d721f-100200-1754890c358c8; _lxsdk=A7383D40133411EB9F16A9A5FC93F788B2861AD6978F455A9A40427B9216E85E; Hm_lpvt_703e94591e87be68cc8da0da7cbd0be2=1603240561; __mta=251101113.1603240248471.1603240277774.1603240561904.5";



    wx.request({
      url: 'https://m.maoyan.com/ajax/detailmovie?movieId='+id, 
      header: {
        'content-type': 'application/json',
        'Cookie':cookie
      },
      success (res) {
        console.log(res);       
        
        that.setData({
          movie:res.data.detailMovie
        })
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