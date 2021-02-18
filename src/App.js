import logo from './logo.svg';
import './App.css';
import config from './config';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          <b>Enviroment:</b> {config.APP_ENV}
        </p>
        <p>
          <b>Public url:</b> {config.PUBLIC_URL}
        </p>
        <p>
          <b>Test variable:</b> {config.TEST_VARIABLE}
        </p>
      </header>
    </div>
  );
}

export default App;
