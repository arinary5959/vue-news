import axios from 'axios'
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};
//  2. API 함수들을 정리
function fetchNewsList(){
    return axios.get(`${config.baseUrl}news/1.json`)
        // .then(response => {
        // console.log(response)
        // // console.log(this.users)
        // // this.users = response.data; 
        // // console.log(this.users[0]);  
        // })
        // .catch(error => console.log(error))
};
function fetchJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`)
        // .then(response => {
        // // this.users = JSON.stringify(response.data); 
        // console.log(response)
        // // console.log(this.users)
        // // this.users = response.data; 
        // // console.log(this.users[0]);  
        // })
        // .catch(error => console.log(error))
};
function fetchAsksList(){
    return axios.get(`${config.baseUrl}ask/1.json`)
        // .then(response => {
        // // this.users = JSON.stringify(response.data); 
        // console.log(response)
        // // console.log(this.users)
        // // this.users = response.data; 
        // // console.log(this.users[0]);  
        // })
        // .catch(error => console.log(error))
};
function fetchUserInfo(userName) {
    console.log(userName)
    console.log(`${config.baseUrl}user/${userName}.json`);
    return axios.get(`${config.baseUrl}user/${userName}.json`);
};
function fetchItemList(itemID) {
    return axios.get(`${config.baseUrl}item/${itemID}.json`)
};
// 하이오더
function fetchList(pagename){
    // console.log(`${config.baseUrl}${pagename}/1.json`)
    return axios.get(`${config.baseUrl}${pagename}/1.json`)
};

export {
    fetchNewsList, fetchJobsList, fetchAsksList, fetchUserInfo, fetchItemList, fetchList
}
