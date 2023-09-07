import { useState } from 'react'
import Header from './Header'

import { UserContext } from './contexts/Users'
import { useContext } from 'react';

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';



import './App.css'
import Index from './Index'
import Article from './Article';
import Login_sign_up from './Login_sign_up';
import Signup from './Signup';


function App() {
  const [count, setCount] = useState(0)
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate()

  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Index />} />
          <Route path="/signup" element={<Signup navigate={navigate}/>} /> 
        <Route path="/login" element={<Login_sign_up navigate={navigate}/>}></Route>
        <Route path="/:article_id" element={<Article />}></Route>
        {/* <Route path="/new-user" element={<Authentication />}></Route> */}
      </Routes>
      
    </>
  )
}

export default App
