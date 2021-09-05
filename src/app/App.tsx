import './App.css';
import MainMenu from 'mainMenu/MainMenu'
import Game from 'game/Game'
import { useAppSelector } from 'state/hooks'

function App() {
  const showMainMenu = useAppSelector(store => store.app.showMainMenu)
  const showGame = useAppSelector(store => store.app.showGame)
  
  return (
    <>
    { showMainMenu ? <MainMenu /> : null }
    { showGame ? <Game /> : null }
    </>
  );
}

export default App;
