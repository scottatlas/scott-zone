import "../styles/HeroSection.css";
import background from "../images/background.png";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <img src={background} alt="Hero" className="hero-image" />
      </div>
      <div className="hero-text-container">
        <h2>Welcome to My Website!</h2>
        <p>
          I'm Scott and I'm a frontend developer. Here you'll find a few of the
          projects I've worked on, including a forkify recipe app and a Mapty
          app for documenting your workouts. I'm always looking for new
          challenges and opportunities, so feel free to reach out to me via the
          Contact page. Thanks for visiting!
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
