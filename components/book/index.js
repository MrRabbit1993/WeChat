// components/book/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book: {
      type: Object,
      default: () => { }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapFun(){
      const bookId = this.properties.book.id;
      wx.navigateTo({
        url: `/pages/book-detail/index?bookId=${bookId}`
      });
    }
  }
})
