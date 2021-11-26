import styles from "./LandingPage.module.css";
import Intro from "../Intro/Intro";
import FeatureList from "../FeatureList/FeatureList";
import FullShowcase from "../FullShowcase/FullShowcase";
import Feature from "../Feature/Feature";
import FixedButton from "../FixedButton/FixedButton";
import DevSection from "../DevSection/DevSection";

const LandingPage = () => {
  document.body.style.overflowX = "hidden";

  const drawFeatureData = {
    imageRight: false,
    name: "Draw Anywhere, On Any Device",
    description:
      "With Mighty Draw, the screen is your canvas. Our minimal UI maximizes your canvas space, giving you more freedom to express your art. ",
    image: require("../../assets/drawing-demo.gif").default,
  };

  const pencilEraserShowcaseData = {
    name: "Pencil & Eraser",
    description:
      "The classics. The pencil and eraser are always avaiable at the bottom left whenever you need them.",
    image: require("../../assets/pencil-eraser.gif").default,
  };

  const zenModeShowcaseData = {
    name: "Introducing Zen Mode",
    description:
      "Now, even the header and footer can be put away, leaving nothing between you and your canvas. Nice.",
    image: require("../../assets/zen-mode.gif").default,
  };

  const body = document.body;
  body.style.overscrollBehavior = "auto";
  return (
    <div className={styles.page}>
      <Intro />
      <Feature id="features" feature={drawFeatureData} />
      <FullShowcase feature={pencilEraserShowcaseData} />
      <FeatureList />
      <FullShowcase feature={zenModeShowcaseData} />
      <FixedButton />
      <DevSection />
    </div>
  );
};

export default LandingPage;
