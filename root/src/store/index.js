import { createStore } from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
// console.log(createStore)
export const store = createStore({
    state: {
        news: [],
        askList: [],
        jobs:[],
        user:{},
        item:{},
        // list:[],
    },
    getters: {
        fetchAsk(state){
            return state.askList;
        },
        fetchUser(state){
            return state.user;
        },
        fetchNews(state){
            return state.news;
        },
    },
    mutations,
    actions
  })