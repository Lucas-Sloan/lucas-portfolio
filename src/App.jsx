//App.jsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import SpinningModel from './components/SpinningModel';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <header className="mb-8">
        <div className="App">
          <SpinningModel />
        </div>
          <div className="flex justify-center space-x-8">
            <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
              <img src={viteLogo} className="w-16 h-16 transition-transform transform hover:scale-110" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="w-16 h-16 transition-transform transform hover:scale-110" alt="React logo" />
            </a>
          </div>
          <h1 className="text-4xl font-bold mt-6">Vite + React + Tailwind</h1>
        </header>
        <main>
          <div className="card p-6 bg-gray-800 rounded-lg shadow-lg">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              onClick={() => setCount(count + 1)}
            >
              count is {count}
            </button>
            <p className="mt-4">
              Edit <code className="text-blue-300">src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="mt-8 text-gray-400">
            Click on the Vite and React logos to learn more
          </p>
        </main>
      </div>
    </>
  );
}

export default App;
