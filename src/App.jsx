import './App.css'
import SeccionC from './SeccionC'
import SecctionA from './SecctionA'
import SecctionB from './SecctionB'
import Footer from './components/Footer'
import Header from './components/Header'
import MainSection from './components/MainSection'
import PrincipalArticle from './components/PrincipalArticle'
import SectionDescubre from './components/SectionDescubre'
import './components/utils/reset.css'
function App() {

  return (
    <>
    <Header/>
    <MainSection/>
    <SectionDescubre/>
    <PrincipalArticle/>
    <SecctionA/>
    <SecctionB/>
    <SeccionC/>
      <Footer/>
    </>
  )
}

export default App
