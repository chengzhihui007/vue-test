import Cookies from 'js-cookie'

const state = {
    // 用户名
    name: ''
}

const mutations = {
    setName: (state, data) => {
        console.log("state:"+state+"---data:"+data+"---------------")
        if(data){
            Cookies.set('userName', encodeURIComponent(data), {
                expires: 365
            })
        } else {
            Cookies.remove('userName')
        }

        state.username = data
    }
}

export default {
    namespaced: true,
    state,
    mutations
}
