import "./App.css";
import Category from "./components/caterogy/Category";
import Favorite from "./components/favorite/Favorite";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import NewArrival from "./components/newArrival/NewArrival";
import SignUp from "./components/signUp/SignUp";
import Slider from "./components/slider/Slider";
import TopBar from "./components/topBar/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <NavBar />
      <Slider />
      <Category />
      <NewArrival />
      <Favorite />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
