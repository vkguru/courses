import React from 'react'

export default function Progress(props) {

  return (
    <>

      {/* progress range */}

      <div className="cr-progress">

        <h3>Track Your Progress</h3>

        <div className="cr-progress-bg">

        <div className="start-point"></div>

          <div className="cr-progress-fill" style={{width:props.width+'%'}}></div>

        </div>

        <div className="cr-hlder">

          <div className="cr-level">
            <p className="cr-level-text">Introduction</p>
          </div>

          <div className="cr-level">
            <p className="cr-level-text">Step 1</p>
          </div>

          <div className="cr-level">
            <p className="cr-level-text">Step 2</p>
          </div>

          <div className="cr-level">
            <p className="cr-level-text">Step 3</p>
          </div>

          <div className="cr-level">
            <p className="cr-level-text">Conclusion</p>
          </div>

        </div>
        
      </div>

    </>
  )
}
