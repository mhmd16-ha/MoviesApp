import React, { useEffect } from "react";
import styles from "./Home.module.css";
import TopRated from "../TopRated/TopRated";
import NowPlaying from "../Nowplaying/NowPlaying";
import Populer from "../Populer/Populer";
import { FidgetSpinner} from 'react-loader-spinner'
import { Link } from "react-router-dom";
export default function Home() {
 
  return (
   <>
   <div className={"vh100 "+styles.home} >
      <div className="container d-flex justify-content-center flex-column vh-100 ">
        <h2 className="display-4 fw-semibold text-white">
          Your GateWay to <span className={styles.maincolor}>
            Cinematic
          </span>{" "}
          Adventures .
        </h2>
        <p className="text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          <br /> Dicta sapiente consequuntur voluptates ut! Aperiam assumenda
          quae,
          <br /> modi omnis quam ab aspernatur minus fuga cumque vitae non ex
          cupiditate eum quas.
        </p>
        <Link className={styles.btn} to='trends'>
          <i className="fa-solid fa-play"></i> Watch now
        </Link>
      </div>
    </div>
    <TopRated/>
    <NowPlaying/>
    <Populer/>
    </>
  );
}
