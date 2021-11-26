import styles from "./FullShowcase.module.css";

const FullShowcase = (props) => {
  const { feature } = props;
  return (
    <section className={styles.showcase}>
      <div className={styles.content}>
        <h4>{feature.name}</h4>
        <p>{feature.description}</p>
        <img src={feature.image} alt="" />
      </div>
    </section>
  );
};

export default FullShowcase;
