Component({

  properties: {
    title: {
      type: String
    },
    first: {
      type: Boolean
    },
    latest: {
      type: Boolean
    }

  },


  data: {
    disLeftSrc: "images/triangle.dis@left.png",
    leftSrc: "images/triangle@left.png",
    disRigheSrc: "images/triangle.dis@right.png",
    rightSrc: "images/triangle@right.png"
  },


  methods: {
    leftFn() {
      if (this.properties.latest) return
      this.triggerEvent("left", {})
    },
    rightFn() {
      if (this.properties.first) return
      this.triggerEvent("right", {})
    }
  }
})
