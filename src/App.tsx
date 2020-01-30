import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, RouteComponentProps } from 'react-router-dom'
import Board from './Checkers_Board';

// Home Component
function Index() {
    return <h2>Home Page Component</h2>;
}

type TParams = { id: string };
// Product Component
function Product({ match }: RouteComponentProps<TParams>) {
    return <h2>This is a page for product with ID: {match.params.id} </h2>;
}

// App Component
function App() {
    return (
    <Router>
        <div className="App">
                <header className="App-header">
                    <div>
                <img src={logo} className="App-logo" alt="logo" />
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products/1">First Product</Link>
                        </li>
                        <li>
                            <Link to="/products/2">Second Product</Link>
                        </li>
                        <li>
                            <Link to="/checkers">Checkers!</Link>
                        </li>
                    </ul>
                    </nav>
                    </div>
                    <div>
                         <Route path="/" exact component={Index} />
                         <Route path="/products/:id" component={Product} />
                         <Route path="/checkers" component={Board} />
                    </div>
            </header>
        </div>
    </Router>
  );
}

export default App;
