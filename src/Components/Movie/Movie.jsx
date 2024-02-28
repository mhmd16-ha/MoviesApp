import axios from 'axios';
import React from 'react'
import { FidgetSpinner } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

export default function Movie() {
  function getDetails(_id){
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmI4Njg5ZDViZjZmYjA1M2JmNmIyMzM3Nzk1ZDZhOCIsInN1YiI6IjY1ZGRjNWMxMjRiMzMzMDE0OWI2OWMwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Ou2Ez239wmG8Ky3SwHjpPF8ZpHebIaOWY1nDs77iBI'
      }
    };
   return axios.request(`https://api.themoviedb.org/3/movie/${_id.queryKey[1]}?language=en-US`, options)
  }
  let id=useParams()
 let {data ,isLoading}=useQuery(["getDetails",id.id],getDetails)
  
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
</div> :
    <div className='bg-color min-vh-100'>
      <div className='container mt-5 py-5 d-flex justify-content-center flex-column align-items-center'>
      <div className='row'>
        <div className='col-md-6'>
          <img src={'https://image.tmdb.org/t/p/w500'+data?.data.backdrop_path} className='w-100'/>
        </div>
        <div className='col-md-6'>
    <h2 className="mt-2 text-light"><span className='main-color'>{data?.data.title}</span> ({data?.data.release_date})</h2>
    <h3 className='text-light mt-2'>Genres</h3>
    {data?.data.genres.map((g)=>{
     return <h3 className='text-success d-inline'>{g.name} </h3>
    })}
    <h3 className='text-light mt-2'>Overview</h3>
    <p className='text-light'>{data?.data.overview}</p>
        </div>
      </div>
      <Link className='bg-main-color text-light text-decoration-none btn btn-success mt-3' target='_blank' to={data?.data.homepage} >Watch it</Link>
      </div>
    </div>
  )
}
