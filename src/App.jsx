
import './App.css'
import Category from './compoents/Category'
import Navbar from './compoents/Navbar'
import Offers from './compoents/Offers'
import TrendingItems from './compoents/TrendingItems'

function App() {
  
  return (
    <>
     <div>
      <Navbar/>
     </div>

     <Category/>

     <TrendingItems/>

     <Offers/>
    </>
  )
}

export default App
