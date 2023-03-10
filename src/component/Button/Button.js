import React from 'react'

const Button = (props) => {
    const { title, bgColor, onClickHandler, onClick, color,borderColor,width} = props
    return (
        <button
            style= {{
                padding:12,
                border: borderColor || `2px solid ${ bgColor === `#fff` ? bgColor: `#4d1f23` }`,
                fontSize: 14,
                color: color || '#ffff',
                background:bgColor,
                marginLeft:5,
                // borderRadius:5,
                // fontWeight:'bold',
                width:150,
            }}
            onClick={onClick || onClickHandler}
        >
           {title}
           {width}
         </button>
    )
}

export default Button