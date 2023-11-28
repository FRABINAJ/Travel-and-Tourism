import './App.css';
// import Form from './test/Form';
import Header from './Header/Header';
import Routing from './Routing/Routing';
import Tours_list from './Tours_List/Tours_list';
import ImageSlider from './test/ImageSlider';
import { SliderData } from './test/SliderData';

function App() {
  return (
    <div className="App">
      <Header /> 
       <Routing/>
      {/* <Form/> */}
       {/* <ImageSlider slides={SliderData} />; */}
       {/* <Tours_list/> */}
    </div>
  );
}

export default App;
