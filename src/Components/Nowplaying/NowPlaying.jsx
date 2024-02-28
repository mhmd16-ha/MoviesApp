import React from 'react'
import Slider from "react-slick";
import { useQuery } from "react-query";
import axios from "axios";
import { FidgetSpinner } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

export default function NowPlaying() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        
      };
    async function getNowPlaying() {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/now_playing',
            params: {language: 'en-US', page: '1'},
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmI4Njg5ZDViZjZmYjA1M2JmNmIyMzM3Nzk1ZDZhOCIsInN1YiI6IjY1ZGRjNWMxMjRiMzMzMDE0OWI2OWMwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Ou2Ez239wmG8Ky3SwHjpPF8ZpHebIaOWY1nDs77iBI'
            }
          };
        return axios.request(options);
      }
      let { isLoading, data } = useQuery("getNowPlaying", getNowPlaying);
  return ( isLoading ? <div className="bg-color w-100 vh-100  d-flex justify-content-center align-items-center position-fixed top-0 bottom-0 z-3">
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
</div>:
   <div className='bg-color'>
     <div className='mx-5 pt-5'>
    <h2 className="mt-2 text-light">Know <span className='main-color'> Playing</span> </h2>
        <Slider {...settings} className='pt-5'>
     {data?.data.results.map((e)=>{
       return <div key={e.id} className='cursor-pointer'>
          <Link to={"/movie/"+e.id}>
            <img
              src={"https://image.tmdb.org/t/p/w500"+e.poster_path}
              className="w-100 px-2"
              alt=""
            />
            </Link>
        </div>
     })}
    </Slider>
    </div>
   </div>
  )
}
