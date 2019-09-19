import BookModal from "./../../models/book.js"
const bookInstance = new BookModal();
Page({
  data: {
    comments:[],
    book:null,
    likeStatus:false,
    likeCount:0
  },
  onLoad: function (options) {
    const { bookId } = options;
    const details = bookInstance.getDetail(bookId);
    const comments = bookInstance.getComments(bookId);
    const likeStatus = bookInstance.getLikeStatus(bookId);
    details.then(book=>this.setData({book}))
    comments.then(comments=>this.setData({comments}))
    likeStatus.then(likeStatus=>this.setData({likeStatus}))
  },

  onReady: function () {

  },

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