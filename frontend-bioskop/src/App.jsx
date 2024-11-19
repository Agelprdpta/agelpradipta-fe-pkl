import { useState } from 'react';
import './App.css';
import MoviesPage from './MoviesPage';


function App() {
  // Gunakan useState untuk mengelola state count
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <MoviesPage />
      </div>
    </>
  );
}

export default App;