import { useState } from 'react'
import calculateWinner from './calculateWinner'
import GameBoard from './GameBoard'

interface History {
  squares: SquareContent[]
}

const App: React.FC = () => {
  const [history, setHistory] = useState<History[]>([
    {
      squares: Array(9).fill(null),
    },
  ])

  const [xIsNext, setXIsNext] = useState<boolean>(true)
  const [stepNumber, setStepNumber] = useState<number>(0)

  const handleClick = (i: number): void => {
    const slicedHistory: History[] = history.slice(0, stepNumber + 1)
    const current: History = slicedHistory[slicedHistory.length - 1]
    const slicedSquares: SquareContent[] = current.squares.slice()

    if (calculateWinner(slicedSquares) || slicedSquares[i]) {
      return
    }

    slicedSquares[i] = xIsNext ? 'X' : 'O'
    setHistory(slicedHistory.concat([{ squares: slicedSquares }]))
    setStepNumber(slicedHistory.length)
    setXIsNext(!xIsNext)
  }

  const jumpTo = (step: number): void => {
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  }

  const current: History = history[stepNumber]
  const winner: string | null = calculateWinner(current.squares)

  const moves = history.map((step, move) => (
    <li key={move}>
      <button
        className="rounded bg-purple-500 px-3 py-1 text-white"
        onClick={() => jumpTo(move)}
      >
        {move ? `Go to move #${move}` : 'Go to game start'}
      </button>
    </li>
  ))

  let status: string

  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <main className="grid min-h-screen place-content-center">
      <div className="flex">
        <section className="game-board">
          <GameBoard
            squares={current.squares}
            onClick={(i: number): void => handleClick(i)}
          />
        </section>
        <section className="ml-5">
          <div>{status}</div>
          <ol className='space-y-2 mt-2'>{moves}</ol>
        </section>
      </div>
    </main>
  )
}

export default App
