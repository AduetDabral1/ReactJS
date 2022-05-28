import React from 'react'

export default function Alert(props) {
    const capitalize = (word) =>{
        const val = word.toLowerCase();
        return val.charAt(0).toUpperCase() + val.slice(1);
    }
  return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>
  )
}
