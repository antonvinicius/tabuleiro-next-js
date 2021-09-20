import Subdivisao from "./Subdivisao";

export default function Linha(props){
    return (
        <div style={{display: 'flex'}}>
            <Subdivisao preto={props.preto} />
            <Subdivisao preto={!props.preto} />
            <Subdivisao preto={props.preto} />
            <Subdivisao preto={!props.preto} />
            <Subdivisao preto={props.preto} />
            <Subdivisao preto={!props.preto} />
            <Subdivisao preto={props.preto} />
            <Subdivisao preto={!props.preto} />
        </div>
    )
}