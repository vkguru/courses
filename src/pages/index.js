import React from 'react';
import Nav from '../component/navbar';
import Header from '../component/header';
import Intro from '../component/intro';
import '../asset/css/style.css';
import Subintro from '../component/sub-intro';
import Masterclass from '../component/mclass';

function Index() {
  return (
    <>
      <Nav />
      <Header />
      <Intro />
      <Subintro />
      <Masterclass />
    </>
  )
}

export default Index;