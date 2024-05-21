import "./Image.css"
function Image({direccion, id}){
    return(<img src={direccion } id={id}></img>)
}
export default Image;