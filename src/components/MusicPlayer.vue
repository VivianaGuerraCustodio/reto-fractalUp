<template>
  <div class="player cero">
    <div class="imgAlbum">
      <img :src="trackId.album.cover" alt="imagen del álbum" />
    </div>
    <div>
      <slot> <audio id="linkTrack" :src="trackId.link"/></slot>
    </div>
    <!--
<audio id="demo" src="audio.mp3"></audio>
<div>
  <button onclick="document.getElementById('demo').play()">Reproducir el Audio</button>
  <button onclick="document.getElementById('demo').pause()">Pausar el Audio</button>
  <button onclick="document.getElementById('demo').volume+=0.1">Aumentar el Volumen</button>
  <button onclick="document.getElementById('demo').volume-=0.1">Disminuir el Volumen</button>
</div>

    -->
    <button>
      <font-awesome-icon icon="step-backward" class="font-icon-back-next" />
    </button>
    <button @click.prevent="play" >
      <font-awesome-icon icon="play-circle" class="font-icon-play" />
    </button>
    <button>
      <font-awesome-icon icon="step-forward" class="font-icon-back-next" />
    </button>
    <div class="volumen-range">
      <input type="range" name="" id="" />
      <font-awesome-icon icon="volume-off" class="icon-volumen" />
    </div>
  </div>
</template>
<script>
export default {
  name: "musicPlayer",
  data() {
    return {
      trackId: ""
    };
  },
  created() {
    this.$bus.$on("trackLink", info => {
      this.trackId = info;
    });
  },
  methods: {
    play() {
      document.getElementById("demo").play();
    },
    stop() {
      document.getElementById("demo").pause();
    }
  }
};
</script>
<style lang="scss">
@import "../scss/main.scss";
.icon-volumen {
  color: #ffffff;
  margin: auto;
  width: 18px;
  height: 42px;
  padding-left: 29px;
}

.imgAlbum {
  position: absolute;
  height: 90px;
  left: inherit;
}

.volumen-range {
  display: inline-flex;
  position: relative;
  left: 23%;
}
.cero {
  bottom: 0%;
  left: 0%;
  right: 0%;
}
.player {
  display: flex;
  align-items: center;
  position: fixed;
  height: 90px;
  justify-content: center;
  background-color: $play-color;
  button {
    cursor: pointer;
    flex-direction: column;
    border: none;
    outline: none;
    background: none;
  }
  .font-icon-back-next {
    color: #ffffff;
    width: 25px;
  }

  .font-icon-play {
    color: $light-red;
    width: 50px;
    height: 60px;
  }
}
</style>