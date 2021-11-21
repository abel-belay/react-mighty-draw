import styles from "./LandingPage.module.css";
import Intro from "../Intro/Intro";
import FeatureList from "../FeatureList/FeatureList";

const LandingPage = () => {
  const body = document.body;
  body.style.overscrollBehavior = "auto";
  return (
    <div className={styles.page}>
      <Intro />
      <FeatureList />
    </div>
  );
};

export default LandingPage;
