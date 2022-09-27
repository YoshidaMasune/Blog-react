import React from 'react'

function Container(props) {
   const style = props.style;
  return (
    <div className={`mx-auto w-full lg:w-3/4 sm:w-3/4 ${style}`}>
      {props.children}
    </div>
  )
}

export default Container