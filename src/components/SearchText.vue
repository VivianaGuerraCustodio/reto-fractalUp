<template>
  <div>
    <div class="box-search">
      <input
        v-model="inputValue"
        class="input-search"
        type="text"
        name="Buscar"
        id="search"
        placeholder="Buscar"
      />
      <font-awesome-icon icon="search" class="font-icon" />
    </div>
    <div class="song-selected">
      <button class="font-play">
        <font-awesome-icon icon="play" id="play" />
      </button>
      <div class="img-info">
        <img
          class="artist-album-img"
          :src="trackId.album.cover_medium"
          alt="imagen del álbum"
        />
      </div>
      <div class="container-infoOfArtist">
        <div class="infoOfArtist">
          <p>{{ trackId.artist.name }}</p>
          <p>{{ trackId.title }}</p>
          <p>{{ trackId.album.title }}</p>
        </div>
        <div class="buttons">
          <input type="button" value="Reproducir" />
          <input type="button" value="Seguir" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Search",
  mounted() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/436962/search?q=this.inputValue"
      )
      .then(res => {
        this.deezerData = res;
      });
  },
  data() {
    return {
      trackId: "",
      deezerData: "",
      inputValue: "",
      wordFound: ""
    };
  },
  created() {
    this.$bus.$on("trackLink", info => {
      this.trackId = info;
    });
  }
};
</script>
<style lang="scss">
@import "../scss/main.scss";
.container-infoOfArtist {
  height: 250px;
  background-color: #c74e4e9a;
}
.infoOfArtist {
  box-sizing: border-box;
  padding: 5px 0 19px 24px;
}
.box-search {
  box-sizing: border-box;
  margin: auto;
  .input-search {
    border: 1px solid #828282;
    padding: 6px 42px;
    margin: 3px 270px;
    border-radius: 100px;

    height: 36px;
  }
  .font-icon {
    color: #828282;
    margin: 0 720px;
    left: -16em;
    position: absolute;
    padding: 18px 48px;
  }
}
</style>