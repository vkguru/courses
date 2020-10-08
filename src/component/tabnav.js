import React, { Component } from 'react'

export default class TabNav extends Component {
  render() {
    return (
      <>
        <div className="nav-tabs">
            {
              this.props.tabs.map(tab => {
                          const active = (tab === this.props.selected ? 'active ' : '' );
                return (
                  <div className="nav-item" key={ tab }>
                    <p className={ active } onClick={ () => this.props.setSelected(tab) }>
                      { tab }
                    </p>
                  </div>
                );
              })
            }
        </div>
          { this.props.children }
      </>
    )
  }
}
