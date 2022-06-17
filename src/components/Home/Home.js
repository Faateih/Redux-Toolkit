import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { APIKey } from "../../common/apis/movieApiKey";
import movieApi from "../../common/apis/movieApi";
import { addMovies } from "../../features/movies/movieSlice";
import { useDispatch } from "react-redux";
const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log(err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
