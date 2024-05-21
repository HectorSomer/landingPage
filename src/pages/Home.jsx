import SectionAlbums from "../components/organism/SectionAlbums/SectionAlbums";
import SectionHeader from "../components/organism/SectionHeader/SectionHeader"
import SectionTracks from "../components/organism/SectionTracks/SectionTracks";
function Home(){
    return(
        <>
        <SectionHeader></SectionHeader>
        <SectionAlbums></SectionAlbums>
        <SectionTracks></SectionTracks>
        </>
    )
}
export default Home;