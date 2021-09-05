import { useSelector } from 'react-redux';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import HeroClassButton from './HeroClassButton';
import { useAppSelector } from 'hooks'

export default function HeroClass(){
    const opponents = useAppSelector(state => state.scenarioSettings.settings.opponents);
    return(
        <>
        <Container className="text-center">
            <div>Heroes:</div>
            <div>
                <ListGroup type="inline">
                { opponents.map((op, i) => { return(
                    <ListGroupItem key={i}>
                        <HeroClassButton slot={i} fractionId={op.fractionId} classBlocked={op.classBlocked} />
                    </ListGroupItem>
                )})}
                </ListGroup>
            </div>
        </Container>
        </>
    );
}