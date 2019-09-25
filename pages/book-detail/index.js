import BookModal from "./../../models/book.js"
import LikeModel from "./../../models/like";
const bookInstance = new BookModal();
const likeInstance = new LikeModel();
Page({
  data: {
    comments: [],
    book: null,
    likeStatus: false,
    likeCount: 0,
    posting: false
  },
  onLoad: function (options) {
    const { bookId } = options;
    const details = bookInstance.getDetail(bookId);
    const comments = bookInstance.getComments(bookId);
    const likeStatus = bookInstance.getLikeStatus(bookId);
    details.then(book => this.setData({ book }))
    comments.then(comments => this.setData({ comments: comments.comments }))
    likeStatus.then(likeStatus => this.setData({ likeStatus }))
  },
  likeFun(obj) {
    const like_or_cancel = obj.detail.behavior;
    likeInstance.like(like_or_cancel, this.data.book.id, 400)
  },
  onTouch() {
    this.setData({
      posting: true
    })
  },
  cancelFun() {
    this.setData({
      posting: false
    })
  },
  onPost(event) {
    const txt = event.detail.text || event.detail.value;
    if (!txt) return
    if (txt.length > 12) {
      wx.showToast({
        title: '短评最多12个字',
        icon: 'none'
      });
      return
    }
    bookInstance.postComment(this.data.book.id, txt)
      .then(_ => {
        wx.showToast({
          title: '+1',
          icon: 'none'
        });
        this.data.comments.unshift({
          content: comment,
          nums: 1
        })
        this.setData({
          comments: this.data.comments,
          posting: false
        })
      })
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