import React from "react";
import profile from "../images/profile.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <div id="about" className="about-me-container">
      <h2>About Me</h2>
      <div className="profile-container">
        <img className="profile-image" src={profile} alt="Profile" />
        <div className="profile-intro">
          <h3>Hi, I'm Scott!</h3>
          <p>
            I recently graduated from AUT with a bachelor's degree in software
            development. During my time at AUT, I gained extensive knowledge of
            modern JavaScript and React. I am currently expanding my skillset by
            learning Node.js and other backend technologies. Although I do not
            have any professional working experience yet, I have developed
            several projects on my own and worked with team members on group
            projects. I enjoy collaborating with others and am always willing to
            listen and communicate effectively. Outside of coding, I enjoy
            spending my free time gaming, and I hope to one day become an indie
            game developer. Thanks for taking the time to get to know me a
            little better.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
