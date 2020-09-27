<template>
  <div class="nav-column">
    <div><img class="icon" src="../assets/foxbel-music@2x.png" /></div>
    <div class="nav-statements">
      <p class="bold">Mi librería</p>
      <p class="light">Recientes</p>
      <p class="light">Artistas</p>
      <p class="light">Álbums</p>
      <p class="light">Canciones</p>
      <p class="light">Estaciones</p>
      <p class="bold">Playlist</p>
      <p class="light">Metal</p>
      <p class="light">Para bailar</p>
      <p class="light">Rock 90's</p>
      <p class="light">Baladas</p>
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
  display: flex;
  flex-direction: column;
  bottom: 0%;
  left: 0%;
  right: 0%;
  top: 0%;
  width: 330px;
  .nav-statements {
    margin-left: 27px;
    p{
      margin: 2px 2px 0 2px;
    }
    .bold {
      margin-top:25px;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 27px;
      color: #ffffff;
    }
    .light {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      color: #ffffff;
    }
    p:hover {
      color: $play-color;
      padding-left: 26px;
      margin-left: -26px;
      border-left: 3px solid $play-color;
    }
  }

  .icon {
    height: 59px;
    width: 250px;
    left: 27px;
    top: 25px;
    padding:23px 0;
    position: relative;
  }
}
</style>