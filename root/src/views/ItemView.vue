<template>
  <div>
      Item!
      <section>
        <!-- 사용자 프로필 -->
        <user-profile :info="itemInfo">
          <!-- <div slot="username"> {{ itemInfo.user }} </div> -->
          <template v-slot:username>
            <router-link v-bind:to="`/user/${itemInfo.user}`" class="ask-title">{{ itemInfo.user }}</router-link>
          </template>
          <template v-slot:time>
             <div class="time">{{ itemInfo.time_ago }}</div>
          </template>
        </user-profile>
          <!-- <div class="user-container">
            <div>
              <i class="fas fa-user"></i>
            </div>
            <div class="user-description">
              <router-link v-bind:to="`/user/${itemInfo.user}`">{{ itemInfo.user }}</router-link>
              <div class="time">{{itemInfo.time_ago}}</div>
            </div>
          </div> -->
      </section>
      <section>
        <h2>{{ itemInfo.title }}</h2>
      </section>
      <section>
        <div v-html="itemInfo.content"></div>
      </section>
      <!-- https://vuejs.org/v2/api/#v-html -->
      <!-- https://vuejs.org/v2/guide/syntax.html#Raw-HTML -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import UserProfile from '../components/UserProfile.vue';
export default {
  components: { UserProfile },
  computed:{
    ...mapState({
      itemInfo: state => state.item
    })
  },
  created(){
    const itemID = this.$route.params.id;
    console.log(itemID)
    this.$store.dispatch('FETCH_ITEM', itemID)
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem ;
}
.fa-user {
  font-size: 2.5rem;
  color: rgb(184, 184, 184);
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>