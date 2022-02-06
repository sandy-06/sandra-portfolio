import React from 'react'
import coverImage from "../../assets/header-photo1.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Sandra Sanders</h1>
      <img src={coverImage} className="my-2" style={{ width: "80%" }} alt="cover" />
      <div className="my-2">
        <p>
         This is a representation of my projects since I started studying coding. The building of applications is completely engrossing. I have loved being able to bring my ideas to life.
      </p>
      </div>
    </section>
  )
}

export default About
