import { Route, Routes, BrowserRouter } from "react-router-dom";
import LayoutComponent from "./components/layout/LayoutComponent";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import "./styles/App.css";
import { CustomProvider } from "./context/CustomContext";
function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutComponent />}>
            <Route path="/" index element={<HomePage />} />
            <Route path="/cart" index element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
