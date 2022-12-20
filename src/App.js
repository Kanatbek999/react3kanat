import { useState } from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('')

  const fetchWeather = (e) => {
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=2e8560268f45967e6171bccbf1445e9c&q=${city}&units=matric`)
    .then((response) =>  response.json())
    .then((data) => {console.log(data)
      setWeather(data)
    })
    .catch((err) => console.log(err))

  }

  const searchHandler = (e) => {
    setCity(e.target.value)
  }


  return (

    <div>
      <form onSubmit={fetchWeather}>
          <input  type="text" onChange={searchHandler}/>
       <button type='submit' onClick={fetchWeather}>get weather</button>
      </form>
     
       <div className='info'>
         <h1 className='city'>Город:{weather?.name }</h1>
        <h1>{weather?.main.temp }°с</h1> 
       
       </div>
         
    </div>
    
  );
}

export default App;
