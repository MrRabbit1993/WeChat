import classicBeh from "./../behavior.js";
const musicManger = wx.getBackgroundAudioManager();
Component({
  behaviors: [classicBeh],
  properties: {
    src:{
      type: String
    },
    title:{
      type:String
    }
  },
  data: {
    playing:false,
    pauseSrc: "images/player@pause.png",
    playSrc: "images/player@play.png"

  },
  attached(ev){//开始
    console.log("开始");
    this._reStart();
    this._toggleControl();
  },
  detached(ev){//销毁
    console.log("销毁")
    // musicManger.stop();
  },
  methods: {
    onPlay(ev){
      this.setData({
        playing:!this.data.playing
      });
      if(this.data.playing){
        musicManger.src = this.properties.src;
        musicManger.title = this.properties.title
      }else{
        musicManger.pause();
      }
    },
    _reStart(){
      if(musicManger.paused){
        this.setData({ playing:false});
        return 
      }
      if(musicManger.src==this.properties.src){
        this.setData({ playing:true});
      }
    },
    _toggleControl(){
      musicManger.onPlay(()=>this._reStart());
      musicManger.onPause(()=>this._reStart());
      musicManger.onStop(()=>this._reStart());
      musicManger.onEnded(()=>this._reStart());
    }
  }
})
