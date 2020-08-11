import React from 'react'
import Header from '../../components/Header';
import SwapiList from '../../containers/SwapiList';

const Home = (props) => {
    return (
        <React.Fragment>
          <Header />
          <SwapiList data={props.data} />
          <button onClick={() => props.goToPreviousPage()}>Back</button>
          <button onClick={() => props.goToNextPage()}>Next</button>
        </React.Fragment>
    )
}

export default Home
