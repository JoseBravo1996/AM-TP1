const API_KEY = 'c5a7696be6754cf7960406383fedcb54';
const BASE_URL = 'https://newsapi.org/v2/top-headlines?country=ar&from=2022-09-26&sortBy=popularity&apiKey=' + API_KEY;;
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;

getMovies(BASE_URL);

function getMovies(url){
  fetch(url).then(res => res.json()).then(data =>{
    console.log(data.articles);
  });
}