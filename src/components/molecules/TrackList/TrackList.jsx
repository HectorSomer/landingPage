import Image from "../../atoms/Imagen/Image"
import dates from "../../../data/dates"
import OrdenList from "../../atoms/OrdenList/OrdenList"
import style from "./TrackList.module.css"
function TrackList(){
    return(
   dates.tracklist.map(tracks=>{
    return(
        <>
        <div id={style.tracklist_page}>
        <Image direccion={tracks.ruta} id="image_albums"></Image>
        <OrdenList key={tracks.tracklist} album={tracks.track} title={tracks.album}></OrdenList>
        </div>
        </>
    )
}
   )
    )
}
export default TrackList;