<template>
    <ul class="news-list">
      <li v-for="item in ListItems" class="post">
        <div class="points">{{ item.points || item.type }}</div>
        <div>
          <p class="news-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">{{ item.title }}</a>
            </template>
            <template v-else>
              <router-link v-bind:to="`/item/${item.id}`" class="ask-title">{{ item.title }}</router-link>
            </template>
          </p>
          <small class="link-text">by
            <router-link v-if="item.user" v-bind:to="`/user/${item.user}`" class="link-text">
              <small>{{ item.user }}</small>
            </router-link>
              <a v-else v-bind:href="item.url" class="link-text">{{ item.domain }}</a>
          </small>
          <small class="link-text time-ago">{{ item.time_ago }}</small>
        </div>
      </li>
    </ul>
</template>
<script>
// import { mapGetters, mapState } from 'vuex';
// console.log(this.$store.state.list)
// console.log(11111111111111)
export default {
    computed: {
      // ...mapGetters([`fetchNews`])
      ListItems(){
        // return this.$store.state.list;
        if(this.$route.name == 'news'){
          return this.$store.state.news;
        }else if(this.$route.name == 'ask'){
          return this.$store.state.askList;
        }else if(this.$route.name == 'jobs'){
          return this.$store.state.jobs;
        }
      }
    },
    // created() {
    //   if(this.$route.name == 'news'){
    //     this.$store.dispatch('FETCH_NEWS');
    //   }else if(this.$route.name == 'ask'){
    //     this.$store.dispatch('FETCH_ASK');
    //   }else if(this.$route.name == 'jobs'){
    //     this.$store.dispatch('FETCH_JOBS');
    //   }
    //   // this.$$store.dispatch(actionName)
    // },
}
</script>

<style>
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
  padding: 0;
}
.link-text {
  color: #828282
}
.time-ago{
  margin-left: 8px;
  font-size: 12px;
}
</style>