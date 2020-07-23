const extractMovieData = imdb => ({
    heading: imdb.Title,
    subTitle: `${imdb.Released} : ${imdb.Genre}`,
    imgUrl: imdb.Poster,
    callout: {
        plot: imdb.Plot, 
        awards: imdb.Awards, 
        actors: imdb.Actors
    },
    key: imdb.imdbID
});

export default extractMovieData;