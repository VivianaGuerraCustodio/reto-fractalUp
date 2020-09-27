<template>
  <div class="home">
    <navigationColumn />
    <search />
    <div class="container-info-music">
      <musicContainer />
    </div>

    <musicPlayer />
  </div>
</template>

<script>
// @ is an alias to /src

import navigationColumn from "@/components/NavigationColumn.vue";
import Search from "@/components/SearchText.vue";
import musicContainer from "@/components/MusicContainer.vue";
import musicPlayer from "@/components/MusicPlayer.vue";

export default {
  name: "Home",
  components: {
    navigationColumn,
    musicPlayer,
    Search,
    musicContainer
  },
  data() {
    return {
      deezerData: ""
    };
  }
};
</script>
<style lang="scss">
.home {
  display: flex;
  flex-direction:column;
  box-sizing: border-box;
  .container-info-music {
    margin:auto auto auto 229px;
    background-color: aquamarine;
  }
}
</style>