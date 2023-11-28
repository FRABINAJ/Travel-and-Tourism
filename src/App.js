import './App.css';
import Footer from './Footer/Footer';
// import Form from './test/Form';
import Header from './Header/Header';
import Routing from './Routing/Routing';
import ImageSlider from './test/ImageSlider';
import { SliderData } from './test/SliderData';

function App() {
  return (
    <div className="App">
      <Header /> 
       <Routing/>
      {/* <Form/> */}
       {/* <ImageSlider slides={SliderData} />; */}
       {/* <Footer/> */}
    </div>
  );
}

export default App;
