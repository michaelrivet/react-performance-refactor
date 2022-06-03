
import {
  ThemeProvider,
  sproutDarkTheme
} from '@sproutsocial/racine';
import '@sproutsocial/racine/includeIcons';

function App() {
  return (
    <ThemeProvider theme={sproutDarkTheme}>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
