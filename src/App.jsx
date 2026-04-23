import './App.css'
import { Hero } from './components/Hero/Hero'
import { Header } from './components/Header/Header'
import { LeapYear } from './components/Birtday/LeapYear'
import { GuessNum } from './components/GuessNum/GuessNum'
import { RPS } from './components/Rps/Rps'
import { Calculator } from './components/Calculator/Calculator'
import { TimeCalculator } from './components/TimeCalculator/TimeCalculator'
import { MaxNumberCalculator } from './components/TreeNum/MaxNumberCalculator'
import { Scientists } from './components/Scientist/Scientists'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <>
    <Header/>
    <Hero/>
    <LeapYear/>
    <GuessNum/>
    <RPS/>
    <Calculator/>
    <TimeCalculator/>
    <MaxNumberCalculator/>
    <Scientists/>
    <Footer/>
    </>
  )
}

export default App
