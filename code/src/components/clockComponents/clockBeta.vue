<template>
    <div class="outer-circle">
        <div class="inner-circle two">
            <div class="fill two"></div>
        </div>
        <div class="inner-circle one">
            <div class="fill one"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.outer-circle {
  height: 30vh;
  width: 30vh;
  margin: 0 auto;
  background: green;
  border-radius: 50%;
}

.inner-circle {
  height: 100%;
  width: 50%;
  overflow: hidden;
  &.one {
    float: left;
    transform: rotate(10deg);
    transform-origin: right;
  }
  &.two {
    float: right;
    transform: rotate(0deg);
    transform-origin: left;
  }
}

.fill {
  height: 100%;
  width: 200%;
  overflow: hidden;
  border-radius: 50%;
  background: blue;
  &.two {
    position: relative;
    right: 100%;
  }
}
</style>