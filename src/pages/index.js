import React from 'react';
import Nav from '../component/navbar';
import Header from '../component/header';
import Intro from '../component/intro';
import '../asset/css/style.css';
import Subintro from '../component/sub-intro';
import Masterclass from '../component/mclass';
import Masterclassin from '../component/maclass';
import Instructor from '../component/instructor';
import Jointeam from '../component/jointeam';
import Footer from '../component/footer';

function Index() {
  return (
    <>
      <Nav />
      <Header />
      <Intro />
      <Subintro />
      <Masterclass />
      <Masterclassin />
      <Instructor />
      <Jointeam />
      <Footer />
    </>
  )
}

export default Index;