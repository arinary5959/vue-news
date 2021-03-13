<template>
  <div class="news">
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="item in fetchNews" class="post">
        <div class="points">{{ item.points }}</div>
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">{{ item.title }}</a>
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
import ListItem from '../components/ListItem.vue'
// import ListView from './ListView.vue'
// import { mapGetters } from 'vuex';
// import ListItem from '../components/ListItem.vue';
// console.log(this.emitter)
export default {
  // computed: {
  //   ...mapGetters(['fetchNews'])
  // },
  created() {
    this.emitter.emit('start:spinner');
    this.$store.dispatch('FETCH_NEWS')
      .then( () => {
        console.log('fetched')
        this.emitter.emit('end:spinner');
      })
      .catch(error => {
        console.log(error)
      })
      // 스피너 시연
    // setTimeout(()=>{
    //   this.$store.dispatch('FETCH_NEWS')
    //   .then( () => {
    //     console.log('fetched')
    //     this.emitter.emit('end:spinner');
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // }, 3000);
  },
  components: {
    'list-item': ListItem,
  }
}
</script>

<style scoped>
.news-list{
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
.news-title {
  margin: 0;
}
.link-text {
  color: #828282
}
.time-ago{
  margin-left: 8px;
  font-size: 12px;
}
</style>