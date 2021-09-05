import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, Container } from 'reactstrap';
import { setScenarioSettings } from '../features/scenarioSettingsSlice'
import { useAppSelector } from 'state/hooks';

interface ShowScenariosProps{
    isOpen: boolean | undefined,
    toggle: any
}

export default function ShowScenarios({ isOpen, toggle }: ShowScenariosProps){
    const buttons = ["S", "M", "L", "X-L", "ALL" ];
    const dispatch = useDispatch();
    const scenarios = useAppSelector(state => state.scenarios.list);
    const currentScenario = useAppSelector(state => state.scenarioSettings.settings);
    const [ highlightedScenario, setHighlightedScenario] = useState(currentScenario);
    const [ scenarioSize, setScenarioSize] = useState("ALL" );
    function sizeFilter(scenario: IScenario) { return scenarioSize === "ALL" || scenario.size === scenarioSize}; 
    
        
    return (
        <Modal isOpen={isOpen} toggle={toggle} fade={false} backdrop={false}>
            <ModalBody>
                <Container className="text-center">
                    <div>
                        <div className="row align-items-center">
                            { buttons.map((button, i) => 
                                <div className="col" key={i} >
                                    <button onClick={() =>setScenarioSize(button)}>{button}</button>
                                </div> 
                            )}
                        </div>
                    </div>
                </Container>

                <div>Scenario List:</div>
                {scenarios?.filter(sizeFilter).map((scenario, i) =>
                    <div key={i} onClick={() =>  setHighlightedScenario(scenario) }>
                        <div className={scenario.id === highlightedScenario.id ? "highlightedScenario": undefined}>
                            <div className="button">{scenario.opponents.length} - {scenario.size} - {scenario.name}</div>
                        </div>
                    </div>)
                }
            </ModalBody>
            <ModalFooter>
                <div>{ highlightedScenario.difficulty }</div>
                <div>{ highlightedScenario.description }</div>
                <Button onClick={() => {dispatch(setScenarioSettings(highlightedScenario)); toggle();}}>OKAY</Button>
            </ModalFooter>
        </Modal>
    );
}