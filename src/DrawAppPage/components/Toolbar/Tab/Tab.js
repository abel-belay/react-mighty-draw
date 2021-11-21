import { useContext } from "react";
import ShowNavsContext from "../../../store/show-navs";
import styles from "./Tab.module.css";

const Tab = () => {
  const showNavsContext = useContext(ShowNavsContext);

  const changeNavsClickHandler = () => {
    showNavsContext.onNavChangeClick();
  }

  return (
    <div className={styles.container}>
      <button onClick={changeNavsClickHandler} className={`${styles.button} ${showNavsContext.showNavs ? styles["large-font"] : styles["small-font"]}`}>{showNavsContext.showNavs ? String.fromCharCode(215) : String.fromCharCode(8593)}</button>
    </div>
  );
};

export default Tab;
