<template>
  <div class="song-selected">
    <div class="img-info">
      <img class="artist-album-img" src="" />
    </div>
    <div>
      <p>
        Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum
      </p>
      <div class="buttons">
        <input type="button" value="Reproducir" />
        <input type="button" value="Seguir" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "informationBar"
};
</script>
<style lang="scss">
.song-selected {
  margin: 43px 20px 13px 272px;
  display: flex;
}
.artist-album-img {
  width: 250px;
  height: 250px;
}
.buttons {
  display: flex;
  justify-content: center;
  width: 100vh;
}
input[type="button"]:nth-child(1) {
  cursor: pointer;
  margin: 8px 20px;
  background-color: #e86060;
  color: #ffffff;
  width: 117px;
  height: 31px;
  border-style: none;
  border-radius: 100px;
}
input[type="button"]:nth-child(2) {
  cursor: pointer;
  margin: 8px 20px;
  background-color: #ffffff;
  color: #e86060;
  width: 117px;
  height: 31px;
  border: 1px solid #eb5757;
  border-radius: 100px;
}
</style>