import { useState } from 'react'
import Header from './Header'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import './App.css'
import Index from './Index'
import Article from './Article';
import Login_sign_up from './Login_sign_up';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Index />} />
         {/* <Route path="/article" element={<Article />} /> */}
        <Route path="/login" element={<Login_sign_up />}></Route>
        <Route path="/:article_id" element={<Article />}></Route>
        {/* <Route path="/new-user" element={<Authentication />}></Route> */}
      </Routes>
      
    </>
  )
}

export default App
