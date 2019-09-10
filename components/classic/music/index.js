import classicBeh from "./../behavior.js";
Component({
  behaviors: [classicBeh],
  properties: {
    src:{
      type: String,
    }
  },
  data: {
    pauseSrc: "images/player@pause.png",
    playSrc: "images/player@play.png"

  },
  methods: {

  }
})
