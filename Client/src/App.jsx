import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('/', { proxy: { host: 'https://raksha-five.vercel.app', port: 80, protocol: 'https' } })
      .then(res => {
        const data = res.data;
        console.log(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div>

      </div>
    </>
  );
}

export default App;
