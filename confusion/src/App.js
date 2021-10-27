import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default App;
