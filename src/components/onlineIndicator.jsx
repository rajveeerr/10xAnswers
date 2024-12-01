import useOnline from "../hooks/useOnline"
import '../styles.css'

export default function Online(){
    let online=useOnline();
    let onlineLabelStyle={padding: "0.3rem 1.1rem",borderRadius:"1rem",backgroundColor:"#15161d",
        fontSize:".8rem",display:"flex",width:"max-content",justifyContents:"center",
        alignItems:"center",gap:"6px",color:"white",fontWeight:500}
  
    return <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        {online&&
        <span style={onlineLabelStyle}>
            <span style={{backgroundColor:"lightgreen",borderRadius:"100%",height:"8px",
            width:"8px",boxShadow:"0px 0px 216px 49px rgba(45,255,196,0.31)"}}></span>
            Online
        </span>}
        {!online&&
        <span style={onlineLabelStyle}>
            <span style={{backgroundColor:"red",borderRadius:"100%",height:"8px",width:"8px",
            boxShadow:"0px 0px 216px 49px rgb(255 99 45 / 31%)"}}></span>
            OffLine
        </span>}
    </div>
}