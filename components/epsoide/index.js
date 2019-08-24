Component({
  properties: {
    index: {
      type: String,
      observer(newVal,oldVal){
        const val = newVal<10?"0"+newVal:newVal;
        this.setData({
          _index:val
        })
      }
    }
  },


  data: {
    months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
    year: new Date().getFullYear(),
    month:"",
    _index:""
  },
  attached(){
    const month = this.data.months[new Date().getMonth()];
    this.setData({
      month
    })
  },
  methods: {

  }
})
