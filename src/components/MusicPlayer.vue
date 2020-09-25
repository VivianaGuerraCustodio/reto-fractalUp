<template>
  <div class="player cero"></div>
</template>
<script>
export default {
  name: "musicPlayer"
};
</script>
<style lang="scss">
@import "../scss/main.scss";
.cero {
  bottom: 0%;
  left: 0%;
  right: 0%;
}
.player {
  display: -webkit-box;
  height: 90px;
  background-color: $play-color;
}
</style>