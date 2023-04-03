import { useEffect, useState } from 'react'
import './App.css'
import Tour from './components/Tour';
import Tours from './components/Tours';
import Loading from './components/Loading';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTourList = tours.filter((tour) => tour.id !== id);
    setTours(newTourList);
  };

  const fetchTours = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );  
  }

  if (tours.length === 0) {
    return <main>
      <div className='title'>
        <h2>No tours left</h2>
        <button 
          type='button' 
          style={{marginTop: '2rem'}} 
          className='btn'
          onClick={() => fetchTours()}
        >Refresh</button>
      </div>
    </main>
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App
