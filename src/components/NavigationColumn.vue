<template>
  <div class="nav-column">
    <div><img class="icon" src="../assets/foxbel-music@2x.png" /></div>
    <div class="nav-statements">
      <p class="bold">Mi librería</p>
      <p>Recientes</p>
      <p>Artistas</p>
      <p>Álbums</p>
      <p>Canciones</p>
      <p>Estaciones</p>
      <p class="bold">Playlist</p>
      <p>Metal</p>
      <p>Para bailar</p>
      <p>Rock 90's</p>
      <p>Baladas</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "navigationColumn"
};
</script>
<style lang="scss">
@import "../scss/main.scss";

.nav-column {
  background-color: $dark-Red-Secondary;
  position: fixed;
  
  bottom: 0%;
  left: 0%;
  right: 0%;
  top:0%;
  width: 232px;
  .nav-statements {
    margin-left: 10px;
    font-family: Quicksand;
    font-style: normal;
    font-size: 12px;
    color: #ffffff;
    p{
      height: 10px;
      margin-left:20px;
    }
    p:hover{
      color: $play-color;
      padding-left: 26px;
      margin-left:-9px;
      border-left: 3px solid $play-color;
    }
  }
  .bold {
    font-weight: bold;
    font-size: 14px;
    padding-top: 15px;
  }
  .icon {
    height: 43px;
    width: 170px;
    left: 27px;
    top: 25px;
    position: relative;
  }
}
</style>