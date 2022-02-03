import { useState } from 'react'
import calculateWinner from './calculateWinner'
import GameBoardSquare from './GameBoardSquare'

const GameBoard: React.FC = () => {
  const [squares, setSquares] = useState<SquareContent[]>(
    Array(9).fill(null)
  )
  const [xIsNext, setXIsNext] = useState<boolean>(true)

  const handleClick = (i: number): void => {
    const slicedSquares: SquareContent[] = squares.slice()

    if (calculateWinner(slicedSquares) || slicedSquares[i]) {
      return
    }

    slicedSquares[i] = xIsNext ? 'X' : 'O'
    setSquares(slicedSquares)
    setXIsNext(!xIsNext)
  }

  const renderSquare = (i: number): JSX.Element => {
    return <GameBoardSquare value={squares[i]} onClick={() => handleClick(i)} />
  }

  const winner: string | null = calculateWinner(squares)
  let status: string

  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default GameBoard
