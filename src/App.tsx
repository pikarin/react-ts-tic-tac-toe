import GameBoard from './GameBoard'

const App: React.FC = () => {
  return (
    <main className="grid min-h-screen place-content-center">
      <section className="game-board">
        <GameBoard />
      </section>
      <section className="ml-5">{/* Game Info */}</section>
    </main>
  )
}

export default App
