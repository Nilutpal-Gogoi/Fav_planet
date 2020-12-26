// This component is for creating the menu part of the tabs
import React from 'react'

function Tabnav({tabs, selected, setSelected, children}) {
  return (
    <div>
      <ul className="nav nav-tabs">
        {
          tabs.map(tab => { 
            const active = (tab === selected ? "active" : " ")
            return (
              <li className="nav-item" key={tab} style={{cursor: "pointer"}}>
                <a href="/#"  className={"nav-link " + active} onClick={() => setSelected(tab)}>
                  {tab}
                </a>
              </li>
            )
          })
        }
      </ul>
      {children}
    </div>
  )
}

export default Tabnav
