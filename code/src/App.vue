<template>
  <div>
    <div style="height: 10%;">
      <Header />
    </div>
    <div v-if="showSelection" style="height: 90%;">
      <selection />
    </div>
    <div v-if="showClock" style="height: 50%;">
      <clock />
    </div>
  </div>
</template>

<script>
import selection from './components/selection.vue'
import Header from './components/Header.vue'
import jquery from 'jquery'

export default {
  components: {
    selection,
    clock: () => import('./components/clock.vue'),
    Header
  },
  data() {
    return {
      showSelection: true,
      showClock: false
    }
  },
  computed: {
    appMode() {
      return this.$store.state.mode
    }
  },
  watch: {
    appMode(value) {
      if (this.appMode === 'selection') {
        this.showClock = false
        this.showSelection = true
      }
      else if (this.appMode === 'clock') {
        this.showSelection = false
        this.showClock = true
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
</style>
