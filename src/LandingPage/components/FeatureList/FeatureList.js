import styles from "./FeatureList.module.css";
import Feature from "../Feature/Feature";

const FeatureList = () => {
  const FEATURES_DATA = [
    {
      id: "f1",
      name: "Color Palette",
      description:
        "Mighty Draw provides a range of colors for you to choose from. Just select the color you need from the color pallete. Mighty Draw adapts to your color choice so you never forget what color your using.",
      image: require("../../assets/color-selector.gif").default,
      imageRight: true,
    },
    {
      id: "f2",
      name: "Size Selector",
      description: "Thin stroke? Thick stroke? Something in between? With our size selector, the choice is yours. Just use the slider in the bottom right to get the size you need.",
      image: require("../../assets/size-selector.gif").default,
      imageRight: false,
    },
    {
      id: "f3",
      name: "Image Export",
      description:
        "Have a piece you’re proud of? With the image export feature, you can download a copy of your art to show off to all your friends, or keep all to yourself. (Feature in development)",
      image: require("../../assets/test.gif").default,
      imageRight: true,
    },
    {
      id: "f4",
      name: "Clear Canvas",
      description:
        "Need a fresh start? No problem. With the clear canvas feature, a clean canvas is one click away. Just press the (clear canvas) button to clear your canvas. (Feature in development)",
      image: require("../../assets/test.gif").default,
      imageRight: false,
    },
  ];

  const featureComponentsList = FEATURES_DATA.map((feature) => (
    <li key={feature.id}>
      <Feature feature={feature} />
    </li>
  ));

  return <ul className={styles.list}>{featureComponentsList}</ul>;
};

export default FeatureList;
