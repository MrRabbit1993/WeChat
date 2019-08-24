import ClassicModel from "./../../models/classic.js";
import LikeModel from "./../../models/like";
const classicInstance = new ClassicModel();
const likeInstance = new LikeModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classicData: {},
    latest:true,
    first:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicInstance.getLatest((res) => {
      this.setData({
        classicData: res.data
      })
    })
  },
  behavior(obj) {
    const behavior = obj.detail.behavior;
    likeInstance.like(behavior, this.data.classicData.id, this.data.classicData.type)
  },
  nextFn(obj){
    console.log(obj)
  },
  previousFn(obj){
    console.log(obj)
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

  },
  methods: {
    // behavior(obj){
    //   console.log(obj)
    // }
  }
})