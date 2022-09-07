import "./App.css";
import DeliveryDetails from "./Components/DeliveryDetails/DeliveryDetails";
import OrderDetails from "./Components/OrderDetails/OrderDetails";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="">
      <Sidebar />
      <OrderDetails />
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <DeliveryDetails />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
