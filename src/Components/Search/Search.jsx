import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FidgetSpinner } from "react-loader-spinner";

export default function Search() {
  let [data, setData] = useState("");
  let [isLoading,setLoading]=useState(false)
  async function search(e) {
    setLoading(true)
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmI4Njg5ZDViZjZmYjA1M2JmNmIyMzM3Nzk1ZDZhOCIsInN1YiI6IjY1ZGRjNWMxMjRiMzMzMDE0OWI2OWMwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Ou2Ez239wmG8Ky3SwHjpPF8ZpHebIaOWY1nDs77iBI",
      },
    };

    let data = await axios
      .request(
        `https://api.themoviedb.org/3/search/movie?query=${e.target.value}%20&include_adult=false&language=en-US&page=1`,
        options
      )
      .catch(() => {setLoading(false) });
    setData(data);
    setLoading(false)
  }
  return (
    <div className="min-vh-100 bg-color pt-5 mt-5">
      <div className="container">
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onKeyUp={(e) => search(e)}
          />
        </form>
        <h2 className="mt-2 text-light">
          <span className="main-color"> Search</span>
        </h2>
        {isLoading ? (
          <div className="bg-color w-100  d-flex justify-content-center align-items-center  z-3">
            <FidgetSpinner
              visible={true}
              height="80"
              width="80"
              ariaLabel="fidget-spinner-loading"
              wrapperStyle={{}}
              wrapperClass="fidget-spinner-wrapper"
              backgroundColor="#fff"
              ballColors={["red", "red", "red"]}
            />
          </div>
        ) : (
          data?.data?.results.length !=0 ?
          <div className="row g-3 mt-1">
            {data?.data?.results.map((e) => {
              return (
                <div className="col-md-3 cursor-pointer" key={e.id}>
                  <Link to={"/movie/" + e.id}>
                    <img
                      src={"https://image.tmdb.org/t/p/w500" + e.poster_path}
                      className="w-100"
                      alt=""
                    />
                  </Link>
                </div>
              );
            })}
          </div>: <div className="min-vh-100 bg-color d-flex justify-content-center align-items-center">
      <p className="main-color">No Movie</p>
    </div>
        )}
      </div>
    </div>
   
  );
}
