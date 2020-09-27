<template>
  <div class="home">
    <navigationColumn />
    <search 
    :wordToSearch="wordToSearch" />
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
    musicContainer,
  },
  data() {
    return {
      deezerData: "",
      word :"",
    };
  },
  methods: {
    wordToSearch(inputValue){
      this.word = inputValue;
    },
  },
};
</script>
<style lang="scss">
@import "../scss/main.scss";
.home {
  box-sizing: border-box;
  margin-left:84px;
  position: absolute;
  .container-info-music {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
  }
}
</style>