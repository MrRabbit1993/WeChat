import { config } from "./../config"
class Http {
    request(params) {
        params.method = params.method ? "GET" : params.method;
        wx.request({
            url: config.baseUel+params.url,
            method: params.method,
            header: {
                appKey: config.appKey
            },
            success:(res)=>{
                params.success&&params.success(res)
            }

        })
    }
}
export default Http