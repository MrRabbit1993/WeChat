import Http from "./../utils/http.js";
class LikeModel extends Http {
    like(typeStatus, artID, type) {
        const url = typeStatus == "like" ? "like" : "like/cancel";
        this.request({
            url,
            method: "POST",
            data: {
                arc_id: artID,
                type
            }
        })
    }
    getLikeStatus(artID,type,cb){
        this.request({
            url:`classic/${type}/${artID}/favor`,
            success:(res)=>cb(res)
        })
    }
}
export default LikeModel