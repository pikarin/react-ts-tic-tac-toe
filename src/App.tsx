import { useState } from 'react'
import logo from './logo.svg'

function App(): React.FC {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="text-center">
      <header className="flex min-h-screen flex-col items-center justify-center bg-slate-800 text-[calc(10px+2vmin)] text-white">
        <img
          src={logo}
          className="pointer-events-none h-[40vmin] animate-spin"
          alt="logo"
        />
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            onClick={() => setCount((count) => count + 1)}
            className="rounded bg-blue-500 px-4 py-2 text-2xl"
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="text-cyan-400"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="text-cyan-400"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
