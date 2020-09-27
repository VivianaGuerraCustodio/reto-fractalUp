<template>
  <div class="player-music">
    <div class="data-music" v-for="(info, index) in deezerData" :key="index">
      <img class="img-artist" :src="info.album.cover" />
      <p class="title-music">{{ info.title }}</p>
      <p class="artist-name">{{ info.artist.name }}</p>
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
      deezerData: ""
    };
  }
};
</script>
<style lang="scss">
@import "../scss/main.scss";
.player-music {
  box-sizing: border-box;
  padding-bottom: 82px;
  margin-left: 250px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .data-music {
    display: flex;
    flex-direction: column;
    padding: 0 14px;
    margin: 11px;
    width: 188px;
    box-sizing: border-box;
    .title-music {
      //styleName: 14-bold-qs;
      color: #555555;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: left;
      margin-top:7px;
      margin-bottom:1px;
    }
    .artist-name {
      //styleName: 12-regular-qs;
      color: #828282;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 15px;
      letter-spacing: 0em;
      text-align: left;
      margin-top:1px;
    }
    .img-artist {
      width: 160px;
      height: 160px;
    }
  }
}
</style>