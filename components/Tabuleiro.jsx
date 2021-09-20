import Linha from "../components/Linha";

export default function Tabuleiro(){
  return (
    <div className="container">
      <Linha/>
      <Linha preto/>
      <Linha />
      <Linha preto/>
      <Linha />
      <Linha preto/>
      <Linha />
      <Linha preto/>
    </div>
  )
}