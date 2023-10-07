import logo from './logo.svg';
import WaterWave from 'react-water-wave';
import LandingPage from './components/landingPage';
import ContentPage from './components/contentPage';
import {Helmet} from "react-helmet"
import GlobeHub from "./components/GlobePages/GlobeHub"
import GlobePage from "./components/GlobePages/GlobePage"

function App() {
  return (
    <div style={{flex: 1, flexDirection: 'column'}}>
      {/* <LandingPage/> */}
      {/* <GlobeHub /> */}
      <GlobePage />
    </div>
  );
}

export default App;
