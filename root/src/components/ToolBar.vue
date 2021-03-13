<template>
    <header>
        <router-link to="/news">News</router-link> |
        <router-link to="/ask">Ask</router-link> |
        <router-link to="/jobs">Jobs</router-link>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
    header{
        /* border:1px solid green; */
        background-color: #42b883;
        color:white;
        padding: 8px;
    }
    header a{
        color:white;
        /* text-decoration: none; */
        font-weight: 600;
    }
    header a:hover{
        text-decoration: underline;
    }
    .router-link-exact-active{
        color: #35495e;
    }
</style>