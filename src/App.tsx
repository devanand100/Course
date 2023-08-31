import "./App.css";
// import TravelApp from "./TravelPacking/main";
// import { Carausal } from "./Accordian/main";
// import Calculator from "./TipCalculato/Calculator";
// import SpliAndEat from "./splitBill/main";
import PopCorn from "./usePopCorn/App";
// import StarsRating from "./usePopCorn/components/StarsRating";
function App() {
  return (
    <>
      {/* <Carausal />
      <TravelApp />
      <Calculator />
      <SpliAndEat /> */}
      <PopCorn />
      {/* <StarsRating
        stars={5}
        color="red"
        size={50}
        messages={["very bad", " Bad", "Ok", "Good", "Excellent"]}
        onSetRating={console.log} 
      />*/}
    </>
  );
}

export default App;
