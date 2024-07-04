import React, { useState } from "react";

const Color = () => {
  //First state is going to set the type
  //second one is to store the current color
  const [typeOf, setTypeOf] = useState("HEX");
  const [color, setColor] = useState("#000000");

  function utility(length){
    return Math.floor(Math.random()*length)
  }

  const handleCreateHexColor = () => {
    //#678765
    const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexColor="#";
    for(let i=0;i<6;i++){
        hexColor+=hex[utility(hex.length)]
    }
    
    console.log("HexColor",hexColor);
    const low=hexColor.toLowerCase()
    setColor(low)
  };

  const handleCreateRGBcolor = () => {
    const r=utility(256)
    const g=utility(256)
    const b=utility(256)

    console.log(r,g,b);
    setColor(`rgb ${r},${g},${b}`)
  };

  return (
    <div
      className="header"
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
    <div className="btn-box">
      <button className="button-1" onClick={() => setTypeOf("HEX")}>Create HEX Color</button>
      <button className="button-2" onClick={() => setTypeOf("RGB")}>Create RGB Color</button>
      <button className="button-3"
        onClick={typeOf === "HEX" ? handleCreateHexColor : handleCreateRGBcolor}
      >
        Generate Random Color
      </button>
      </div>

      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'#fff',
        fontSize:'60px',
        marginTop:'50px'
      }}>

      <h3>{typeOf==='RGB'?'RGB Color':'HEX Color'}</h3>
      <h1>{color}</h1>
      </div>
    </div>
  );
};

export default Color;
