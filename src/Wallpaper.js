import React from 'react'

function Wallpaper(props) {
    const {text} = props;
    
  return (
    <div style={{marginTop:"20%"}}>
        <h1>
        {text}
        </h1>
    </div>
  )
}

export default Wallpaper