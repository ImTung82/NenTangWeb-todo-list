import React from 'react'

function Button(props) {
  return (
    <div>
      {/* Bao gồm sự kiện onClick */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded my-1" onClick={props.onClick}>{props.text}</button>
    </div>
  )
}

export default Button