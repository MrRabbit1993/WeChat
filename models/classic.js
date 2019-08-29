import Http from "./../utils/http.js";
class ClassicModel extends Http {
    getLatest(cb) {
        this.request({
            url: 'classic/latest',
            success: (res) => {
                cb(res);
                console.log(res)
                this._setLastIdx(res.data.index)
            }
        })
    }
    getPrevious(index, cb) {
        this.request({
            url: `classic/${index}/previous`,
            success: (res) => cb(res)
        })
    }
    isFrist(idx) {
        return idx == 1 ? true : false
    }
    isLast(idx) {
        let lastIdx = this._getLastIdx("last");
        return idx == lastIdx ? true : false
    }
    _setLastIdx(idx) {
        wx.setStorageSync('last', idx);//同步写入缓存
    }
    _getLastIdx(key) {
        return wx.getStorageSync(key)
    }
}
export default ClassicModel