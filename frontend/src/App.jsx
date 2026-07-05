import './App.css'
import { Myfooter } from './components/myfooter'
import Navbar from './components/navbar'
import Homepage from './pages/homepage'
function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Homepage />
      </main>
      <footer>
        <Myfooter/>
      </footer>
    </>
  )
}

export default App
