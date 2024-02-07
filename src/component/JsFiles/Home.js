import React from "react";
import '../Style/Home.scss'
import vg from "../Assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import Contact from "./Contact";
import Services from "./Services";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Techitalk</h1>
          <p>Solutions of your Problem</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            She nervously peered over the edge. She understood in her mind that
            the view was supposed to be beautiful, but all she felt was fear.
            There had always been something about heights that disturbed her,
            and now she could feel the full force of this unease.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <main>
          <h1>Who we are?</h1>
          <p>
            Generating random paragraphs can be an excellent way for writers to
            get their creative flow going at the beginning of the day. The
            writer has no idea what topic the random paragraph will be about
            when it appears. This forces the writer to use creativity to
            complete one of three common writing challenges. The writer can use
            the paragraph as the first one of a short story and build upon it. A
            second option is to use the random paragraph somewhere in a short
            story they create. The third option is to have the random paragraph
            be the ending paragraph in a short story. No matter which of these
            challenges is undertaken, the writer is forced to use creativity to
            incorporate the paragraph into their writing.
          </p>
        </main>
      </div>
      <div className="home4" id="brand">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay:"0.1s"}}>
              <AiFillGoogleCircle />
              <p>google</p>
            </div>
            <div  style={{animationDelay:"0.3s"}}>
              <AiFillAmazonCircle />
              <p>amazon</p>
            </div>
            <div  style={{animationDelay:"0.5s"}}>
              <AiFillInstagram />
              <p>instagram</p>
            </div>
            <div  style={{animationDelay:"0.7s"}}>
              <AiFillYoutube />
              <p>youtube</p>
            </div>
          </article>
        </div>
      </div>
      <div className="home5" id="contact">
        <Contact/>
      </div>
      <div className="home6" id="services">
        <Services/>
      </div>
    </>
  );
};

export default Home;
