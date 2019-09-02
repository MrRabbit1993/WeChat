import Http from "./../utils/http.js";
class ClassicModel extends Http {
    getLatest(cb) {
        this.request({
            url: 'classic/latest',
            success: (res) => {
                cb(res.data);
                const index = this._getKey(res.data.index);
                wx.setStorageSync(index, res.data);//缓存最新的期刊
                this._setLastIdx(res.data.index)
            }
        })
    }
    getClassic(index, type, cb) {
        let key = type == "next" ? this._getKey(index + 1) : this._getKey(index - 1);
        let classic = wx.getStorageSync(key);//从缓存里面寻找
        if (!classic) {
            this.request({
                url: `classic/${index}/${type}`,
                success: (res) => {
                    wx.setStorageSync(this._getKey(res.data.index), res.data);//写入缓存
                    cb(res.data)
                }
            })
        } else {
            cb(classic)
        }

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
    _getKey(idx) {
        let key = `classic-${idx}`;
        return key
    }
}
export default ClassicModel