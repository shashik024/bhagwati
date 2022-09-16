import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="App-header">
          <a href="/">Bhagwati</a>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />}></Route>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
