<template>
  <div>
    <div class="box-search">
      <input
        v-model="inputValue"
        v-on:keyup="wordToSearch(inputValue)"
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
        <img class="artist-album-img" src="" />
      </div>
      <div class="container-infoOfArtist">
        <div class="infoOfArtist">
          <p>nombre del artista</p>
          <p>palabra con enfasis</p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>
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
      inputValue: ""
    };
  },
  props: ["wordToSearch"]
};
/*
export const search = (this.deezerData, this.inputValue) => {
  const stringLower = this.inputValue.toLowerCase();
  const newArray = [];
  for( const index in )
  for (let i = 0; i < data.length; i++) {
    if (data[i].name.toLowerCase().startsWith(stringLower)) {
      newArray.push(data[i]);
    }
  }
  return newArray;
};
*/
</script>
<style lang="scss">
@import "../scss/main.scss";
.container-infoOfArtist {
  height: 250px;
  background-color:#c74e4e9a;
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