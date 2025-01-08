import { useState } from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  const [count, setCount] = useState(0);
  
  function handleIncrement() {
    setCount(prevCount => prevCount + 1); // Use functional update
  }
  
  function handleDecrement() {
    setCount(prevCount => prevCount - 1); // Use functional update
  }
  
  return (
    <>
      <div><button onClick={handleIncrement}>Increment</button></div>
      <div><h1>{count}</h1></div>
      <div><button onClick={handleDecrement}>Decrement</button></div>
    </>
  );
}

export default App;