import { createStore } from 'vuex'
import {  fetchNewsList, fetchJobsList, fetchAsksList } from '../api/index.js'
// console.log(createStore)
export const store = createStore({
    state: {
        news: [],
        askList: [],
        jobs:[]
    },
    getters: {
        fetchAsk(state){
            return state.askList
        }
    },
    mutations: {
      SET_NEWS(state, newsData){
          state.news = newsData;
          console.log(state.news);
      },
      SET_ASK(state, askData){
          state.askList = askData;
      },
      SET_JOBS(state, jobsData){
          state.jobs = jobsData;
      },
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then(response => {
                    // this.news = response.data
                    // console.log(response)
                    context.commit('SET_NEWS', response.data);
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
        }
    }
  })