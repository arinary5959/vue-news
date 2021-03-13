// 하이오더컴포넌트
//  createListVIew (상위컴포넌트) - 하위컴포넌트 (news/ ask/ job)

import ListView from './ListView.vue'
// console.log(`ListView ${ListView}`)
// console.log(ListView)
export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name: name,
        created(){
            // this.$store.dispatch('FETCH_LIST', this.name)
            console.log( this.$route.name)
            this.emitter.emit('start:spinner');
            this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then( () => {
                console.log('fetched')
                this.emitter.emit('end:spinner');
            })
            .catch(error => {
                console.log(error)
            })
        },
        render(createElement) {
            // console.log('렌더')
            // console.log(createElement(ListView))
            return createElement(ListView)
        }
    }
}