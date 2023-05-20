import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./SharedLayout/SharedLayout";
// import Home from "Pages/Home";
// import Movies from "Pages/Movies";
// import MovieDetails from "./MovieInfo/MovieDetails";
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";
const Home = lazy(() => import('Pages/Home'));
const Movies = lazy(() => import('Pages/Movies'));
const MovieDetails = lazy(() => import('./MovieInfo/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
