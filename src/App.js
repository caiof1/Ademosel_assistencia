// CSS
import './App.css';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WhatsappIcon from './components/WhatsappIcon/WhatsappIcon';

// Pages
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <WhatsappIcon />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
