import './App.css';
import WeatherApp from './WeatherApp';


function App() {
  let handleClick = () => {
    console.log("Button was clicked!");
  }
  return (
    <>
      <h1>API Based - Weather Widget - Using React And MaterialUI</h1>
      <WeatherApp/>
    </>
  )
}

export default App
