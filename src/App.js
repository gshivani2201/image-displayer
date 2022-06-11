import Header from './mycomponents/Header';
import MainBody from './mycomponents/MainBody';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

function App() {

  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=499')
             .then (res => {
                setImages(res.data)
                setFilteredImages(res.data)
             })
             .catch (err => {
                 console.log(err)
             })
    }, []);

    const onSearch = (item) => {
      const image = images.filter(f => {
        return f.title.toLowerCase().includes(item.toLowerCase());
      });
    
      setFilteredImages(image);
    };

    const onSort = (order) => {
      if (order === 'sort') {
        setFilteredImages(images);
        return ;
      }
      
    const image = [...images].sort((a, b) => {
      if (order === 'asc') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    setFilteredImages(image);	
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header onSearch={onSearch} onSort={onSort}/>
            <MainBody images={filteredImages}/>
          </>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
