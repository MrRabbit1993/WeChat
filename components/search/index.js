import KeywordModal from "./../../models/keyword.js"
import BookModal from "./../../models/book"
const keywordInstance = new KeywordModal();
const bookInstance = new BookModal();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords: [],
    hotWords: [],
    books: [],
    searching: false,
    searchVal:""
  },
  attached() {
    wx.showLoading();
    const hotWord = keywordInstance.getHot();
    this.setData({
      historyWords: keywordInstance.getHistory()
    })
    hotWord.then(_ => {
      this.setData({
        hotWords: _.hot
      })
      wx.hideLoading();
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    cancelFun() {
      this.triggerEvent('cancel', {})
    },
    onDelete(event) {
      this.setData({
        searching: false,
        searchVal:""
      });
    },
    onConfirm(event) {
      const word = event.detail.value||event.detail.text;
      this.setData({
        searching: true,
        searchVal:word
      });
      bookInstance.search(0, word).then(_ => {
        this.setData({
          books: _.books
        })
        keywordInstance.addTohistory(word);
      })
    }
  }
})
