import React, { useState } from 'react'

export function MyForm ({submitFunction, type, movieList}) {
  let [name, setName] = useState("");
  // let name = ""
  return (
    <>
      <form id='studentDetails' onSubmit={(event) => {
        event.preventDefault()
        submitFunction(name)
      }}>
        <label htmlFor='name'>
          Enter your name:
        </label>
        <input id='name' type="text"  onChange={(event) => {
          setName(event.target.value)
          // name = event.target.value
        }} />
        <button type='submit'>
          Submit
        </button>
      </form>
      <span>
        {name}
      </span>
      <div>
        {type}
      </div>
      <div>
        {movieList}
      </div>
    </>
  )
}

export const Mybutton = "Button"

export const Mytable = "Table"

// export default MyForm
