import Http from "./../utils/http-promise.js";
class BookModal extends Http {
    getHootLis() {
        return this.request({
            url: "book/hot_list"
        })
    }
    getMyBookCount() {
        return this.request({
            url: "book/favor/count"
        })
    }
}
export default BookModal