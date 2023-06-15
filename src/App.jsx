import Layout from "./components/layaout/Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { menuRoutes } from "./routes/menuRoutes";

const App = () => {
  let saludo = "Bienvenidos";

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {menuRoutes.map(({ id, path, Element }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
