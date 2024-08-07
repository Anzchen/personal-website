import React from "react";
import Loader from "../organisms/Loader";
import Header from "../organisms/Header";
import Projects from "../organisms/Projects";
import Footer from "../organisms/Footer";

const Home = () => {
  return (
    <div>
      <Loader />
      <Header />
      <section className="cover-img"></section>

      <section className="all-content">
        <div className="container home">
          <h1>anthony chen</h1>
          <p>
            I am an undergraduate student at Northeastern Khoury studying CS and
            Business Administration with a concentration in Finance. I am
            looking to meet new people and gain professional experience in
            software development and finance fields. Feel free to contact me!!
          </p>
        </div>
      </section>
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
