import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, Container, List, ListInlineItem } from 'reactstrap';
import { setScenarioSettings } from '../features/scenarioSettings/scenarioSettingsSlice'

export default function ShowScenarios({ isOpen, toggle }){
    const buttons = ["S", "M", "L", "X-L", "ALL" ];
    const dispatch = useDispatch();
    const scenarios = useSelector(state => state.scenarios.list);
    const currentScenario = useSelector(state => state.scenarioSettings.settings);
    const [ highlightedScenario, setHighlightedScenario] = useState(currentScenario);
    const [ scenarioSize, setScenarioSize] = useState("ALL" );
    function sizeFilter(scenario) { return scenarioSize === "ALL" || scenario.size === scenarioSize}; 
    
        
    return (
        <Modal isOpen={isOpen} toggle={toggle} fade={false} backdrop={false}>
            <ModalBody>
                <Container className="text-center">
                    <div>
                        <List type="inline">
                            { buttons.map((button, i) => 
                                <ListInlineItem key={i} >
                                    <button onClick={() =>setScenarioSize(button)}>{button}</button>
                                </ListInlineItem> 
                            )}
                        </List>
                    </div>
                </Container>

                <div>Scenario List:</div>
                {scenarios?.filter(sizeFilter).map((scenario, i) =>
                    <div key={i} onClick={() =>  setHighlightedScenario(scenario) }>
                        <div className={scenario.id === highlightedScenario.id ? "highlightedScenario": null}>
                            <div className="button">{scenario.opponents.length} - {scenario.size} - {scenario.name}</div>
                        </div>
                    </div>)
                }
            </ModalBody>
            <ModalFooter>
                <div>{ highlightedScenario.difficulty }</div>
                <div>{ highlightedScenario.description }</div>
                <Button onClick={() => {console.log(highlightedScenario);dispatch(setScenarioSettings(highlightedScenario)); toggle();}}>OKAY</Button>
            </ModalFooter>
        </Modal>
    );
}