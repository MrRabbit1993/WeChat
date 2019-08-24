import Http from "./../utils/http.js";
class ClassicModel extends Http {
    getLatest(cb) {
        this.request({
            url: '/classic/latest',
            success: (res) =>cb(res)
        })
    }
}
export default ClassicModel