import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import HeroClassButton from './HeroClassButton';
import { useAppSelector } from 'state/hooks'

export default function HeroClass(){
    const opponents = useAppSelector(state => state.scenarioSettings.settings.opponents);
    return(
        <>
        <Container className="text-center">
            <div>Heroes:</div>
            <div className="row align-items-center">
                { opponents.map((op, i) => { return(
                    <div className="col" key={i}>
                        <HeroClassButton slot={i} fractionId={op.fractionId} classBlocked={op.classBlocked} />
                    </div>
                )})}
            </div>
        </Container>
        </>
    );
}