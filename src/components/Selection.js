import React, { useState } from "react";

export default function Selection({applyColor}){
    const [style, setStyle] = useState({background:""})
    return(
        <>
          <div className="fix-box" style={style} onClick={()=> applyColor(setStyle)}>

          </div>
        </>
    )
}

