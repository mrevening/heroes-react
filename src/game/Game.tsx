import { Container, Row, Col} from 'reactstrap';
import MainView from './world/mainView/MainView'
import SideView from './world/sideView/SideView'

export default function Game() {
  return (
    <Container fluid={true} id="game">
      <Row noGutters={true} id="row">
        <Col id="mainView">
          <MainView />
        </Col>
        <Col xs="4" id="sideView">
          <SideView />
        </Col>
      </Row>      
    </Container>
  );
}
