import './App.css';
import ImageSlider from './component/ImageSlider';
import { SliderData } from './component/SliderData';

function App() {
  return <ImageSlider slides={SliderData} />;
}

export default App;