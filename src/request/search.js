// controlo a busca na API

const api = require('../../config/api.json')
const axios = require('axios');

const search = {
    // getFilme - recebe como parametro a query de busca na API 
    getFilme: (filme) => {
        return axios({
            method: "get",
            url: `${api.url}/search/movie?${api.key}&${api.language}&query=${filme}`,
            timeout: 4000,
        })
    },

    // getPopular - esta requesição busca os filmes populares
    getTopFilmes: () =>{
        return axios({
            method: "get",
            url: `${api.url}/movie/popular?${api.key}&${api.language}&page=1`,
            timeout: 4000,
        });
    },

    getTopSeries: () =>{
        return axios({
            method: "get",
            url: `${api.url}/tv/top_rated?${api.key}&${api.language}&page=1`,
            timeout: 4000,
        });
    },
};

module.exports = search;