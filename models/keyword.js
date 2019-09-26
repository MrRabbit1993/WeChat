import Http from "./../utils/http-promise.js";
class KeywordModal extends Http {
    uniqKey = 'historyWord'
    maxLength = 10
    getHistory() {
        return wx.getStorageSync(this.uniqKey) || [];
    }
    getHot() {
        return this.request({
            url: "book/hot_keyword"
        })
    }
    addTohistory(key) {
        let word = this.getHistory();
        const has = word.includes(key);
        if (!has) {
            if (word.length >= this.maxLength) {
                word.pop()
            }
            word.unshift(key);
            wx.setStorageSync(this.uniqKey, word);
        }
    }
}
export default KeywordModal