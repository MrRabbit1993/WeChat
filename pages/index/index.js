import Http from "./../../utils/http"
const $http = new Http();

Page({
  data: {
  },
  onLoad: function () {
   $http.request({
     url:'/classic/latest',
     success:(res)=>{console.log(res)}
   })
  }
})
