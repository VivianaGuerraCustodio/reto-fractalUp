<template>
  <div class="player cero">
    <button>
      <font-awesome-icon icon="step-backward" class="font-icon-back-next" />
    </button>
    <button>
      <font-awesome-icon icon="play-circle" class="font-icon-play" />
    </button>
    <button>
      <font-awesome-icon icon="step-forward" class="font-icon-back-next" />
    </button>
    <!--<div class="progress-bar">
      <font-awesome-icon>
      <button></button>
    </div>-->
  </div>
</template>
<script>
export default {
  name: "musicPlayer"
};
</script>
<style lang="scss">
@import "../scss/main.scss";
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
    width:25px;
  }

  .font-icon-play {
    color: $light-red;
    width: 50px;
    height: 60px;
  }

}
</style>