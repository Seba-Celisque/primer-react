import CartWidget from "./components/Cartwidget/CartWidget";
import Navbar from "./components/layaout/navbar/Navbar";
import { ProducList } from "./components/pages/ItemListContainer/ProducstList";

const App = () => {
  let saludo = "Bienvenidos";
  return (
    <div>
      <Navbar />
      <CartWidget />
      <ProducList nombre={saludo} />
    </div>
  );
};

export default App;
