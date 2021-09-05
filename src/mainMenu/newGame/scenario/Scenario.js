import { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { Button, Row, Col } from 'reactstrap';
import ShowScenarios from './ShowScenarios';

export default function Scenario(){
    const [showScenarios, toggleShowScenarios] = useReducer(showScenarios => !showScenarios, false);
    const scenarioName = useSelector(state => state.scenarioSettings.settings.name);

    return (
        <>
        <div className="text-center">Scenario:</div>
        <Row className="bordered">
            <Col></Col>
            <Col className="d-flex justify-content-center align-items-center">{scenarioName}</Col>
            <Col className="d-flex justify-content-end"><Button onClick={toggleShowScenarios}>SELECT</Button></Col>
        </Row>         
        <ShowScenarios isOpen={showScenarios} toggle={toggleShowScenarios} />
        </>
    );
}