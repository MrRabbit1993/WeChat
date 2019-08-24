Component({
  properties: {
    like: {
      type: Boolean
    },
    count: {
      type: Number
    }
  },
  data: {
    ckeckUrl: "images/like.png",
    notCkeckUrl: "images/like@dis.png"
  },
  methods: {
    _touch() {
      let like = this.properties.like;
      let count = this.properties.count;
      count = like ? --count : ++count;
      this.setData({
        like: !like,
        count
      })
      const behavior = this.properties.like ? "like" : "cancel";
      this.triggerEvent("behavior", {
        behavior
      })
    }
  }
})
