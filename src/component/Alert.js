import React from 'react'

function Alert(props) {
  
    return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show text-xl font-semibold text-red-900 bg-yellow-500 items-center justify-center flex flex-col`}role="alert">
    <strong>{props.alert.type}</strong>:{props.alert.msg}
  </div>
  )
}

export default Alert
