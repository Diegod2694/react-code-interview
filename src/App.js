import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import './App.style.css'

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(+localStorage.getItem('page') || 1)

  const getData = async (pageNumber) => {
    const fetchedData = await fetch(`https://swapi.dev/api/people/?page=${pageNumber}`)
    const jsonData = await fetchedData.json()
    setData(jsonData.results)
    localStorage.setItem('page', `${pageNumber}`)
  }

  useEffect(() => {
    getData(page)
  }, [page]);

  const goToNextPage = () => {
    setPage(page + 1)
  }
  const goToPreviousPage = () => {
    if (page === 1) return
    setPage(page - 1)
  }

  return (
    <div className="App">
      <Home data={data} goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage}/>
    </div>
  );
}

export default App;
