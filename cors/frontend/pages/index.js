// frontend/pages/index.js
import { useState } from 'react';

const Home = () => {
  const [response, setResponse] = useState('');

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:8080/hello');
      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>CORS Test</h1>
      <button onClick={fetchData}>Send GET /hello Request</button>
      {response && <p>Response from server: {response}</p>}
    </div>
  );
};

export default Home;
