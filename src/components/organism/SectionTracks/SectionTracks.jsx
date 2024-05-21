import SectionTitle from "../../molecules/SectionTitle/SectionTitle";
import TrackList from "../../molecules/TrackList/TrackList";
import style from "./SectionTracks.module.css";
function SectionTracks(){
    return(
        <>
        <div id={style.title_page}><SectionTitle></SectionTitle></div>
        <div id={style.section_tracks_page}>
        <TrackList></TrackList>
        </div>
        </>
    )
}
export default SectionTracks;