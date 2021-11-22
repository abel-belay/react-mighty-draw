import styles from "./FeatureList.module.css";
import Feature from "../Feature/Feature";

const FeatureList = () => {
  const FEATURES_DATA = [
    {
      id: "f1",
      name: "Pencil & Eraser Selectors",
      description:
        "Mighty Draw is a cool new tool to draw whatever you please. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: require("../../assets/test.gif").default,
      imageRight: false,
    },
    {
      id: "f2",
      name: "Color Selector",
      description:
        "Mighty Draw is a cool new tool to draw whatever you please. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: require("../../assets/test.gif").default,
      imageRight: true,
    },
    {
      id: "f3",
      name: "Zen Mode",
      description:
        "Mighty Draw is all about given you a clean, minimal interface. This means that even the header and footer can be put away. Enter Zen Mode to hide everything that stands between you and your canvas.",
      image: require("../../assets/test.gif").default,
      imageRight: false,
    },
    {
      id: "f4",
      name: "Image Export",
      description:
        "Have a piece you’re proud of? With the image export feature, you can download a copy of your art to show off to all your friends, or keep all to yourself.",
      image: require("../../assets/test.gif").default,
      imageRight: true,
    },
    {
      id: "f5",
      name: "Clear Canvas",
      description:
        "Need a fresh start? No problem. With the clear canvas feature, a clean canvas is one click away. Just press the (clear canvas) button to clear your canvas.",
      image: require("../../assets/test.gif").default,
      imageRight: false,
    },
    {
      id: "f6",
      name: "Size Selector",
      description:
        "Lorem ipsum dolor...",
      image: require("../../assets/test.gif").default,
      imageRight: true,
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
