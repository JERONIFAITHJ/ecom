import './App.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';  
import Offers from './Components/Offer/Offers';
import Recommendation from './Components/Recommendation/Recommendation';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
        <Navigation />
        <Header />
        <Offers />
        <Recommendation />
        <Footer />
    </div>
  );
}

export default App;
