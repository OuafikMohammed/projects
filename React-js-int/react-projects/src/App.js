// REACT COMPONENT NAMES MUST BE WITH AN UPPERCASE LETTER

// import Accordian from './Components/Accordian/index';
import './App.css';
// import RandomColor from './Components/RandomColor/Index';
// import StarRating from './Components/Star-Rating';
// import ImageSlider from './Components/image-slider';
// import LoadMoreData from './Components/load-more-data/index';
// import Accordian from './Components/Accordian';
import Weather from './Components/weather';

function App() {
  return (
    <>
      {/* <Accordian />*/}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={5}/> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"4"}/> */}
      {/* Load More Products Components */}
      {/* <LoadMoreData /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"4"}/> */}
      {/* url is a prop */}
      <Weather />
    </>
  );
}

export default App;