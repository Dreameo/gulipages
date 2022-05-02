import request from "@/utils/request"
import cookie from "js-cookie"

export default {

    // 登录
    login(loginInfo) {
        return request({
            url: `/eduucenter/ucentermember/login`,
            method:'post',
            data: loginInfo
        })
    },
    

    // 获取登陆用户信息
    getLoginUser() {
        return request({
            url: `/eduucenter/ucentermember/getUserInfo`,
            method:'get',
            // headers: {'token': cookie.get('guli_token')}
        })
        
    }
}