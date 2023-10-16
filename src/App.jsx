import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Webpages/Home.jsx'
import Search from './Webpages/Search.jsx'
import Results from './Webpages/Results.jsx';
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/Results' element={<Results />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
