import React from 'react';
import { Link } from 'react-router-dom';
import CallApi from './CallApi';

const Home = () =>{
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
          
          </li>
          <li>
          
          </li>
          <li>
            <Link to="/ac3">AC3- Rafael</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;