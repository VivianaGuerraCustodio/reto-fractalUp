<template>
  <div>
    <navigationColumn />
    <search />
    <musicContainer/>
    <musicPlayer />
  </div>
</template>

<script>
// @ is an alias to /src

import navigationColumn from "@/components/NavigationColumn.vue";
import Search from "@/components/SearchText.vue";
import musicContainer from "@/components/MusicContainer.vue"
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
  },
  mounted() {

  }
};
</script>
