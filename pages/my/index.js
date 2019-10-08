// pages/my/index.js
import BookModal from "./../../models/book.js";
import ClassicModel from "./../../models/classic.js";
const bookInstance = new BookModal();
const classicInstance = new ClassicModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorized: false,
    userInfo: null,
    bookCount: 0,
    classics:null
  },
  getUserInfo(event) {
    const userInfo = event.detail.userInfo;
    if (!userInfo) return
    this.setData({
      userInfo,
      authorized: true
    })
  },
  checkAuthoriz() {
    wx.getSetting({
      success: data => {
        if (data.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: data => {
              this.setData({
                userInfo: data.userInfo,
                authorized: true
              })
            }
          })
        }
      }
    })
  },
  jumptoAbout(event) {
    wx.navigateTo({
      url: '/pages/about/index'
    });
  },
  onStudy(event) {
    wx.navigateTo({
      url: '/pages/course/index'
    });
  },
  getBookCount() {
    bookInstance.getMyBookCount().then(_ => {
      this.setData({
        bookCount: _.count
      })
    })
  },
  getMyFavor() {
    classicInstance.getMyFavor(res => {
      this.setData({
        classics:res.data
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.checkAuthoriz();
    this.getBookCount();
    this.getMyFavor();
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