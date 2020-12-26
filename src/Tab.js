import React from 'react'

function Tab({isSelected, children}) {
  if (isSelected){
    return (
      <div style={{}}>
        {children}
      </div>
    )
  }
  return null;
}

export default Tab
