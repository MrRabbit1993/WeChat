import KeywordModal from "./../../models/keyword.js"
import BookModal from "./../../models/book"
import paginationBev from "./../behavior/pagination.js"
const keywordInstance = new KeywordModal();
const bookInstance = new BookModal();
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [paginationBev],
  properties: {
    more: {
      type: String,
      observer: '_loadMore'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords: [],
    hotWords: [],
    // books: [],
    searching: false,
    searchVal: "",
    loading: false,
    loadingFlag: false,
    showEmpty: false
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
      this.initData();
      this.setData({ showEmpty: false })
      this.triggerEvent('cancel', {})
    },
    onDelete(event) {
      this.initData();
      this.setData({ showEmpty: false })
      this.setData({
        searching: false,
        searchVal: ""
      });
    },
    onConfirm(event) {
      const word = event.detail.value || event.detail.text;
      this.setData({
        searching: true,
        searchVal: word,
        loadingFlag: true
      });
      bookInstance.search(0, word).then(_ => {
        this.setMoreData(_.books);
        this.setTotal(_.total);
        keywordInstance.addTohistory(word);
        this.setData({
          loadingFlag: false
        })
        if (!this.data.books.length) {
          this.setData({ showEmpty: true })
        }
      })
    },
    _loadMore() {
      if (!this.data.searchVal) return
      if (this.data.loading) return
      if (this.hasMore()) {
        this.setData({ loading: true })
        bookInstance.search(this.getCurrentStart(), this.data.searchVal).then(_ => {
          this.setMoreData(_.books);
          this.setData({ loading: false })
        }, () => this.setData({ loading: false }))
      }
    }
  }
})
