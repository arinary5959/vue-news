<template>
 <div>
  <tool-bar></tool-bar>
  <transition name="fade">
    <router-view></router-view>
  </transition>
  <spinner :loading="loadingStatus"></spinner>
 </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import Spinner from './components/Spinner.vue'

export default {
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false
    }
  },
  methods:{
    startSpinner(){ 
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    console.dir(this.emitter)
    this.emitter.on('start:spinner', this.startSpinner )
    this.emitter.on('end:spinner', this.endSpinner )
  },
  beforeDestroy() {
     this.emitter.off('start:spinner', this.startSpinner )
     this.emitter.off('end:spinner', this.endSpinner )
  }
}
</script>

<style>
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
.router-link-exact-active {
  text-decoration: underline;
}
body{
  padding: 0;
  margin: 0;
}
.fade-enter-from, .fade-leave-to{
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ;
}
 
</style>
