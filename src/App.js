import "./App.css";
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <Product name="Lenovo" description="i5 lappy" price="50k" />
      <Product name="HP" description="i3 lappy" price="40k" />
      <Product name="Asus" description="i9 lappy" price="80k" />
    </div>
  );
}

export default App;
