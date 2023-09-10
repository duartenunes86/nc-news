import { useState } from 'react'
import Header from './Header'

import { UserContext } from './contexts/Users'
import { useContext } from 'react';

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';



import './App.css'
import Articles from './Articles'
import Article from './Article';
import Login_sign_up from './Login_sign_up';
import Signup from './Signup';
import Topic from './Topic';



function App() {
  
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate()

  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Articles />} />
          <Route path="/signup" element={<Signup navigate={navigate}/>} /> 
        <Route path="/login" element={<Login_sign_up navigate={navigate}/>}></Route>
        <Route path="/articles/:article_id" element={<Article />}></Route>
        <Route path="/topics/:topic" element={<Topic  />}></Route>
        
      </Routes>
      
    </>
  )
}

export default App
