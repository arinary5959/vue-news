<template>
    <div>
        <!-- 사용자 프로필 -->
        <div class="user-container">
            <div>
                <i class="fas fa-user"></i>
            </div>
            <!-- <div class="user-description">
                <router-link v-bind:to="`/user/${itemInfo.user}`">{{ itemInfo.user }}</router-link>
                <div class="time">{{itemInfo.time_ago}}</div>
            </div>
            </div>
            <div class="item-content">
            <h2>{{ itemInfo.title }}</h2>
            <div v-html="itemInfo.content"></div>
            https://vuejs.org/v2/api/#v-html
            https://vuejs.org/v2/guide/syntax.html#Raw-HTML
            </div> -->
        <!-- <p>name: {{ userInfo.id }}</p>
        <p>karma: {{ userInfo.karma }}</p>
        <p>created: {{ userInfo.created }}</p>
        <p>content: {{ userInfo.about }}</p> -->

        <!-- userInfo를 props로 내려받아서 뿌려주는 방법 -->
        <!-- <template v-if="info.user">
            <p>name: 
                <router-link v-bind:to="`/user/${info.user}`">{{ info.user }}</router-link>
            </p>
            <p>created: {{info.time_ago}}</p>
        </template> -->
        <!-- <p>content: {{ info.about }}</p> -->
        <!-- <template v-else>
            <p>name: {{ info.id }}</p>
            <p>karma: {{ info.karma }}</p>
            <p>created: {{ info.created }}</p>
        </template> -->
        <!-- v-if="this.$routes.name=='item'" -->
            <div class="user-description">
                <!-- <div>username: {{ info.id }}</div> -->
                <slot name="username"></slot>
                <div class="time">
                    <!-- time: {{ info.created }} -->
                    <slot name="time"></slot>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props:{
        info: {},
    },
    // 컴포넌트 내에서 데이터를 다루는 방법, api를 여기서 호출하고 state에 저장후, 불러옴.(getters)
    // vue의 본래 취지에 맞추려면 props보다는 컴포넌트 내에서 처리. 표현되는 곳에서 데이터를 처리함
    // 사유가 있으면 props로 해도 무방. 필요에 의해 사용할 것!
    // computed:{
    //     ...mapGetters({
    //     userInfo: 'fetchUser'
    //     })
    //     // ...mapGetters(['fetchUser'])
    // },
    // created() {
    //     console.log(this.$route.params);
    //     const userName = this.$route.params.id;
    //     this.$store.dispatch('FETCH_USER', userName);
    // },
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