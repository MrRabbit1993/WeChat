const paginationBev = Behavior({
    data: {
        books: [],
        total: 0
    },
    methods: {
        setMoreData(dataArr) {
            const tempArr = this.data.books.concat(dataArr);
            this.setData({
                books: tempArr
            })
        },
        getCurrentStart() {
            return this.data.books.length
        },
        setTotal(total) {
            this.setData({
                total
            })
        },
        hasMore() {
            if (this.data.books.length >= this.data.total) {
                return false
            } else {
                return true
            }
        },
        initData(){
            this.setData({
                books: [],
                total: 0
            })
        }
    }
})
export default paginationBev;