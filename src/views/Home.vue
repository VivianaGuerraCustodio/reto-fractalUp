<template>
  <div>
    <navigationColumn />
    <search />
    <div>
      {{deezerData}}
    </div>
    <musicPlayer />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import navigationColumn from "@/components/NavigationColumn.vue";
import Search from "@/components/SearchText.vue";
import musicPlayer from "@/components/MusicPlayer.vue";

export default {
  name: "Home",
  components: {
    navigationColumn,
    musicPlayer,
    Search
  },
  data(){
    return{
      deezerData:'',
    }
  },
  mounted(){
    axios.get('https://api.deezer.com/playlist/436962',{
     "method":"GET",
     "crossDomain":true,
      "headers":{
        'Access-Control-Allow-Origin' :"302f6ef7e8c5e170c1ac25dba98e867d",
        'vary': origin
      }
    })
    .then((res)=>{
      this.deezerData = res;
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
};
</script>
