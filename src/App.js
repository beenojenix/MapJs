import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Data from './data.json';

const App = () => {

  return(
      <div className="container">
          { Data.map(props =>{
            return(
              <div key={ props.id } className="post mt-5">
                  <h3>{ props.title }</h3>
                  <p>{ props.content }</p>
              </div>
            )
          })}
      </div>
  )
}

export default App;
