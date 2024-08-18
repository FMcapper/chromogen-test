import logo from './logo.svg';
import './App.css';
import useStore from './store.js';
import { ChromogenZustandObserver } from 'chromogen';

function App() {
  const calls = useStore((state) => state.calls);
  const caller = useStore((state) => state.caller);
  const addCall = useStore((state) => state.addCall);
  const updateCaller = useStore((state) => state.updateCaller);
  const callUpdater = (e) => {
    console.log(e.target.value);
    updateCaller(e.target.value);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          calls: {calls} <button onClick={addCall}>increment</button>
          <br />
          caller: {caller} <input type={'text'} onChange={callUpdater}></input>
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <ChromogenZustandObserver></ChromogenZustandObserver>
      </header>
    </div>
  );
}

export default App;
