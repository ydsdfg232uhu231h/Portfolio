import React, { useEffect } from "react";
import day from "../assets/day.png";
import night from "../assets/night.png";
import "./Style/Themepage.css"
function Theme(){
    const [themechange,setthemechange] = React.useState(()=>{
        const savetheme = localStorage.getItem("mytheme");
        return savetheme !== null? JSON.parse(savetheme): true;
    });
    
    useEffect(()=>{
            localStorage.setItem("mytheme", JSON.parse(themechange))
        
    },[themechange]);
    
    return (<>
        <div id="themes" onClick={() =>setthemechange(!themechange)}>
            {
                themechange? <img src={day} alt="" /> : <img src={night} alt="" />     
            }
        
            
        </div>
    </>);
}
export default Theme;