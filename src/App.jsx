import './App.css'
import SeccionC from './components/SeccionC'
import SecctionA from './components/SecctionA'
import SecctionB from './components/SecctionB'
import SecctionD from './components/SecctionD'
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
    <SecctionD/>
      <Footer/>
    </>
  )
}

export default App
