// components/tag/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true//开启插槽
  },
  externalClasses: ['tag-class'],
  properties: {
    text: {
      type: String,
      default: ""
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
    onTouch(event) {
      this.triggerEvent('tapping', {
        text: this.properties.text
      })
    }
  }
})
