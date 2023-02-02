import Sidebar from "./Container/Components/Sidebar";
import Body from "./Container/Layout/Body";

function App() {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
