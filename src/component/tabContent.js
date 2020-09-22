import React, { Component } from 'react';
import Tab from './tab';
import TabNav from './tabnav';
import Overview from '../component/overview'

export default class TabContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 'Overview'
    }
  }
  setSelected = (tab) => {
    this.setState({ selected: tab });
  }

  render() {
    
    return (
      <>
        <TabNav tabs={['Overview', 'Resources']} selected={ this.state.selected } setSelected={ this.setSelected }>
          <Tab isSelected={ this.state.selected === 'Overview' }>
            <Overview />
          </Tab>
          <Tab isSelected={ this.state.selected === 'Resources' }>
            <h1>More test text</h1>
          </Tab>
        </TabNav>
      </>
    )
  }
}
