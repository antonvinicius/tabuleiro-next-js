import Quadrado from "../components/quadrado";
import styles from "../styles/Tabuleiro.module.css";

export default function tabuleiro() {
  let squares = [];
  let colorAlternance = 0;
  for (let i = 0; i < 64; i++) {
    squares.push(<Quadrado colorAlternance={colorAlternance} />);
    if ((i + 1) % 8 == 0 && i != 0) {
      colorAlternance = colorAlternance % 2 == 0 ? 2 : 3;
    } else {
      colorAlternance = colorAlternance % 2 == 0 ? 3 : 2;
    }
  }
  var div1 = squares.slice(0, 8);
  var div2 = squares.slice(8, 16);
  var div3 = squares.slice(16, 24);
  var div4 = squares.slice(24, 32);
  var div5 = squares.slice(32, 40);
  var div6 = squares.slice(40, 48);
  var div7 = squares.slice(48, 56);
  var div8 = squares.slice(56, 64);

  return (
    <>
      <div className={styles.center}>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className={styles.tabuleiro}>{div1}</div>
          <div className={styles.tabuleiro}>{div2}</div>
          <div className={styles.tabuleiro}>{div3}</div>
          <div className={styles.tabuleiro}>{div4}</div>
          <div className={styles.tabuleiro}>{div5}</div>
          <div className={styles.tabuleiro}>{div6}</div>
          <div className={styles.tabuleiro}>{div7}</div>
          <div className={styles.tabuleiro}>{div8}</div>
        </div>
      </div>
    </>
  );
}
