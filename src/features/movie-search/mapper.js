const extractMovieData = imdb => ({
    heading: imdb.Title,
    subTitle: `${imdb.Released} : ${imdb.Genre}`,
    imgUrl: imdb.Poster,
    callout: `${imdb.Plot}

${imdb.Awards}

${imdb.Actors}`,
    key: imdb.imdbID
});

export default extractMovieData;