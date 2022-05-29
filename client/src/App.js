import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>WM Conjunction</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/invoices">Invoices</Link>
          <Link to="/expenses">Expenses</Link>
        </nav>
      </div>
    </div>
  );
}

export default App;
