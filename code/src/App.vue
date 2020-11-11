<template>
  <div class="appContainer" id="app">
    <div style="height: 7%;">
      <Header />
    </div>
    <div v-if="showSelection">
      <selection />
    </div>
    <div v-if="showClock" >
      <clock/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import selection from './components/selection.vue'

export default {
  components: {
    Header,
    selection,
    clock: () => import('./components/clock.vue') 
  },
  data() {
    return {
      showSelection: false,
      showClock: true
    }
  },
  computed: {
    appMode() {
        return this.$store.state.mode
      }
  },
  watch: {
    appMode() {
        if (this.appMode === 'clock') {
          this.showSelection = false
          this.showClock = true
        }
        else if (this.appMode === 'selection') {
          this.showClock = false
          this.showSelection = true
        }
      }
  }

}
</script>

<style lang="scss">
html,
body {
  background-color: $backgroundColor !important;
  height: 100%;
  width: 100%;
  margin: 0;
}

div {
  height: 100%;
  width: 100%;
}

a {
  color: black !important;
  &:hover {text-decoration: none !important;}
}

.appContainer {
  height: 85vh;
  width: 85vw;
  margin: auto;
  margin-top: 3%;
}
</style>
