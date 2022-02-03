import { useState } from 'react';
import calculateWinner from './calculateWinner';
import GameBoard from './GameBoard'

interface History {
  squares: SquareContent[];
}

const App: React.FC = () => {
  const [history, setHistory] = useState<History[]>([
    {
      squares: Array(9).fill(null),
    },
  ])

  const [xIsNext, setXIsNext] = useState<boolean>(true)

  const current: History = history[history.length - 1]

  const handleClick = (i: number): void => {
    const slicedSquares: SquareContent[] = current.squares.slice()

    if (calculateWinner(slicedSquares) || slicedSquares[i]) {
      return
    }

    slicedSquares[i] = xIsNext ? 'X' : 'O'
    setHistory(history.concat([{ squares: slicedSquares }]))
    setXIsNext(!xIsNext)
  }

  const winner: string | null = calculateWinner(current.squares)
  let status: string

  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <main className="grid min-h-screen place-content-center">
      <section className="game-board">
        <GameBoard
          squares={current.squares}
          onClick={(i: number): void => handleClick(i)}
        />
      </section>
      <section className="mt-4">
        <div>{status}</div>
        {/* Game Info */}
      </section>
    </main>
  )
}

export default App
