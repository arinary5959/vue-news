<template>
  <div>
      UserInfo!
      {{ this.$route.path}}
       <!-- {{ userInfo.about }} -->
      <user-profile :info="userInfo">
        <!-- <div slot="username">{{ userInfo.id }}</div> -->
       
        <template v-slot:username>{{ userInfo.id }}</template>
        <template v-slot:time>{{ 'joined: ' + userInfo.created }}</template>
        <template v-slot:karma>{{ userInfo.karma }}</template>
        <!-- <span slot="karma">{{ userInfo.karma }}</span> -->
        <!-- <template v-slot:about>
          <div v-html="userInfo.about"></div>
        </template> -->
      </user-profile>
      <!-- <div>{{ userData }}</div> -->
      <!-- <p>name: {{ userInfo.id }}</p>
      <p>karma: {{ userInfo.karma }}</p>
      <p>created: {{ userInfo.created }}</p>
      <p>content: {{ userInfo.about }}</p> -->
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import UserProfile from '../components/UserProfile.vue';
export default {
  computed:{
    // userInfo() {
    //   return this.$store.state.user;
    //   // <p>content: {{ userInfo.about }}</p>
    // },
    ...mapState({
      userInfo: state => state.user
    }),
    // ...mapGetters({
    //   userInfo: 'fetchUser'
    // })
    // ...mapGetters(['fetchUser'])
  },
  created() {
    const userName = this.$route.params.id;
    console.log(this.$route.params.id);
    this.$store.dispatch('FETCH_USER', userName);
  },
  components:{
    'user-profile': UserProfile,
  }
}
</script>

<style>

</style>