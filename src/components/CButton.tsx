import { Button } from '@mui/material';
import React from 'react'

function CButton(props:any) {
  let {className,label,onClick} = props;  
  return (
    <>
    <button onClick={onClick} className={className}>{label}</button>    
    </>
  )
}

export default CButton

