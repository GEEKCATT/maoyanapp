// pages/logic/logic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     msg:"helloworld",
     msg2:"hello you",
     flag:false,
     list:[
       {
         title:"阿甘正传",
         pubicDate:"2000-1-1",
         star:"someone"
       },
       {
        title:"阿甘正传2",
        pubicDate:"2000-1-1",
        star:"someone"
      },
      {
        title:"阿甘正传3",
        pubicDate:"2000-1-1",
        star:"someone"
      },
      {
        title:"阿甘正传4",
        pubicDate:"2000-4-1",
        star:"someone4"
      }
     ]
  },

  toggle:function()
  {
      this.setData({
        flag:!this.data.flag
      })
  },

  changeMsg:function(){

   this.setData({
     msg:"haha",
     msg2:"hehe"
   })

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