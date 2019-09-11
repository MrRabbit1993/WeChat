import { config } from "./../config"
const tips = {
    1: "出现一个错误",
    1005: "appkey无效",
    3000: "期刊不存在"
}
class Http {
    request(params) {
        params.method = params.method ? "GET" : params.method;
        wx.request({
            url: config.baseUel + params.url,
            method: params.method,
            header: {
                appKey: config.appKey
            },
            success: (res) => {
                params.success && params.success(res)
            }

        })
    }
    _show_error(error_code) {
        error_code = !error_code ? 1 : error_code;
        const tip = tips[error_code];
        wx.showToast({
            title: tip ? tip : tips[1],
            icon: 'none',
            duration: 1500
        });
    }
}
export default Http