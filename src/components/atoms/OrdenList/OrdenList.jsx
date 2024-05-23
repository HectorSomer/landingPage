import style from "./OrdenList.module.css";
function OrdenList(props){
    return(
        <>
        <h3 id={style.title_size}>{props.title}</h3>
        <ol>
            {props.album.map((track,index)=>
                <li id={style.text_size}key={index}>{track}</li>
            )}
        </ol>
        </>
    )
}
export default OrdenList;