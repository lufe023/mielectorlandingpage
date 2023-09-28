import React from 'react'
import SeccionC from './SeccionC'
import SecctionA from './SecctionA'
import SecctionB from './SecctionB'
import SecctionD from './SecctionD'
import Footer from './Footer'
import Header from './Header'
import MainSection from './MainSection'
import PrincipalArticle from './PrincipalArticle'
import SectionDescubre from './SectionDescubre'
const Home = () => {
  return (
    <>
    <Header/>
    <MainSection/>
    <SectionDescubre/>
    <PrincipalArticle/>
    <SecctionA/>
    <SecctionB/>
    <SeccionC/>
    <SecctionD/> 
    <Footer/>
    </>
  )
}

export default Home