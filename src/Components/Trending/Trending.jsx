import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { FidgetSpinner } from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function Trending() {
  function getTrends() {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/movie/day",
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmI4Njg5ZDViZjZmYjA1M2JmNmIyMzM3Nzk1ZDZhOCIsInN1YiI6IjY1ZGRjNWMxMjRiMzMzMDE0OWI2OWMwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Ou2Ez239wmG8Ky3SwHjpPF8ZpHebIaOWY1nDs77iBI",
      },
    };
    return axios.request(options);
  }
  let { isLoading, data } = useQuery("getTrends", getTrends);
  return (
  isLoading ? <div className="bg-color w-100 vh-100  d-flex justify-content-center align-items-center position-fixed top-0 bottom-0 z-3">
    <FidgetSpinner
  visible={true}
  height="80"
  width="80"
  ariaLabel="fidget-spinner-loading"
  wrapperStyle={{}}
  wrapperClass="fidget-spinner-wrapper"
  backgroundColor="#fff"
  ballColors={["red","red","red"]}
  />
  </div> :
   <div className="bg-color  mt-5 py-4">
     <div className="container">
    <h2 className="mt-2 text-light"> <span className='main-color'> Trends</span> </h2>
      <div className="row g-3 mt-1">
        {data?.data.results.map((e) => {
         return <div className="col-md-3 cursor-pointer" key={e.id}>
          <Link to={"/movie/"+e.id}>
            <img
              src={"https://image.tmdb.org/t/p/w500"+e.poster_path}
              className="w-100"
              alt=""
            />
            </Link>
          </div>;
        })}
      </div>
    </div>
   </div>
  );
}
