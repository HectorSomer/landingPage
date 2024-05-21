import Image from "../../atoms/Imagen/Image"
import dates from "../../../data/dates"
import Text from "../../atoms/Text/Text"
import style from "./Album.module.css"
function Album(){
    let images= "image_albums";
return(
    dates.albums.map(info=>{
        return(
        <>
        <div id={style.album_page}>
        <Image direccion={info.image} id={images}></Image>
        <Text text={info.text}></Text>
        </div>
        </>)
    })
)
}
export default Album