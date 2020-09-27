import axios from 'axios';
export const data = () => {
    let datosInArray = '';
    axios
        .get(
            "https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/436962/"
        )
        .then(res => {
            datosInArray = res.data.tracks.data;
            console.log(datosInArray);
            
        });
        return datosInArray;
}
export default axios;