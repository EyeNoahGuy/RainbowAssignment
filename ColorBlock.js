import React from 'react'

function ColorBlock(prop){
    return (
        <div classaName="colorBlock"
        style={{'backgroundColor': props.color}}>
            <p>{props.color}</p>
        </div>
    )
}
export default ColorBlock
