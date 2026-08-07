import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import NormalCrud from "./pages/NormalCrud";
import AdvancedCrud from "./pages/AdvancedCrud";
import OptimisticCrud from "./pages/OptimisticCrud";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        <Header />

        <div className="mx-auto max-w-7xl p-6">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/normal"
              element={<NormalCrud />}
            />

            <Route
              path="/advanced"
              element={<AdvancedCrud />}
            />

             <Route
              path="/optimistic"
              element={<OptimisticCrud />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;