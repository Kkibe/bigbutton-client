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
import Contact from './pages/Contact';
import SinglePost from './components/SinglePost';

function App() {
  const [data, setData] = useState([]);
  const options = {
    method: 'GET',
    url: 'https://programmer-humor.p.rapidapi.com/api/9gag',
    params: {after: '5'},
    headers: {
      'X-RapidAPI-Key': '248e1e5f8dmsh14dc10a7ebcfcc8p17485cjsn9632aa772b2d',
      'X-RapidAPI-Host': 'programmer-humor.p.rapidapi.com'
    }
  };
  
  useEffect(() => {
    axios.request(options).then((response) => {
        setData(response.data)
        console.log(response.data)
    }).catch((error) => {
        console.error(error);
    });
  }, [window.onload]);
  return (
    <div className='app'>
        <Topbar />
        <Routes>
            <Route path="/" element={<Home data={data}/>}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/read" element={<Blogs data={data}/>}/>
            <Route path="/read/:id" element={<SinglePost/>}/>
            <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
