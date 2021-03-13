<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="ask-list">
      <li v-for="item in askList" class="post">
        <div class="points">{{ item.points }}</div>
        <div>
          <p class="ask-title">
            <router-link v-bind:to="`/item/${item.id}`" class="ask-title">{{ item.title }}</router-link>
          </p>
          <small class="link-text">by
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">
              <small>{{ item.user }}</small>
            </router-link>
          </small>
          <small class="link-text time-ago">{{ item.time_ago }}</small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import ListItem from '../components/ListItem.vue'
export default {
  computed: {
    // 1
    // ask(){
    //   return this.$store.state.ask
    // }
    // 2
    // ...mapState({
    //   // state를 넘겨주고 state의 asklist의 값을 computed의 asklist에 담아줌
    //   askList: state => state.askList
    // })
    // 3
    ...mapGetters({
      askList: 'fetchAsk'
    })
    // 4 배열정리. 바로 fetchAsk를 가져와서 그대로 쓰는 법.
    // ...mapGetters([
    //   'fetchAsk',
    // ])
    // <dir v-for="item in fetchAsk">{{ item.title }}</dir>
  },
  created(){
    this.emitter.emit('start:spinner');
    this.$store.dispatch('FETCH_ASK')
      .then( () => {
        console.log('fetched')
        this.emitter.emit('end:spinner');
      })
      .catch(error => {
        console.log(error)
      })
    //           setTimeout(()=>{
    //   this.$store.dispatch('FETCH_ASK')
    //   .then( () => {
    //     console.log('fetched')
    //     this.emitter.emit('end:spinner');
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // }, 2000);
  },
  components:{
    'list-item': ListItem,
  }
}
</script>

<style scoped>
/* .ask-list{
  margin: 0;
  padding: 0;
}
.post {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#42b883;
}
.ask-title {
  margin: 0;
}
.link-text {
  color: #828282
}
.time-ago{
  margin-left: 8px;
  font-size: 12px;
} */
</style>