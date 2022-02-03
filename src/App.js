import {useState} from 'react';
import rollingcity from './Rollingcity.jpeg'

const App = () => {
  const [name, setName] = useState('kanye')
  const [trueFalse, setTrueFalse] = useState(true)

  const changeName = () => setName('riku')
  const toggleTrueFalse = () => setTrueFalse(!trueFalse)

  let random = Math.random()

  return (
  <>
    <ul>
      <li>{random} ← let</li>
      <li>{name} ← state</li>
      <li>{trueFalse ? 'true' : 'false'} ← state</li>
    </ul>

    <button onClick={toggleTrueFalse}>TOGGLE</button>
``
    <button onClick={changeName}>CHANGE</button>

    <div style={{width: '100vw', height: '100vh', backgroundImage: `url(${rollingcity})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}}></div>
  </>
  )
}

export default App;
