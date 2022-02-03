interface Props {
  value: null | string;
  onClick: () => void;
}

const GameBoardSquare: React.FC<Props> = ({ value, onClick }) => {
  return (
    <button className="h-8 w-8 border-transparent bg-white p-0 text-center text-2xl font-bold focus:outline-none" onClick={onClick}>
      {value}
    </button>
  )
}

export default GameBoardSquare
