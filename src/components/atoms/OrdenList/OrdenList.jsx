function OrdenList(props){
    return(
        <>
        <h3>{props.title}</h3>
        <ol>
            {props.album.map((track,index)=>
                <li key={index}>{track}</li>
            )}
        </ol>
        </>
    )
}
export default OrdenList;