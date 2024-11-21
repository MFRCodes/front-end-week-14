const movieNames = ["Goodfellas", "Beauty and the Beast"]  
// movieNames is the name of the Array. "Movie" and "MovieList" are their own components.



export default function MovieList() {
    return (
        <div>
            {movieNames.map((movie, index) => (
                <div key={index}>{movie}</div>
            ))}
        </div>
    )
}

// MovieList is declared as a function. JSX is provided with the return statement and it shows the way the code will be displayed. 
// The .map method goes over the array known as "movieNames" and each object it holds will display each included element.