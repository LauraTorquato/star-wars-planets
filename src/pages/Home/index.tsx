import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SearchBox from "../../components/SearchBox";
import "./styles.scss";
import Modal from "../../components/Modal";

const Home = () => {
  // const [people, setPeople] = useState([]);
  // const [planets, setPlanets] = useState([]);

  // useEffect(() => {
  //   async function fetchPeople() {
  //     let res = await fetch("https://swapi.dev/api/people/?format=json");
  //     let data: any = await res.json();
  //     setPeople(data?.results);
  //   }

  //   async function fetcPlanets() {
  //     let res = await fetch("https://swapi.dev/api/planets/?format=json");
  //     let data: any = await res.json();
  //     setPlanets(data?.results);
  //   }

  //   fetchPeople();
  //   fetcPlanets();
  // }, []);
  // console.log("OAOAOAOAOAOAOAOAOA", people);
  // console.log("1111111111111111111", planets);

  return (
    <div className="wrapper">
      <Header />
      <SearchBox />
      <Footer />
      {/* <Modal /> */}
    </div>
  );
};

export default Home;
