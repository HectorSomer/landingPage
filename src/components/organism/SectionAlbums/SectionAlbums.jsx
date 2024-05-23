import Album from "../../molecules/Album/Album";
import style from "./SectionAlbums.module.css";
function SectionAlbums(){
return(
<>
 <div id={style.section_albums_page}>
 <Album></Album>
 </div>
</>
)
}
export default SectionAlbums;