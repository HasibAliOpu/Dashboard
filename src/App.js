import "./App.css";
import OrderDetails from "./Components/OrderDetails/OrderDetails";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="bg-[#0484FB]">
      <Sidebar />
      <OrderDetails />
    </div>
  );
}

export default App;
