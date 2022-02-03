import GameBoardSquare from './GameBoardSquare'

interface Props {
  squares: SquareContent[]
  onClick: (i: number) => void
}

const GameBoard: React.FC<Props> = ({ squares, onClick }) => {
  const renderSquare = (i: number): JSX.Element => {
    return <GameBoardSquare value={squares[i]} onClick={() => onClick(i)} />
  }

  return (
    <div className="grid w-max h-max grid-cols-3 gap-px border border-gray-500 bg-gray-500">
      {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
      {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
      {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
    </div>
  )
}

export default GameBoard
