import logo from './logo.svg';
import WaterWave from 'react-water-wave';
import LandingPage from './components/landingPage';
import ContentPage from './components/contentPage';
import {Helmet} from "react-helmet"
import GlobesPage from "./components/GlobePages/GlobesPage"
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  return (
    <div style={{flex: 1, flexDirection: 'column'}}>
      {/* <LandingPage/> */}
      <GlobesPage />
    </div>
  );
}

export default App;
