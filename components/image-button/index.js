// components/image-button/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    openType: {
      type: String
    }

  },
  options: {
    multipleSlots: true//开启插槽
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
    getUserInfo(event) {
      console.log(event)
      this.triggerEvent('getUserInfo', event.detail)
    }
  }
})
