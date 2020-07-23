import movieConfig from './config.json';

export const fetchMovies = searchString => {
    const ImdbIdRegex = /^tt[0-9]{1,7}$/;
    const isImdbId = searchString.match(ImdbIdRegex);
    const searchParam = isImdbId ? movieConfig.ImdbIdSearch : movieConfig.TitleSearch;
    const searchUrl = `${movieConfig.OmdbUrl}?apikey=${movieConfig.ApiKey}&${searchParam}=${searchString}`;
    return fetch(searchUrl)
            .then(response => response.json());
};
