import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import './output.css';
import Home from './Pages/Home'
import logo from './assets/logo.png'
import About from './Pages/About'
import Pricing from './Pages/Pricing';
import Api from './Pages/Api';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  const [array,setArray] = useState([])
  const fetchAPI = async ()=>{
    const response = await axios.get("http://localhost:8080/api/users");

    setArray(response.data.users)
  };
  useEffect(()=> {
    fetchAPI()
  },[])

  return (
    <>
      <div>
    <Router>
  
    <div className='flex justify-between items-center' >
         <img src={logo} alt='Logo' className='w-[180px]' />


      <ul className='flex gap-4 md:gap-16'>
        <li className='hover:font-bold cursor-pointer'> <Link to='/pricing'>Pricing</Link></li>
        <li className='hover:font-bold cursor-pointer'><Link to='/api'>API</Link></li>
        <li className='hover:font-bold cursor-pointer'>Resources</li>
        <li className='hover:font-bold cursor-pointer'>
          <Link to='/about'>About</Link>
        </li>
      </ul>
     <div className='flex gap-4'>
      <button className=''>Login</button>
     <button className='bg-black text-white px-4 py-2 rounded hover:bg-gray-200 hover:text-black'>Sign Up</button>
     </div>
    </div>

    <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/api" element={<Api />} />
    </Routes>

    </Router>

    

        
        <p>
        {
          array.map((user, index)=>(
            <>
            <span key={index}>{user}</span>
            <br></br>
            </>
          ))
        }
        </p>
      </div>
     
    </>
  )
}

export default App
