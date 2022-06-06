import { Provider } from 'react-redux'
import {
  ThemeProvider,
  sproutDarkTheme
} from '@sproutsocial/racine';
import '@sproutsocial/racine/includeIcons';
import store from './redux/store';
import {AppContent} from './App/AppContent';
import {Layout} from './Layout/Layout';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={sproutDarkTheme}>
        <div className="App">
        <Layout>
          <AppContent />
        </Layout>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
