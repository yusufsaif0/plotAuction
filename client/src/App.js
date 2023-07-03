import './App.css';
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import AuctionDetaiils from './component/AuctionDetaiils';
import Register from './component/Register';
import { Switch, Route ,Redirect} from "react-router-dom";
import Login from './component/Login';
import Carosel from './component/Carosel';
import Footer from './component/Footer';
import Payment from './Payment';
function App() {
  return (
    <div className="App">
   
   <Header />
   <br></br>
     <Switch>
     <Route exact path="/" component={HeroSection}></Route>

        <Route exact path="/getauctionbyid/:id" component={AuctionDetaiils}></Route>
        <Route exact path="/singup" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/payment" component={Payment}></Route>

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
