<template>
  <div class="home">
    <navigationColumn />
    <search />
    <informationBar/>
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
import informationBar from "@/components/InformationBar.vue";

export default {
  name: "Home",
  components: {
    navigationColumn,
    musicPlayer,
    Search,
    musicContainer,
    informationBar
  },
  data() {
    return {
      deezerData: ""
    };
  }
};
</script>
<style lang="scss">
@import "../scss/main.scss";
.home {
  box-sizing: border-box;
  margin-left:84px;
  position: absolute;
  .container-info-music {
    display: flex;
    flex-direction: row;
  }
}
</style>