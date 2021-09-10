import React from "react"


function Header({ isDarkMode, onDarkModeClick }){
  return (
  <div>
    <h2>Shopster</h2>
    <button onClick={onDarkModeClick}>{isDarkMode ? 'Light' : 'Dark'} Mode</button>
  </div>
  )
}

export default Header