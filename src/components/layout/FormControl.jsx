import React from 'react'

const FormControl = (props) => {
   return (
     <div className='mt-5 flex flex-col sm:flex-row sm:items-center items-start'>
       { props.children }
     </div>
   )
 }


 export default FormControl;