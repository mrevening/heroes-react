import { Container } from 'reactstrap';
import OpponentsButton from './OpponentsButton';
import { useAppSelector } from 'hooks'

export default function Opponents(){
    const opponents = useAppSelector(state => state.scenarioSettings.settings.opponents);
    return(
        <>
        <Container className="text-center">
            <div>Opponents:</div>
            <div>
                <div className="row align-items-center">
                { opponents.map((op, i) => { return(
                    <div className="col" key={i}>
                        <OpponentsButton id={i} color={op.color} blocked={op.blocked} human={op.human}/>
                    </div>
                )})}
                </div>
            </div>
        </Container>
        </>
    );
}