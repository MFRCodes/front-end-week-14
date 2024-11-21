import "./App.css"

const movieDetails = [
    {
      id: 1,
      title: "Goodfellas",
      photo: <img src="https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_.jpg" alt="Three men appear serious by folding their arms in front of them"/>,
      summary: "A group of mob friends decide to organize a heist. It turns out to be one of the biggest heists in NY history. As law enforcement agencies hunt down the perpetrators, paranoia grows amongst the group, and members take extreme measures to avoid prosecution",
      stars: 5,
      review: []
    },
    {
      id: 2,
      title: "Beauty and The Beast",
      photo: <img src="https://resizing.flixster.com/hxGLPPMf0SVNNNnWRsA4zTyk_As=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Q1OWQzMzQ0LWY0YTgtNGI1ZS05NjRlLTk5NWMwMjVhYjQ0Yy53ZWJw" alt="A young woman and a beast look lovingly at each other"/>,
      summary: "A man is turned into a beast as punishment for being mean to others. He must learn to become a decent soul by a certain amount of time or else, he'll remain a beast forever",
      stars: 5,
      review: []
    }
  ];

//   On line 1, the CSS file specifically for the App is imported. On lines 3-20, an array known as "movieDetails" is declared and it's broken 
// down into several objects. Said objects have different properties or attributes about diffecrent aspects of the movies. For example: "id", "title", etc.


export default function Movie() {
    return (
        <div className="App">
            <div className="App-logo">
                <div className="App-header">
            {movieDetails.map(movie => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                       <div className="App-photo"> {movie.photo} </div>
                    <p>summary: {movie.summary}</p>
                    <p>stars: {movie.stars}</p>
                    <p>review: {movie.review}</p>
                </div>
            ))}
            </div>
            </div>
        </div>
    );
}

// On line 26, a component known as "Movie" is declared and will be used in other areas of the app. JSX is provided with the return statement and it
// has div elements such as "App", "App-logo", and "App-header" which will help with the styling of the App.css page. The .map method, goes over the array known 
// as "movieDetails" and each object inside of it will render each listed element. 