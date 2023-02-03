
import './App.css';
// import Search from './api';
import { useState } from 'react';
import axios from 'axios'
function App() {
  const [data, setdata] = useState({})
  const [location, setLoc] = useState('')
  const [b, setB] = useState(true);



  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=fbc35f84a2086b5837c7e7d7358a7368&units=metric`



  const search = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((response) => {
        setB(false);
        setdata(response.data)
        console.log(response.data);
      })

      setLoc('');

    }

  }





  return (

    // b?<div className='hint'>ENTER LOCATION TO FIND WEATHER</div>



    <div className="App">


      
      {/* <video autoPlay loop muted plays-inline className='backdrop'> <source src='./images/clouds_video.mp4' /></video> */}

      <div className="search">

        <input type="text" className='it' onChange={(e) => setLoc(e.target.value)} value={location} onKeyUp={search} placeholder="Enter Location" />

      </div>

      {


        b ? <div className='hint'>ENTER LOCATION TO KNOW THE WEATHER</div>
          : <div>

            <div className="container">

              <div className='flex-container'>
                <div className='city-details'>
                  <h1 className='city'>{data.name}</h1>

                  <h1 className='weather'> {data.main ? data.main.temp + "°C" : null}</h1>
                </div>

                <div className='desc'>

                  {data.weather && data.weather[0].main ? <span>{data.weather[0].main}</span> : null}

                </div>


              </div>



              {/* <div className='desc'>

          { data.weather && data.weather[0].description?<span>{data.weather[0].description}</span>:null }
          
        </div> */}


              <div className='cards'>


                {data.main && data.main.feels_like ? <div className='card'>
                  {/* <h1 className='card-heading'>Feels <br/> Like</h1> */}
                  <h1 className='card-heading'> Feels Like</h1>
                  <p>{data.main.feels_like}°C</p>
                </div> : null
                }




                {data.main && data.main.temp_max ? <div className='card'>
                  {/* <h1 className='card-heading'>Max<br/>Temp</h1> */}
                  <h1 className='card-heading'> Max-Temp</h1>
                  <p>{data.main.temp_max} °C</p>
                </div> : null
                }

                {data.wind && data.wind.speed ? <div className='card'>
                  {/* <h1 className='card-heading'>Min <br/> Temp</h1> */}
                  <h1 className='card-heading'> Wind Speed</h1>
                  <p>{data.wind.speed}°C</p>
                </div> : null

                }






              </div>


            </div>

          </div>
      }
    </div>
  );
}

export default App;
