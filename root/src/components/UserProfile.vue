<template>
    <div>
        <!-- 사용자 프로필 -->
        <div class="user-container">
            <div>
                <i class="fas fa-user"></i>
            </div>
            <div class="user-description">
                <slot name="username"></slot>
                <div class="time">
                    <slot name="time"></slot>
                </div>
                <div class="karma">
                    <slot name="karma"></slot>
                </div>
                <div class="about">
                    <slot name="about"></slot>
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
.time, .karma {
  font-size: 0.7rem;
}
</style>