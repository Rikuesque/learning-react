import {useState} from 'react';
import BackImage from './MainPage/backImage.js';
import styles from './MainPage/backImage.css';

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

    <button onClick={changeName}>CHANGE</button>

    <div><BackImage /></div>
  </>
  )
}

export default App;
