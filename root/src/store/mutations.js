export default {
    SET_NEWS(state, newsData){
        state.news = newsData;
        // console.log(state.news);
    },
    SET_ASK(state, askData){
        state.askList = askData;
    },
    SET_JOBS(state, jobsData){
        state.jobs = jobsData;
    },
    SET_USER(state, userData){
        state.user = userData;
    },
    SET_ITEM(state, ItemData){
        state.item = ItemData;
        // console.log(state.item);
    }
    // SET_LIST(state, ListData){
    //     console.log('SET_LIST')
    //     state.list = ListData;
    //     console.log(state.list)
    // }
}