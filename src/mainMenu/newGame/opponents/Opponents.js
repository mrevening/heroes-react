import { useSelector } from 'react-redux';
import { Container, List, ListInlineItem } from 'reactstrap';
import OpponentsButton from './OpponentsButton';

export default function Opponents(){
    const opponents = useSelector(state => state.scenarioSettings.settings.opponents);
    return(
        <>
        <Container className="text-center">
            <div>Opponents:</div>
            <div>
                <List type="inline">
                { opponents.map((op, i) => { return(
                    <ListInlineItem key={i}>
                        <OpponentsButton id={i} color={op.color} blocked={op.blocked} human={op.human}/>
                    </ListInlineItem>
                )})}
                </List>
            </div>
        </Container>
        </>
    );
}