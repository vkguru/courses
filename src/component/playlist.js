import React, { useState, useRef } from 'react';
import Chevron from '../component/chrevon';

export default function Playlist(props) {

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);
  const acc = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
    
  }




  return (
    <>
      <div className="accordion__section">
        <button ref={acc} className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <Chevron className={`${setRotate}`} fill={"#777"} />
          <p className="accordion__title">{props.title}</p>
          <p className="accordion__total">{props.total}</p>
        </button>
          <div
            ref={content}
            style={{ maxHeight: `${setHeight}` }}
            className="accordion__content"
          >
            <div
              className="accordion__text"
            > {props.content}</div>
          </div>
      </div>
    </>
  )
}
