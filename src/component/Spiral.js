import React from 'react'

function Spiral({color, animation}) {

  let styles={
    backgroundColor: color,
    animation: animation,
  }
  return (
    <div className="spiral" style={styles}></div>
  )
}

export default Spiral