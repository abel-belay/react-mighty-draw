import styles from "./LandingPage.module.css";
import Intro from "../Intro/Intro";
import FeatureList from "../FeatureList/FeatureList";
import FullShowcase from "../FullShowcase/FullShowcase";
import Feature from "../Feature/Feature";
import FixedButton from "../FixedButton/FixedButton";

const LandingPage = () => {
  const drawFeatureData = {
    imageRight: false,
    name: "Draw Your Way",
    description: "With Mighty Draw, you’re in control of ???",
    image: require("../../assets/drawing-demo.gif").default
  }

  const pencilEraserShowcaseData = {
    name: "Pencil & Eraser",
    description: "The classics. The pencil and eraser are always avaiable at the bottom left whenever you need them.",
    image: require("../../assets/pencil-eraser.gif").default
  }

  const zenModeShowcaseData = {
    name: "Introducing Zen Mode",
    description: "Now, even the header and footer can be put away, leaving nothing between you and your canvas. Nice.",
    image: require("../../assets/zen-mode.gif").default
  }

  const devData = {
    imageRight: true,
    name: "Hi, I'm Abel",
    description: "I'm a self-taught web developer with a focus on React and MERN Stack. Feel free to check out my Github or Linkedin. And thank you for visiting my web app.",
    image: require("../../assets/dev.gif").default
  }

  const body = document.body;
  body.style.overscrollBehavior = "auto";
  return (
    <div className={styles.page}>
      <Intro />
      <Feature id="features" feature={drawFeatureData}/>
      <FullShowcase feature={pencilEraserShowcaseData} />
      <FeatureList />
      <FullShowcase feature={zenModeShowcaseData} />
      <Feature id="dev" feature={devData}/>
      <FixedButton />
    </div>
  );
};

export default LandingPage;
