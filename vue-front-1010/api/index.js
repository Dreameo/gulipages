import request from "@/utils/request"

export default {

    // 查询热门课程和热门教师
    getHotTeacherCourse() {
        return request({
            url: `/eduservice/indexfront/index`,
            method:'get'
        })
    }
}