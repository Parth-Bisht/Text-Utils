import React from "react";

function Alert(props) {
  const firstUpper = (word)=>{
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  return (
    <div style={{height:"50px"}}>
    {props.alert && <div>
      <div className={`alert alert-${props.alert.state} alert-dismissible fade show`} role="alert">
        <strong>{firstUpper(props.alert.state)}</strong>: {props.alert.msg} 
      </div>
    </div>}
    </div>
  );
}

export default Alert;
