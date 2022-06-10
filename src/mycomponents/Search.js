import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Search() {

  // const [searchPhrase, setSearchPhrase] = useState('')
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  // useEffect(() => {
  //   const filteredData = data.filter(item => item.title.toLowerCase().includes(searchPhrase.toLowerCase()))
  // }, [searchPhrase])

    const submitHandler = (e) => {
        e.preventDefault()
        navigate("https://jsonplaceholder.typicode.com/photos?title=" + input)
    }

  return (
    <form className="d-flex" role="search" onSubmit={submitHandler} style={{color : '#635666'}}>
        <input className="form-control" style={{backgroundColor: '#AEDBCE'}} type="search" placeholder="Type Title Here" aria-label="Search" onChange={(e) => setInput(e.target.value)} value={input}/>
    </form>
  )
}

export default Search