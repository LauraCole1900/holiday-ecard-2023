import Aurora from './components/aurora';
import StarrySky from './components/starry-sky';
import './App.css'

function App() {

  return (
    <>
      <StarrySky />
      <Aurora />
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h1 className="text">Here's to a shimmering new year!</h1>
      <h2 className="text">May your 2024 be full of light and wonder.</h2>
    </>
  )
}

export default App;
