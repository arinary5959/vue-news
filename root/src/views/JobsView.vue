<template>
  <div class="jobs">
    <list-item></list-item>
    <!-- <ul class="jobs-list">
      <li v-for="item in this.$store.state.jobs" class="post">
        <div class="type">{{ item.type }}</div>
        <div>
          <p class="jobs-title">
            <a v-bind:href="item.url">{{ item.title }}</a>
          </p>
          <small class="link-text">{{ item.domain }}</small>
          <small class="link-text time-ago">{{ item.time_ago }}</small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
export default {
  created() {
    this.emitter.emit('start:spinner');
    this.$store.dispatch('FETCH_JOBS')
      .then( () => {
        console.log('fetched')
        this.emitter.emit('end:spinner');
      })
      .catch(error => {
        console.log(error)
      })
    //     setTimeout(()=>{
    //   this.$store.dispatch('FETCH_JOBS')
    //   .then( () => {
    //     console.log('fetched')
    //     this.emitter.emit('end:spinner');
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // }, 2000);
  },
  components: {
    'list-item': ListItem,
  }
}
</script>

<style>
.jobs-list{
  margin: 0;
  padding: 0;
}
.post {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.type{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#42b883; 
}
.jobs-title {
  margin: 0;
}
.link-text {
  color: #828282
}
.time-ago {
  margin-left: 8px;
  font-size: 12px;
}
</style>