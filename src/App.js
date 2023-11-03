import './App.css';
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
    </div>
  );
}

export default App;
