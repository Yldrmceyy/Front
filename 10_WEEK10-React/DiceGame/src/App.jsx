/* eslint-disable no-undef */


import './App.css'

function App() {
  const [userName, setUserName] = useState('Player 1');
  const [userDice, setUserDice] = useState(1);
  const [pcDice, setPcDice] = useState(1);
  const [result, setResult] = useState('');
  const [rolling, setRolling] = useState(false);
  const [newName, setNewName] = useState('');

  const rollDice = () => {
    setRolling(true);
    let rollInterval = setInterval(() => {
      setUserDice(Math.floor(Math.random() * 6) + 1);
      setPcDice(Math.floor(Math.random() * 6) + 1);
    }, 100);

    setTimeout(() => {
      clearInterval(rollInterval);
      const userRoll = Math.floor(Math.random() * 6) + 1;
      const pcRoll = Math.floor(Math.random() * 6) + 1;
      setUserDice(userRoll);
      setPcDice(pcRoll);

      if (userRoll > pcRoll) {
        setResult(`${userName} Kazandı!`);
      } else if (userRoll < pcRoll) {
        setResult('Bilgisayar Kazandı!');
      } else {
        setResult('Berabere!');
      }
      setRolling(false);
    }, 3000);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim() !== '') {
      setUserName(newName);
      setNewName('');
    }
  };

  return (
    <div className="App">
      <h1>Zar Oyunu</h1>

      <form className="username-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Yeni Kullanıcı Adı"
          value={newName}
          onChange={handleNameChange}
        />
        <button type="submit">Güncelle</button>
      </form>

      <div className="players">
        <div className="player">
          <h2>{userName}</h2>
          <div className={`dice dice-${userDice}`}>
            <img src={`./images/dice${userDice}.png`} alt={`Dice ${userDice}`} />
          </div>
        </div>
        <div className="player">
          <h2>Bilgisayar</h2>
          <div className={`dice dice-${pcDice}`}>
            <img src={`./images/dice${pcDice}.png`} alt={`Dice ${pcDice}`} />
          </div>
        </div>
      </div>

      <div className="result">
        <h2>{result}</h2>
      </div>

      <button onClick={rollDice} disabled={rolling}>
        {rolling ? 'Zarlar Atılıyor...' : 'Zarları At'}
      </button>
    </div>
  );
}

export default App;