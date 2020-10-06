import React from 'react'

export default function Accordion(props) {
  return (
    <>
      <div className="acc-holder">
        <button className="acc-trigger">{props.title}</button>
        <div className="panel">{props.paragraph}</div>
      </div>
    </>
  )
}
