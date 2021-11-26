import styles from "./Feature.module.css";

const Feature = (props) => {
  const { feature } = props;

  return (
    <section
      id={props.id ? props.id : ""}
      className={styles.feature}
    >
      <div
        className={`${styles.content} ${
          feature.imageRight ? styles.imageRight : styles.imageLeft
        }`}
      >
        <div>
          <img className={styles.image} src={feature.image} alt="GIF" />
        </div>
        <div>
          <div className={styles.text}>
            <h4>{feature.name}</h4>
            <p>{feature.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
