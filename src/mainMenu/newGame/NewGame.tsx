import { useState, useEffect } from 'react';
import { Button, Modal, ModalBody, Row, Col } from 'reactstrap';
import Scenario from './scenario/Scenario';
import GameDifficulty from './gameDifficulty/GameDifficulty';
import HeroClass from './heroes/HeroClass';
import Opponents from './opponents/Opponents';
import { setScenarios } from './features/scenariosSlice'
import { setScenarioSettings } from './features/scenarioSettingsSlice'
import { setFractions } from './features/fractionsSlice'
import { setShowGame } from 'app/AppSlice'
import { useAppDispatch } from 'state/hooks'

interface NewGameViewProps {
    isOpen: boolean,
    toggle: any
}

export default function NewGameView({ isOpen, toggle }: NewGameViewProps) {
    const [difficulty, setDifficulty] = useState(1);
    const dispatch = useAppDispatch();

    useEffect(() => { 
        fetch("data/scenarios.json").then(res => res.json()).then(json => { dispatch(setScenarios(json)); dispatch(setScenarioSettings(json[0])); }).catch(console.error);
        fetch("data/fractions.json").then(res => res.json()).then(json => dispatch(setFractions(json))).catch(console.error);
    }, []);

    return(
        <Modal isOpen={isOpen} toggle={toggle} fade={false} backdrop={false} returnFocusAfterClose={false} size={"lg"}>
            <ModalBody>
                <Scenario />
                <GameDifficulty difficulty={difficulty} setDifficulty={setDifficulty}/>
                <Opponents />
                <HeroClass />
                <Row className="d-flex justify-content-center align-items-center text-center">
                    <Col><Button color="primary" onClick={() => { dispatch(setShowGame())} }>OKAY</Button></Col>
                    <Col><div>{ 100 + difficulty*20 }%</div></Col>
                    <Col><Button color="secondary" onClick={toggle}>CANCEL</Button></Col>
                </Row>   
            </ModalBody>
        </Modal>
    );
}