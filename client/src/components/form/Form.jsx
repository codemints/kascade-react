import React from 'react'

const Form = (props) => {
  return (
    <div>
      {props.map((prop, index) => (
        <h3 key={ prop[index] } id={ prop[index] }>{ prop }</h3>
      ))}
    </div>
  )
}

export default Form
