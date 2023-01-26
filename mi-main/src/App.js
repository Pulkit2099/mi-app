
import './App.css';
import Prenav from './components/Prenav';
import Nav from './components/Nav';
import {BrowserRouter as Router,Route} from "react-router-dom"
import Slider from './components/Slider';
import data from './data/data.json'
import Offers from './components/Offers';
import Heading from './components/Heading';
import Starproducts from './components/Starproducts';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';

//const banner =pkg.banner;
function App() {
  return (
 <>
 <Router>
<Prenav/> 
<Nav/>
<Slider start ={data.banner.start}/>
<Offers offer={data.offer} />
<Heading text="STAR PRODUCTS"/>
<Starproducts starProduct={data.starProduct}/>
<Heading text="Hot ACCESSORIES"/>
<HotAccessoriesMenu/>

<Route exact path='/music'>
  <HotAccessories music={data.hotAccessories.music}  musicCover={data.hotAccessoriesCover.music}/>                 


</Route>


</Router>
 </>
  );
}

export default App;
