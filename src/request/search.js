// controlo a busca na API

const api = require('../../config/api.json')
const axios = require('axios');

const search = {
    getFilme: (filme) =>
        axios({
            method: "get",
            url: `${api.url}/search/movie?${api.key}&${api.language}&query=${filme}`,
            timeout: 4000,
        }),
};

module.exports = search;