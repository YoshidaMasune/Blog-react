import React from 'react'

function Container(props) {
   const style = props.style;
  return (
    <div className={`container mx-auto ${style}`}>
      {props.children}
    </div>
  )
}

export default Container