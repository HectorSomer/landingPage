import Clancy from "../../molecules/Clancy/Clancy";
import TwentyOnePilots from "../../molecules/TwentyOnePilots/TwentyOnePilots";
import style from "./SectionHeader.module.css"
function SectionHeader(){
    return(
        <>
        <div id={style.header}>
        <Clancy></Clancy>
        <TwentyOnePilots></TwentyOnePilots>
        <Clancy></Clancy>
        </div>
        </>
        
    )
}
export default SectionHeader;