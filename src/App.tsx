import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const foo = process.env.FOO ?? 'no foo, no joy!';
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Hello, <code>World</code>!
                </p>
            </header>
            <footer>
                <p>
                    Foo is: <strong>{foo}</strong>
                </p>
            </footer>
        </div>
    );
}

export default App;
