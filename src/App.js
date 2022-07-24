import "./App.css";
import Header from "./components/Header";
import Routers from "./Routers";

function App() {
  return (
    <>
      <Header />
      <div className="container lg:w-2/3 border p-3 mt-6 shadow-lg ring-1 ring-slate-50 rounded-md">
        <Routers />
      </div>
    </>
  );
}

export default App;
