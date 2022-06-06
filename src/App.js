import { Provider } from 'react-redux'
import {
  ThemeProvider,
  sproutDarkTheme
} from '@sproutsocial/racine';
import '@sproutsocial/racine/includeIcons';
import store from './redux/store';
import { Counter } from './features/counter/Counter';
import Editor from './features/editor/Editor';
import {AppContent} from './App/AppContent';
import './App.css';

function App() {
  return (
    <Provider store={store}>
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
          <Counter />
          <Editor />
          <AppContent />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
