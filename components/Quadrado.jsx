import styles from "./styles/quadrado.module.css";

export default function Quadrado(props) {
  return (
    <div
      className={styles.quadrado}
      style={{
        backgroundColor: props.colorAlternance % 2 == 0 ? "white" : "black",
      }}
    ></div>
  );
}
