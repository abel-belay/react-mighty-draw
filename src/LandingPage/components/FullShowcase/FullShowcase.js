import styles from "./FullShowcase.module.css";

const FullShowcase = (props) => {
  const {feature} = props;
  return (
    <section className={styles.container}>
      <h4>{feature.name}</h4>
      <p>{feature.description}</p>
      <img src={feature.image} alt="" />
    </section>
  );
};

export default FullShowcase;
