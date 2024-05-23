import style from "./Text.module.css"
function Text({text}){
return(<p id={style.text_size}>{text}</p>)
}
export default Text;