import { config } from "../config"
const tips = {
    1: "出现一个错误",
    1005: "appkey无效",
    3000: "期刊不存在"
}
class Http {
    request({ url, data = {}, method = "GET" }) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: config.baseUel + url,
                method,
                header: {
                    appKey: config.appKey
                },
                success: (res) => {
                    const code = res.statusCode.toString();
                    if (code.startsWith("2")) {
                        resolve(res.data)
                    } else {
                        this._show_error(1)
                        reject()
                    }
                },
                fail: (err) => { this._show_error(1); reject(err) }
            })
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