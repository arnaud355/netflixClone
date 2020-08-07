import axios from 'axios';

/** base url to make requests to the movie database */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});
//On ne peut avoir qu'un seul export default
export default instance;