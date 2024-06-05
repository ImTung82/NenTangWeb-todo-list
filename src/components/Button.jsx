import React from 'react'

function Button(props) {
  return (
    <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-4 rounded" onClick={props.onClick}>{props.text}</button>
    </div>
  )
}

export default Button