import {  fetchNewsList, fetchJobsList, fetchAsksList, fetchUserInfo, fetchItemList } from '../api/index.js'// fetchList
// console.log(fetchUserInfo)
export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                // this.news = response.data
                // console.log(response)
                context.commit('SET_NEWS', response.data);
                return response
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_ASK(context){
        // context라는 객체정보를 주고 그 항목인 commit을 이용해서 state에 접근할 수 있다.
        fetchAsksList()
            .then(response => {
                context.commit('SET_ASK', response.data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_JOBS( { commit } ){
        fetchJobsList()
            .then( ({ data }) => {
                commit('SET_JOBS', data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_USER( { commit }, name ){
        fetchUserInfo(name)
            .then( ({ data }) => {
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_ITEM({ commit }, itemID){
        fetchItemList(itemID)
            .then( ({ data }) =>{
                commit('SET_ITEM', data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    // FETCH_LIST( { commit }, pageName){
    //     console.log('FETCH_LIST')
    //     fetchList(pageName)
    //         .then( ({ data }) => {
    //             console.log(pageName)
    //             commit('SET_LIST', data)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // },
}