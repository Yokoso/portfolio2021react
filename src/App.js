import './App.scss';

import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import Content from './components/Content';
import Socials from './components/Socials';

function App() {
  return (
    <div className="App">
      <nav className="navigation">
        <Navigation navigationType="navigation" />
      </nav>
      
      <main className="App-header">
        <HomePage />
        <Content />
      </main>

      <Socials />

      <footer className="navigation">
        <Navigation navigationType="footer" />
      </footer>
    </div>
  );
}

export default App;
