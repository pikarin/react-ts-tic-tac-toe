interface Props {
  value: null | string;
  onClick: () => void;
}

const GameBoardSquare: React.FC<Props> = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  )
}

export default GameBoardSquare
