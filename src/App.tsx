import GameBoard from "./GameBoard"

const App: React.FC = () => {
  return (
    <main className="game">
      <section className="game-board">
        <GameBoard />
      </section>
      <section className="game-info">
        {/* Game Info */}
      </section>
    </main>
  )
}

export default App
