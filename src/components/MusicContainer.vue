<template>
  <div>
    <div class="info-music" v-for="(info, index) in deezerData" :key="index">
      <p>{{ info.artist.name }}</p>
      <p>{{ info.title }}</p>
      <img :src="info.album.cover" >
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "musicContainer",
  mounted() {
    axios
      //http://api.deezer.com/playlist/436962 utilice un dominio diferente para no tener problemas con el CORS de api deezer. https://developers.deezer.com/api
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/436962/"
      )
      .then(res => {
        this.deezerData = res.data.tracks.data;
        console.log(this.deezerData);
      });
  },
  data() {
    return {
      deezerData: "",
    };
  }
};
</script>
<style lang="scss">
.container-info-music {
  box-sizing: border-box;
  padding-bottom: 82px;
  margin-bottom: 0px;
  margin: auto auto auto 89px;
  .info-music {
    background-color: green;
    box-sizing: border-box;
  }
}
</style>