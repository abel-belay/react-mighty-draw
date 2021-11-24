import styles from "./DevSection.module.css";

import githubLogoPNG from "../../assets/github-logo.png";
import linkedinLogoPNG from "../../assets/linkedin-logo.png";

const DevSection = () => {
  const feature = {
    imageRight: true,
    name: "Hi, I'm Abel",
    description:
      "I'm a self-taught web developer with a focus on React and MERN Stack. Feel free to check out my Github or Linkedin. And thank you for visiting my web app.",
    image: require("../../assets/dev.gif").default,
  };

  return (
    <section
      className={`${styles.feature} ${
        feature.imageRight ? styles.imageRight : styles.imageLeft
      }`}
    >
      <div>
        <img className={styles.image} src={feature.image} alt="GIF" />
      </div>
      <div>
        <div className={styles.content}>
          <h4>{feature.name}</h4>
          <p>{feature.description}</p>
          <div className={styles.links}>
            <a href="https://github.com/abel-belay/react-mighty-draw">
              <img src={githubLogoPNG} alt="GitHub logo." />
            </a>
            <a href="https://www.linkedin.com/in/abel-belay-ab5b50221">
              <img src={linkedinLogoPNG} alt="Linkedin logo." />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevSection;
