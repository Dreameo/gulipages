import request from '@/utils/request'

export default {
    // 1. 查询 前两条 banner数据
    getListBanner() {
        return request({
            url:`/educms/bannerfront/getAllBanner`,
            method:'get'
        })
    }
}