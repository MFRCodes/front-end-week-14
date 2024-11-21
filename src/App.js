
import Movie from "./Movie"
import MovieList from "./MovieList"
import Review from "./Review"
import ReviewForm from "./ReviewForm"
import ReviewList from "./ReviewList"
import Stars from "./Stars"
import "./App.css"


export default function App() {
  return (
    <div>
      <Movie/>
      <MovieList/>
      <Review/>
      <ReviewForm/>
      <ReviewList/>
      <Stars/>
      </div>
  )
}


// This assignment was the most challenging of all. It's incomplete but,I've spent the last 4 months trying to figure it out. I'd rather submit what I do understand and move on. 
// Lines 2-22 create a react app. Each component is imported specifically on lines 2-8. On lines 11-22, the component known as "App", returns JSX
// which is a JavaScript extension. Inside of it is a "div" which renders all the other components. Line 11 makes the component known as "App" flexible in that
// it's possible to be used elsewhere in the code. 


























