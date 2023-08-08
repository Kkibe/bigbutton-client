import React, { useEffect, useState } from  'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import './styles.scss';

import Topbar from './components/Topbar';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

import Home from './pages/Home';
import Blogs from "./pages/Blogs";
import Products from './pages/Products';
import About from './pages/About';

function App() {

  const [data, setData] = useState([]);

  const handleFetch = () => {
    const api_key = 'pub_1237237f365d7ff387104765b2874bb6ca618';

    axios.get(`https://newsdata.io/api/1/news?apikey=${api_key}&category=technology,science&language=en&page=1`)
    .then(results => {
        console.log(results);
        setData(results.data.results);
    }).catch(error => {
        console.log(error);
    })


}

useEffect(()=>{
    handleFetch()
}, [])
  return (
    <div className='app'>
        <Topbar />
        <Routes>
            <Route path="/" element={<Home data={data}/>}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/read" element={<Blogs data={data}/>}/>
            <Route path="/about" element={<About />}/>
      </Routes>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
