import logo from './logo.svg';
import WaterWave from 'react-water-wave';
import LandingPage from './components/landingPage';
import ContentPage from './components/contentPage';
import {Helmet} from "react-helmet"

function App() {
  return (
    <div style={{flex: 1, flexDirection: 'column'}}>
      <LandingPage/>
      {/* <GlobePage/> */}
    </div>
  );
}

export default App;
