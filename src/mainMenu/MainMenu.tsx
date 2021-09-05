import { useReducer } from 'react' ;
import { Button, ButtonGroup } from 'reactstrap';
import NewGame from './newGame/NewGame';
import { Container} from 'reactstrap';

export default function MainMenu() {
  const [showNewGame, toggleShowNewGame] = useReducer(showNewGame => !showNewGame, false);
  const [showHighScores, toggleShowHighScores] = useReducer(showHighScores => !showHighScores, false);
  const [showCredits, toggleShowCredits] = useReducer(showCredits => !showCredits, false);
  const [showLoadGame, toggleShowLoadGame] = useReducer(showLoadGame => !showLoadGame, false);

 return (
    <Container>
      <div className="center">
          <ButtonGroup vertical>
            <Button onClick={toggleShowNewGame}>New Game</Button>
            <NewGame isOpen={showNewGame} toggle={toggleShowNewGame} />
            <Button onClick={toggleShowHighScores}>High Scores</Button>
            <Button onClick={toggleShowCredits}>Credits</Button>
            <Button onClick={toggleShowLoadGame}>Load Game</Button>
            <Button>Quit</Button>
          </ButtonGroup>
      </div>
    </Container>
  );
}
