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
    getDetail(bookId) {
        return this.request({
            url: `book/${bookId}/detail`
        })
    }
    getLikeStatus(bookId) {
        return this.request({
            url: `book/${bookId}/favor`
        })
    }
    getComments(bookId) {
        return this.request({
            url: `book/${bookId}/short_comment`
        })
    }
    postComment(bookId, comment) {
        return this.request({
            url: "book/add/short_comment",
            methods: "POST",
            data: {
                book_id: bookId,
                content: comment
            }
        })
    }
}
export default BookModal