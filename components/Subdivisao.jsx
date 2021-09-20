import styles from "./Subdivisao.module.css";

export default function Subdivisao(props) {
  return (
    <div
      className={styles.subdivisao}
      style={{
      backgroundColor:
      props.preto
      ?
      "black"
      :
      "white"
      }}
      ></div>
  );
}
