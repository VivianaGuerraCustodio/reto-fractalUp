<template>
      <div>
      {{ deezerData }}
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
        "https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/436962",
        {
          method: "GET",
          crossDomain: true
        }
      )
      .then(res => {
        this.deezerData = res.data;
        console.log(res);
      });
  },
  data(){
      return{
          deezerData :'',
      }
  }
};
</script>
<style lang="scss">
</style>