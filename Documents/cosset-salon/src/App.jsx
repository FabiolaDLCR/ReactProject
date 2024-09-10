import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './index.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer />
    </div>
  );
}
export default App
