import "./App.css";
import DeliveryDetails from "./Components/DeliveryDetails/DeliveryDetails";
import OrderDetails from "./Components/OrderDetails/OrderDetails";
import OverallDetails from "./Components/OverallDetails/OverallDetails";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="">
      <Sidebar />
      <OrderDetails />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mx-5 lg:mx-10 mb-10 -mt-16">
        <div className="col-span-2">
          <DeliveryDetails />
        </div>
        <div>
          <OverallDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
