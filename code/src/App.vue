<template>
  <div class="app">
    <selection
    v-if="showSelection"
    />
    <clock
    v-if="showClock"
    />
  </div>
</template>

<script>
import selection from './components/selection.vue'
import clock from './components/clock.vue'

export default {
  components: {
    selection,
    clock
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
}

.app {

}
</style>
