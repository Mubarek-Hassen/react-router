import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import Welcome from "./pages/Welcom";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main>
      <Route path='/welcome'>
        <Welcome/>
        </Route>
      <Route path='/products'>
        <Products/>
        </Route>
      </main>
    </div>
  );
}

export default App;

